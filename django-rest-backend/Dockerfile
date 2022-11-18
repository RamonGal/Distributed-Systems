# pull official base image bullseye
FROM python:3.10

# set work directory

WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apt-get update --fix-missing
RUN apt-get install -y libpq-dev python3-pip python-dev postgresql postgresql-contrib
RUN apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./entrypoint.sh .

RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

# copy project
COPY . .

# staticfiles
RUN python manage.py collectstatic --no-input --clear 

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
