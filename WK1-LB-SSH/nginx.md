# What is a reverse proxy?

In computer networks, a reverse proxy is a type of proxy server that retrieves resources on behalf of a client from one or more servers. These resources are then returned to the client, appearing as if they originated from the proxy server itself.

# Why would you need a reverse proxy?

`Load balancing` — distribute incoming traffic across multiple server resources to improve performance.

`Web acceleration` — compress inbound and outbound data, as well as cache commonly requested content to speed up traffic flow.

`Security` — protect the identities of your back end machines. Set up SSL to serve your web app over HTTPS

# What do we set up today? 

Our fictional app environment has 2 significant instances: the reverse proxy instance and the target instance that’s running something (e.g. an app) on port 3000. We want to be able to access this app via the reverse proxy when we navigate to our fictional domain from our host machine. Let’s begin!
![Alt text](images/nginx.png?raw=true)

## Step 0. Git clone our course

Open terminal and type

```
git clone https://github.com/JiangRenDevOps/DevOpsLectureNotesV2.git
```

or if you have this folder already, pull the latest code.

```
cd DevOpsLectureNotesV2
git pull
```



## Step 1. Install Nginx

We have set up the Nginx for you, but if you would like to set it up yourself: 

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx
```

Start the VM

```
vagrant up
```

Ssh to the VM

```
vagrant ssh
```

Open another terminal

```
cd ../prerequisite
```

Install Vagrant SCP (a copy tool for you to copy files over to vagrant)

```
vagrant plugin install vagrant-scp
```

Now you can copy the course material over to the vagrant machine

```
vagrant scp ../WK1-LB-SSH/ /home/vagrant
```

If we go to vagrant machine now, with the following command

```
vagrant ssh
ls
```

You should see the WK1-LB-SSH folder 


Once the VM has been started, you can access the Nginx page from the host machine.
`http://localhost:8080/`
![Alt text](images/nginx_welcome.png?raw=true)

Other useful commands to start/stop/reload nginx:

`$ sudo systemctl start nginx`

`$ sudo systemctl stop nginx`

`$ sudo systemctl restart nginx`

`$ sudo systemctl status nginx`

## Step 2. Spin up a webserver

On the VM, we have installed npm for you, please run
 
```
cd /home/vagrant/WK1-LB-SSH
npm install express
```

Inspect the `app.js` file and run

```
node app.js
```

Now, go access `localhost:3000` in your VM browser

## Step 3. Configure routes

Change the working directory to the Nginx config files location for sites.

`cd /etc/nginx/sites-available/`

Files containing routing rules go in the sites-available/ folder. 

To activate those rules you need to create a symlink of those files to the `sites-enabled/` folder. 

By default, this has already been done for you with the file default. 

This file has some example configuration rules. We won’t need them so feel free to delete everything inside the file default. 

Add the following lines to the nginx.conf file under the `http {}` block:

```
server {
    listen 80;
    listen [::]:80;
    server_name _;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

You can add multiple config files, 
a config file can contain multiple `server{}` server blocks,
 a server block can contain multiple `location{}` blocks.
 
Tips: edit in your local machine if it is faster, 
copy it over to vagrant machine and copy it over to replace the config, see Step 1.

## Step 4. Test and reload Nginx

We should always test our configuration by 

```
sudo nginx -t
```

And reload nginx

```
sudo systemctl reload nginx
```

Reload the page now, you should now see nginx has redirected our request to the nodejs app:
![Alt text](images/hello_world.png?raw=true)


# Advanced Hands-on

Imagine you are writing a service that needs to handle more load. 

You will need a load balancer and multiple app.js to handle the loads.

Let us build something like this:
![Alt text](images/loadbalancer_docker_app.png?raw=true)


## Step 1 change the nginx.conf file

Have a read on `loadbalancer.conf` and copy the file over to replace `nginx.conf`

```
sudo cp WK1-LB-SSH/loadbalancer.conf /etc/nginx/nginx.conf
```

## Step 2 reload nginx

```
sudo systemctl reload nginx
```

## Step 3 set up our applications

```
cd WK1-LB-SSH
docker-compose build
docker-compose up
```

## Step 4 hit the endpoint from localhost on your laptop

Open a browser and hit `localhost:8081`

## Step 5 hit the endpoints multiple times

You should now see:

![Alt text](images/image_a.png?raw=true)

or 

![Alt text](images/image_b.png?raw=true)

You should see the following logs:

![Alt text](images/loadbalanced_app.png?raw=true)

