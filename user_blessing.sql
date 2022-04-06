CREATE TABLE `user` (
  `id` int(6) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `name` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `blessing` varchar(200) DEFAULT NULL COMMENT '祝福语',
  `phone` varchar(200) DEFAULT NULL COMMENT '手机号码',
  `device_os` tinyint(2) NOT NULL DEFAULT '0' COMMENT '系统： 1 iOS； 2 安卓； 3 pc',
  `is_attended` tinyint(2) NOT NULL DEFAULT '0' COMMENT '是否参加： 0 否； 1 是',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;