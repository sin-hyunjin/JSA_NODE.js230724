// views 안에있는 html 파일끼리 페이지 이동이 되게끔 설정해 주는 역할
const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("Main");
});
router.get("/Login", (request, response) => {
  response.render("Login");
});
router.get("/Join", (requset, response) => {
  response.render("join");
});
router.get("/SelectOne", (requset, response) => {
  response.render("SelectOne");
});
module.exports = router;
