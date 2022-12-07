# Distributed-Systems

* The idea is to make a front end single-page react typescript webapp, with syncronous view of a changing interface that viewers can modify together.
* This view is to be managed by a django rest backend that serves the views json response, which will be a serialized disposition of data from a postgres database.
* The user view updates are made with websockets that connect to consumer channels, that are defined through django channels with a redis cache/layer that defines the rooms and types of consumer we are dealing with.
* For a perfectly in sync view for different users, we use an implementation of a Lamport timestamp.
* An algorithm for mutual exclusion using a redis Redlock was made and the above mentioned timestamp helps determines the pace with which we can apply changes to the shared state.
* The algorithm that changes the view images with user input was implemented as a JsonRPC system that handles concurrent API calls from multiples parallel users and distributes it to replicas whose calls are distributed with a service distributor using docker compose in development, but should be made with a service like ECS or EKS or Kubeflow in production.
* The algorithm in question is a style transfer for an image that is downsized than style transfered multiple times, than upsampled and transfered again, with less iterations. This is done to avoid long epoch time since github pages only has CPU.

# Cloud implementation for the project

Idealized to be implemented in AWS using terraform or pulumi to define the infrastructure. Using a load balancer to manage the proxies between the servers and external users. With NAT gateways to map inner comunication between services.

## Diagram

The architecture of the services were made to follow this cloud structure:


```
![alt text](https://github.com/RamonGal/Distributed-Systems/blob/main/DAT.png?raw=true)
```
