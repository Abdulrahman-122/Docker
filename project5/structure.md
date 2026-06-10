to make containers for that application

build docker-compose.yaml 
  
    services:
    flask:
      build: .
      container_name: backend_flask
      ports:
        - "8001:5000"
      environment:
        DATABASE_URL: mysql+pymysql://maria:AppSecrets@mariadb/My_maria
        FLASK_APP: run.py
      healthcheck:
        test: ["CMD","curl","-f","127.0.0.1"]
        interval: 20s
        timeout: 10s
        retries: 5
      depends_on:
        mariadb:
           condition: service_healthy
   
  
    mariadb:
      image: mariadb:latest
      healthcheck:
        test: ["CMD","mariadb-admin","ping","-h","127.0.0.1","-u","root","-p1234Root"]
        interval: 10s
        timeout: 5s
        retries: 5
      container_name: database_maria
      environment:
        MYSQL_ROOT_PASSWORD: 1234Root
        MYSQL_DATABASE: My_maria
        MYSQL_USER: maria
        MYSQL_PASSWORD: AppSecrets
      volumes:
        - maria_data:/var/lib/mysql
    volumes:
      maria_data:


    then build; 
      Dockerfile
    FROM python:3.14-slim
    RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install -r  requirements.txt
    COPY . .
    CMD ["python","run.py"]
then;

    pip freeze > requirements.txt

then;
start compose the file
         
    docker  compose up --build
    then migrate everything(convert code to tables inside mariadb)
    docker exec -it flask_backend bash
    flask db init
    flask db migrate -m "initial"
    flask db upgrade 
    

