
#####################################################################################
#####################################################################################

### Automation- Docker ENV setup and install Jenkins

* Step 1:
```
Edit the hosts file by adding you node ips and keyfile
```

* Step 2:

```
ansible-playbook -i hosts playbook.yml
```

1. This will Set the hostname, install docker in all Nodes
2. Install Jenkins, provision Docker private registry and pull a docker image


#####################################################################################
#####################################################################################


### Automation- Kubernetes Cluster Automation

* Step 1:
```
Edit the hosts file by adding you node ips and keyfile
```

* Step 2:

```
ansible-playbook -i hosts playbook.yml
```

This will provision the master and worker nodes.


* Step 3:

```
ansible-playbook -i hosts workers.yml
```

This will join the worker nodes to the master.


#####################################################################################
#####################################################################################


### Automation- Configure MongoDB Replication


* Step 1:
```
Edit the hosts file by adding you node ips and keyfile
```

* Step 2:

```
ansible-playbook -i hosts playbook.yml
```

1. This will provision MongoDB in all Nodes
2. Sets up the master and worker nodes


#####################################################################################
#####################################################################################


## Automation- Configure NFS(Network File System)

* Step 1:
```
Edit the hosts file by adding you node ips and keyfile
```

* Step 2:

```
ansible-playbook -i hosts playbook.yml
```

1. This will Set the hostname and add to **/etc/hosts** file in all Nodes
2. Install NFS-server in server and exports the configured nfs directory
3. Install nfs-common in all clients and Mounts the target shared directory in a specific location
