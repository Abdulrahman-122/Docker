# Shipping mini full stack application using Docker
    Prerequisites
    
    Install:
    
    Docker
    Git

Verify installation:

    docker --version
    git --version
    Clone Repository
    git clone https://github.com/Abdulrahman-122/Docker.git
    cd YOUR_REPO
    Create Docker Network
    docker network create my_app
    Start PostgreSQL
    docker run -d \
      --name db \
      --network my_app \
      -e POSTGRES_USER=postgres \
      -e POSTGRES_PASSWORD=AppSecrets \
      -e POSTGRES_DB=mydb \
      -v pgdata:/var/lib/postgresql/data \
      -p 5433:5432 \
      postgres:15.1-alpine
    Create Database Table

Enter PostgreSQL container:

    docker exec -it db sh
    
    Open PostgreSQL:
    
    psql -U postgres -d mydb
    
    Create table:
    
    CREATE TABLE logs(
        id SERIAL PRIMARY KEY,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    
    Verify:
    
    SELECT * FROM logs;
    
    Exit:
    
    \q
    Build Backend
    cd backend
    
    docker build -t backend .
    
    Run backend:
    
    docker run -d \
      --name backend \
      --network my_app \
      -e DATABASE_URL=postgres://postgres:AppSecrets@db:5432/mydb \
      -p 5001:5001 \
      backend
    
    Verify:
    
    curl http://localhost:5001/api/time
    
    Expected output:
    
    {
      "time":"2026-06-09T18:39:20.055Z"
    }
    Build Frontend
    
    Open another terminal:
    
    cd frontend
    
    Build image:
    
    docker build -t frontend .
    
    Run container:
    
    docker run -d \
      --name frontend \
      --network my_app \
      -p 5173:5173 \
      frontend
    Access Application

Open browser:
see data across frontend
http://localhost:5173
<img width="1905" height="622" alt="image" src="https://github.com/user-attachments/assets/74bc8d8a-4dba-49cb-b227-93cd60da0604" />
<img width="1920" height="926" alt="image" src="https://github.com/user-attachments/assets/604f997e-bd03-47df-877a-34b76a5626cf" />
that means data now in database of postgres container let's see
<img width="1648" height="908" alt="image" src="https://github.com/user-attachments/assets/a8d55abb-deb0-4af1-838c-b4009b3f0bba" />
<img width="1190" height="448" alt="image" src="https://github.com/user-attachments/assets/7627fa55-2282-4857-a0ff-6bbdcef23047" />

and see data across backend; http://localhost:5001/api/time
<img width="1920" height="458" alt="image" src="https://github.com/user-attachments/assets/05cf6a65-ef99-48e6-b06b-c71131ad4f58" />

Features:

Retrieve database time
Insert messages into PostgreSQL
Useful Docker Command
some important commands;
docker ps

View logs:

docker logs backend

docker logs frontend

docker logs db

Open shell:

docker exec -it backend sh

docker exec -it db sh

Stop containers:

docker stop frontend backend db

Remove containers:

docker rm -f frontend backend db

by doing that project you will be able to build a full stack app using docker 
keep building..
