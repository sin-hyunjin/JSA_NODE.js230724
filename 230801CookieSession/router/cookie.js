const express = require("express");
const router = express.Router();

// 쿠키 : 저장공간을 클라이언트 이용해서 데이터를 관리하는 기술
// 쿠키 생성
router.get("/setCookie", (request, response) => {
  let nick = "newjeans";
  // cookie --> key : value
  response.cookie("nickName", nick, { maxAge: 10000 }); // maxAge : 만료기간 (1000 -> 1초)

  // path : cookie가 어디로 요청이 들어 왔을때만 생성할 것인지
  // secure : https(보안) 으로 설정 되어 있을때만 쿠키를 만들겠다
  // httpOnly : 웹 서버를 통해서만 (http 통신일떄만) 쿠키에 접근 가능
  response.send("쿠키생성");
});

router.get("/getCookie", (request, response) => {
  // 쿠키 가져오기 -> request.cookies
  // 쿠키 값을 가져올때만 request 객체를 이용한다
  console.log(request.cookies.nickName);
  response.send("쿠키가져오기");
});

router.get("/deleteCookie", (request, response) => {
  response.clearCookie("nickName");
  response.clearCookie("nickName :");
  response.send("쿠키삭제");
});
module.exports = router;
