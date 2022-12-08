JSON-RPC 2.0 
================

JsonRPC is a simple JSON-RPC 2.0 server/client implementation in Python.
https://json-rpc.readthedocs.io/en/latest/

Server
--------

This server inplements a three level style-transfer API. The style transfer used was inpired by the paper [A Neural Algorithm of Artistic Style](https://arxiv.org/abs/1508.06576) by Leon A. Gatys, Alexander S. Ecker, and Matthias Bethge.
and the implementation of https://github.com/jcjohnson/neural-style.

The server is defined in the file `server.py` and it is accessible through http calls:

.. code-block:: python

    @dispatcher.add_method
    def styleTransfer(**kwargs):
        img  = kwargs["img"] 
        style = kwargs["style"]
        style_weight = kwargs["style_weight"]
        try: 
            # make the content and style images from the base64 encoded strings
            make_base_images(img, style)
        except:
            return {
                "success": False, 
                "error":"error while making base images"
            }
        try:
            # perform style transfer in lower sized layers to reduce time between each run
            level1_style_transfer(style_weight)
            level2_style_transfer(style_weight)
            level3_style_transfer(style_weight)
        except:
            return {
                "success": False, 
                "error":"error while performing style transfer"
            }

        try:
            # delete the images from the previous run and return the base64 encoded output image
            return {
                "success": True,
                "img": delete_intermediate_images_and_return_base64_out()
            }
        except:
            return {
                "success": False, 
                "error":"error while deleting intermediate images and returning base64 encoded output image"
            }


    @Request.application
    def application(request):
        response = JSONRPCResponseManager.handle(
            request.data, dispatcher)
        return Response(response.json, mimetype='application/json')


    if __name__ == '__main__':
        run_simple('localhost', 4000, application)

At each level of the style transfer, the number of iterations lower and the image size increases. 
This is done so we can test the structure of the API and the server, using only CPUs, but in the Cloud documentation we go through how such a system could be brought to production.

Client
------	

This server is defined in the rest API that stores images and will also be implemented in front-end service, so as to lower the number of data transfers between services and to help maintain the lamport syncronization by not blocking the server between requests to the rpc method.
With the front-end service, the user will be able to upload images and select the style image and the style weight. The front-end service will then send a request to the rest API, which will then send a request to the rpc server. The rpc server will then perform the style transfer and return the base64 encoded output image to the rpc service while assyncrously awaiting for the response of the api.

.. code-block:: python

    def post(self, request, pk):
        content_img = Roll.objects.get(pk).png
        user_id = request.user.id
        style_img = request.POST.get('style_img')
        style_weight = request.POST.get('style_weight')
        url = "http://localhost:4000/jsonrpc"
        headers = {'content-type': 'application/json'}

        # Example echo method
        payload = {
            "method": "styleTransfer",
            "params": {
                "img": content_img,
                "style": style_img,
                "style_weight": style_weight,
            },
            "jsonrpc": "2.0",
            "id": self.context['request'].user.id,
        }
        response = requests.post(
            url, 
            data=json.dumps(payload), 
            headers=headers,
        ).json()
        
        if not (response["jsonrpc"] and response["id"] == user_id):
            return Response({"error": "Error in style transfer"}, status=400)

        if response["success"]:
            return Response({"success": True, "img": response["img"]}, status=200)
            
