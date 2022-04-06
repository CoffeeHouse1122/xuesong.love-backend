// 引用用户模版数据
const User = require("../models/user.js");
const timestampToTime = function () {
  let date = new Date();
  let Y = date.getFullYear() + "-";
  let M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  let D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  let h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  let m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  let s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
};

const userController = {
  // showUser 获取用户数据并返回到页面
  showUser: async function (req, res, next) {
    try {
      let userData = await User.all();
      res.json({
        code: 200,
        message: "操作成功",
        data: userData,
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
  sendBlessing: async function (req, res, next) {
    try {
      if (!req.body.blessing) {
        return res.json({ code: 201, message: "缺少参数" });
      }
      req.body.login_date = timestampToTime();
      await User.insert(req.body);
      res.json({
        code: 200,
        message: "操作成功",
        data: [],
      });
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e });
    }
  },
};

module.exports = userController;
