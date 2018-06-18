var cfg = rs.conf()
cfg.members[0].priority = 2
cfg.members[1].priority = 1
rs.reconfig(cfg)

rs.config()
