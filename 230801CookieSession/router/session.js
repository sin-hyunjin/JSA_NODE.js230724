const express = require("express");
const router = express.Router();

router.get("/setSession", (req, res) => {
  // 세션 생성하기
  req.session.nickName = "apple";
  req.session.age = 20;

  res.send("세션만들기");
});

router.get("/getSession", (req, res) => {
  // 세션 생성하기
  let nick = req.session.nickName;
  console.log(nick);
  res.send(nick);
});

router.get("/deleteSession", (req, res) => {
  // 세션 값 지우기
  req.session.destroy();
  res.send("세션제거");
});

module.exports = router;
