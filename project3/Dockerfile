# syntax=docker/dockerfile:1

FROM ubuntu:22.04

RUN apt-get update && apt-get install -y python3 python3-pip

RUN pip install flask==3.0.*
COPY hello_world.py /
ENV FLASK_APP=hello_world
EXPOSE 8000
CMD flask run --host 0.0.0.0 --port 8000
