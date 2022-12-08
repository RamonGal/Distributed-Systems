Django rest backend 
================================

API WITH DJANGO REST FRAMEWORK
---------------------------------

[Django REST framework](http://www.django-rest-framework.org/) is a powerful and flexible toolkit for building Web APIs.

Requirements
~~~~~~~~~~~~~~~~~
- Python
- Django
- Django REST Framework

Installation
~~~~~~~~~~~~~~~~~~
After you cloned the repository, you want to create a virtual environment, so you have a clean python installation.
You can do this by running the command

::
    
    python -m venv env


After this, it is necessary to activate the virtual environment, you can get more information about this [here](https://docs.python.org/3/tutorial/venv.html)

You can install all the required dependencies by running

::
    
    pip install -r requirements.txt


Structure
~~~~~~~~~~~~~~

In a RESTful API, endpoints (URLs) define the structure of the API and how end users access data from our application using the HTTP methods - GET, POST, PUT, DELETE. Endpoints should be logically organized around _collections_ and _elements_, both of which are resources.


Use
~~~~~~

We can test the API using [curl](https://curl.haxx.se/) or [httpie](https://github.com/jakubroztocil/httpie#installation), or we can use [Postman](https://www.postman.com/)

Httpie is a user-friendly http client that's written in Python. Let's try and install that.

You can install httpie using pip:

:: 
    
    pip install httpie

First, we have to start up Django's development server.

::
    
    python manage.py runserver



Authentication
-------------------

Only authenticated users can use the API services, for that reason if we try this:

::

    http  http://127.0.0.1:8000/api/service/

we get:

::
    
    {
        "detail": "Authentication credentials were not provided."
    }
    

Instead, if we try to access with credentials:

::

    http http://127.0.0.1:8000/api/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA4Mjk1LCJqdGkiOiI4NGNhZmMzMmFiZDA0MDQ2YjZhMzFhZjJjMmRiNjUyYyIsInVzZXJfaWQiOjJ9.NJrs-sXnghAwcMsIWyCvE2RuGcQ3Hiu5p3vBmLkHSvM"


we get the service json as a return 

Create users and Tokens
~~~~~~~~~~~~~~~~~~~~~~~~~~

First we need to create a user, so we can log in

::

    http POST http://127.0.0.1:8000/api/auth/register/ email="email@email.com" username="USERNAME" password1="PASSWORD" password2="PASSWORD"


After we create an account we can use those credentials to get a token

To get a token first we need to request

::
    
    http http://127.0.0.1:8000/api/auth/token/ username="username" password="password"


after that, we get the token

::

    {
        "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNjI5MjMyMSwianRpIjoiNGNkODA3YTlkMmMxNDA2NWFhMzNhYzMxOTgyMzhkZTgiLCJ1c2VyX2lkIjozfQ.hP1wPOPvaPo2DYTC9M1AuOSogdRL_mGP30CHsbpf4zA",
        "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA2MjIxLCJqdGkiOiJjNTNlNThmYjE4N2Q0YWY2YTE5MGNiMzhlNjU5ZmI0NSIsInVzZXJfaWQiOjN9.Csz-SgXoItUbT3RgB3zXhjA2DAv77hpYjqlgEMNAHps"
    }

We got two tokens, the access token will be used to authenticated all the requests we need to make, this access token will expire after some time.
We can use the refresh token to request a need access token.

requesting new access token

::

    http http://127.0.0.1:8000/api/auth/token/refresh/ refresh="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYxNjI5MjMyMSwianRpIjoiNGNkODA3YTlkMmMxNDA2NWFhMzNhYzMxOTgyMzhkZTgiLCJ1c2VyX2lkIjozfQ.hP1wPOPvaPo2DYTC9M1AuOSogdRL_mGP30CHsbpf4zA"


and we will get a new access token

::

    {
        "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2MjA4Mjk1LCJqdGkiOiI4NGNhZmMzMmFiZDA0MDQ2YjZhMzFhZjJjMmRiNjUyYyIsInVzZXJfaWQiOjJ9.NJrs-sXnghAwcMsIWyCvE2RuGcQ3Hiu5p3vBmLkHSvM"
    }

or to verify the token from a third party page using the requests library

.. code-block:: python

    import requests as rs
    rs.get('http://localhost:8000/api/auth/token/verify/', headers = {'Authorization': f'Bearer {token}'})

