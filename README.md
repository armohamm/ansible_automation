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
