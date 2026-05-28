 - as we mentioned before -> docker can run more than one container on a single host -> this improves security or whatever...
- - containers are integral with ci/cd + its fast and consistence at building any software across any environment..
  - - since it's used to build software , share on a local , public sites.
    - Docker vs Virtual Machines;
        - Docker is lightweight,secure,independent,all of that stuff and share the same os kernel,it's time to start is very low(more efficient)
        - vm isn't lightweight,secure,independant of the host device as it  tries to mimices it's disks,memory,processes,but it's time to start or booting is high
        - Docker is the best compared with vm
        - vm is good at strong isolation when we want to  ship an application across the other systems or ..

    --------------
  Docker Architecture;
   - <img width="866" height="466" alt="image" src="https://github.com/user-attachments/assets/0ccb4bee-65ee-4297-a082-a8a362a06af9" />

    - docker clients communicate with docker server(deamon) in order to build,manages your work
    - they communicate over Rest Api,or whatever.
 -------------

 What is Docker daemon,client,disktop,registers,objects?
  - Docker daemon -> called dockerd + it manages+builds what client made like containers or ...
  - Docker client -> this is the one that you interact with it's the cli in the command lines
    - you can interact with multiple deamon through it.
   
  - Docker desktop -> easy GUI to interact with docker .
  - Docker registers -> docker registery has images in it ->dockerd store images in it
  - Docker Objects -> docker have networks,volumes,plugins,containers that you will use throughout docker journey.
  - Images;
    - it's a read  only template that contain instructions or whatever .
      -   it's an image build on top of other image ex; your image is built on top of Ubuntu image and Ubuntu image is built on top of other images for configurations or whatever.
    - Containers -> it's the image that you built on top of the other containers.
- Networks;
  - Docker containers communicate with each other through virtual Networks
    - so you can make your bridge network or virtual network through it.
- Storage;
  - docker use something called;directories that store data outside docker itself.
  - so this is a safe way to store data in docker.
 
to sum up;
In Docker, an 'image' is a packaged application with all its dependencies, ready to be run as a container
The command 'docker pull' is used to download images from Docker Hub.
A Dockerfile is a text file that contains instructions for building a Docker image
Docker Engine is the core component that creates and manages containe
Docker is primarily used for containerization, which allows applications to run in isolated environments.
