var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取用户信息
router.get('/get_user', userController.showUser);

// 发送祝福
router.post('/send_blessing', userController.sendBlessing);

module.exports = router;
