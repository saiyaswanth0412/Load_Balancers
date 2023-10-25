# Load_Balancers
Load_Balancers using clusters
Using Normal Library the average value of response is 




![image](https://github.com/saiyaswanth0412/Load_Balancers/assets/60351767/d12642f6-6acc-4ad3-b3a7-f48e56f5c42d)


Using Cluster Library the average value of response has been reduced to 



![image](https://github.com/saiyaswanth0412/Load_Balancers/assets/60351767/1007a4b4-9277-4fbd-ad9e-b88670121ab6)







"Significant reductions in response time have been achieved through the utilization of the Cluster Library. This improvement can be attributed to the creation of multiple child processes, dynamically adjusted by the main master process, based on the available CPU cores within the cluster.

To run these tests and observe the performance enhancements, follow these steps:

1)Begin by cloning the source code from the repository.


2)Proceed to install the necessary dependencies using the 'npm install' command.


3)Initiate the Node.js application by executing 'node index.js'.


4)Simulate concurrent requests by launching 'node index1.js' in a separate terminal.


5)Employ 'autocannon' to stress-test the system, emulating 100 clients making requests to 'http://localhost:4001/api/50000000'.


6)Similarly, assess the performance of 'http://localhost:5000/api/50000000' using 'autocannon' with 100 clients.


These steps enable a comprehensive evaluation of the codebase through the analysis of results gathered from 100 tests. The Cluster Library's role in load balancing becomes evident through the substantial reduction in average response times, reflecting its efficiency and capacity for optimization."
