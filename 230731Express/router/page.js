// views 안에있는 html 파일끼리 페이지 이동이 되게끔 설정해 주는 역할
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("Main.html");
});
router.get("/Login", (request, response) => {
  response.render("Login.html");
});
router.get("/Join", (requset, response) => {
  response.render("join.html");
});
router.get("/SelectOne", (requset, response) => {
  // 확장자를 안적을시 ejs로 판단?
  // nunjucks 모듈을 사용할 시 확장자를 적어줘야한다.
  response.render("SelectOne.html");
});

module.exports = router;
