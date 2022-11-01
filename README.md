# Distributed-Systems

* The idea is to make a front end single-page react typescript webapp, with syncronous view of a changing interface that viewers can modify together.
* This view is to be managed by a django rest backend that serves the views json response, which will be a serialized disposition of data from a postgres database.
* The user view updates are made with websockets that connect to consumer channels, that are defined through django channels with a redis cache/layer that defines the rooms and types of consumer we are dealing with.
* For a perfectly in sync view for different users, we use an implementation of a Lamport timestamp.
* An algorithm for mutual exclusion using a syncronous api call and the above mentioned timestamp that determines the pace with which we can apply changes to the shared sql database.
* The algorithm in question is made for a MPI system that handles concurrent API calls from multiples parallel users.

# Cloud implementation for the project

Idealized to be implemented in AWS using terraform to define the infrastructure. Using a load balancer to manage the proxies between the servers and extrenal users.



