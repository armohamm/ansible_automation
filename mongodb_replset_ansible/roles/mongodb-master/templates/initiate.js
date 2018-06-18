var config = {
   _id : "rs0",
   members: [
      { _id: 0, host: "172.31.3.60:27017", priority : 2 },
      { _id: 1, host: "172.31.2.103:27017", priority : 1 }
   ]
}

rs.initiate(config)
