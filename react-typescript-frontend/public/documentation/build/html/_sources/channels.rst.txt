Django channels - Async Server
===============================

This service was made with Django channels, redlock, websockets and Redis (caching database).
This service is used as a real time messaging between clients. The service uses a redis database to store the messages and a redlock to lock the database when a message is being sent for leader election between the user themselves.

* Django Channels - https://channels.readthedocs.io/en/stable/
Channels is a project that takes Django and extends its abilities beyond HTTP - to handle WebSockets, chat protocols, IoT protocols, and more. It’s built on a Python specification called ASGI.
Channels builds upon the native ASGI support in Django. Whilst Django still handles traditional HTTP, Channels gives you the choice to handle other connections in either a synchronous or asynchronous style.

* Redis - https://redis.io/
The open source, in-memory data store used by millions of developers as a database, cache, streaming engine, and message broker.

* Redlock - 
Used:
https://github.com/SPSCommerce/redlock-py

Discussion:
https://redis.io/topics/distlock


* Websockets - 
https://www.npmjs.com/package/react-use-websocket
https://www.luiztools.com.br/post/como-criar-um-frontend-realtime-com-reactjs-e-websockets/

* React-Typescript - 
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/




