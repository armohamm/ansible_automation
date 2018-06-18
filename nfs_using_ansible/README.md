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
