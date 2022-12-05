from werkzeug.wrappers import Request, Response
from werkzeug.serving import run_simple
import os
from jsonrpc import JSONRPCResponseManager, dispatcher

def level1_style_transfer(style_weight):
    # perform style transfer in lower sized layers to reduce time between each run
    content_img = 'content.png'
    style_img = 'style.png'
    output_img = 'output1.png'
    num_iterations = 10
    os.system(
        f"""th neural_style.lua \
		-gpu -1 \
		-content_image {content_img} \
		-style_image {style_img} \
		-style_weight {style_weight} \
		-image_size 256 \
		-num_iterations {num_iterations} \
		-tv_weight 0 \
		-output_image {output_img}"""
    )

def level2_style_transfer(style_weight):
    # perform style transfer in higher sized layers to reduce time between each run
    content_img = 'output1.png'
    style_img = 'style.png'
    output_img = 'output2.png'
    num_iterations = 2
    os.system(
        f"""th neural_style.lua \
        -gpu -1 \
        -content_image {content_img} \
        -style_image {style_img} \
        -init image -init_image output1.png \
        -style_weight {style_weight} \
        -image_size 512 \
        -num_iterations {num_iterations} \
        -tv_weight 0 \
        -output_image {output_img}"""
    )

def level3_style_transfer(style_weight):
    # perform style transfer in highest sized layers to reduce time between each run
    content_img = 'output2.png'
    style_img = 'style.png'
    output_img = 'output.png'
    num_iterations = 1
    os.system(
        f"""th neural_style.lua \
        -gpu -1 \
        -content_image {content_img} \
        -style_image {style_img} \
        -init image -init_image output2.png \
        -style_weight {style_weight} \
        -image_size 1024 \
        -num_iterations {num_iterations} \
        -print_iter 1 \
        -save_iter 5 \
        -tv_weight 0 \
        -output_image {output_img}"""
    )

def delete_intermediate_images_and_return_base64_out():
    # delete the images from the previous run and return the base64 encoded output image
    result = os.popen("base64 output.png").read()
    os.system("rm output1.png output2.png output.png content.png style.png")
    return result	

def make_base_images(content, style):
    # make the content and style images from the base64 encoded strings
    os.system(f"echo {content} | base64 -d > content.png")
    os.system(f"echo {style} | base64 -d > style.png")
    # resize style image to match content image 1024x1024
    os.system("convert style.png -resize 1024x1024 style.png")

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
        return True, delete_intermediate_images_and_return_base64_out()
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