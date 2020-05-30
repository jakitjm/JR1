## Homework

Let us Team Up! 
Team up with your peers; 2-3 people per team. You will work together across the course.

Q1. Check the IP address of google.com, atlassian.com, amazon.com.au and find the path to these servers [tip: try to use ping, traceroute and dig]

Q2. Redo Q1 by opening those websites and find the DNS packets and other packets in wireshark (https://www.wireshark.org/)

Q3. Copy some files from your host machine to the client machine via the command line and copy them out [Tip: try to use scp]

Q4. Create an AWS free account (You need to add your credit card details) and try out aws-cli; upload, browse and upload files to S3.

Q5. Read through this tutorial about Nginx https://openresty.org/download/agentzh-nginx-tutorials-en.html and try out different settings. Share with the team what are the difference between Round Robin and Least Connection.

Q6. Find and use a load tester to load test the URLs. Note down how many requests per second (RPS) can Nginx handle. Does it match what Nginx claimed? Also, try to monitor the saturation of the Nginx server (CPU, memory, I/O etc...). Do you see any significant changes in those metrics?

## Pre-requisite to WK2 - Create an AWS account

1. Account creation
The account creation itself is free. We can use resources under free-tier for free up to 1 year. Please use the link below to create: https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/

2. Verify your account is working
Please verify that you can create an EC2 instance (Instance Type: t2.micro) 
https://aws.amazon.com/premiumsupport/knowledge-center/create-linux-instance/
