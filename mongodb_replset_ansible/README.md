## Automation- Configure MongoDB Replication


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
