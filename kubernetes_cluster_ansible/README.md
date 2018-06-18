## Kubernetes Cluster Automation

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
