# Description

This is to demo how to use SSH.

# what is SSH?
The SSH protocol (also referred to as Secure Shell) is a method for secure remote login from one computer to another. It provides several alternative options for strong authentication, and it protects the communications security and integrity with strong encryption. It is a secure alternative to the non-protected login protocols (such as telnet, rlogin) and insecure file transfer methods (such as FTP).

In short, SSH can be used to
remote login to a server
transfer files from/to a server


# Pre-requisite

A Linux box or a Macbook

# Task 1: Generate a ssh key pair and send your public key to the channel
Command:
```
ssh-keygen
cat ~/.ssh/id_rsa.pub
```
Example:
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/davis/.ssh/id_rsa): 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/davis/.ssh/id_rsa.
Your public key has been saved in /home/davis/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:vNwb6VCRqFtoUWSW28nNqJZUEOxgxLv5zg6wYyUYYag davis@dliu-atlassian
The key's randomart image is:
+---[RSA 3072]----+
| .o  o.oB+       |
|.. .  ++o...     |
|. .  ..+.=o=     |
|E  o  .=+ =.o    |
|  . o =+So.      |
|     *o+++ .     |
|    + oo+ +      |
|   . . o.o o     |
|       o+ o      |
+----[SHA256]-----+
$ cat ~/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCwc51cMxwdNOMVMCgbUqpPvEF+5mkChB51AmYgVIJqvgPEgp0w10lWdJPI6rphNbByVQYLCOWSaEpZ+pbmKYkHxGeJBr8NLbny2bgSMyX05/BaxBGJpVfNx8SO2HkGuq7FOk8W7dFzNiPqD0HQIEJLSMcyPjZtYHarqWDz8Xe7Y0IIA5U6Q5TJzF/CQEFsY4x+5bWqTDuQjtKNfPLw6yU5g3HtdJb7EIFEGpLQTajuioOXTcop87CjfOGYH8YW94N1nCulVGW3pe+Qx1lab7lJ/r8i95JxN64Al9i8sHQSejNw8n01rSzfLVrf9DfszqGw+mv270eDMaajFgfMlcaCFYSWESheguhxv5VNBpW/VBma8Mt1e/yYbMW1bGbuFSK1o+CpM9wv1X1tg9MbJ0YS8DksqdKadtb8AZy8GFDw50xEqS7TRTjeDxkIGpSGJKqr6w9OMJ2hVsCHa4UPkkan8YJaIwCLOGW+/xH5jU4fhoZIhgvuHu1tn0SalCFnm8c=
```

Please send your **public key** to the wechat channel. Your teacher will add your public key to the server.

Note: List the contents of ~/.ssh to view the key files.
      
      $ ls ~/.ssh
      id_rsa id_rsa.pub

The command displays two files, one for the public key (for example id_rsa.pub) and one for the private key (for example, id_rsa).

# Task 2: SSH to a remote server
Command:
```
ssh ec2-user@3.25.99.145
touch "Your Name"
```
Example:
```
ssh ec2-user@3.25.99.145
touch "Michael"
```

# Task 3: Download a local file to the server
```
scp ec2-user@3.25.99.145:test.html .
```
You should be able to open the test.html from your laptop.
