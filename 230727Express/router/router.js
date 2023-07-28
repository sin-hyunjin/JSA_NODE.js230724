const { Router } = require("express");
const express = require("express");
const router = express(Router);

// 서버의 부담을 줄이기 위해 router파일로 따로 빼줌
router.get("/", (request, response) => {
  console.log("접속확인");
});
router.get("/response", (request, response) => {
  console.log(request.query.text);
  response.end();
});

// ex02.html  -> http://localhost:3000/nextPage"
router.get("/nextPage", function (request, response) {
  // console.log(request.query.next);
  // 페이지 이동하는 방법!
  // response.redirect("http://127.0.0.1:5501/230727Express/public/ex01.html");
  let page = request.query.next;

  if (page == "Google") {
    // 구글로 이동
    response.redirect("https://www.google.com/");
  }
  if (page == "Naver") {
    // 네이버로 이동
    response.redirect("https://www.naver.com/");
  }
  if (page == "Daum") {
    // 다음으로 이동
    response.redirect("https://www.daum.net/");
  }
});

let join_id = ""; //전역변수
// 중첩 라우터 방식
// 회원가입 페이지
router.post("/join", (request, response) => {
  join_id = request.body.id; // 회원가입시 입력한 아이디
  let join_pw = request.body.pw; // 회원가압시 입력한 비밀번호
  let join_name = request.body.name; //회원가입시 입력한 이름
  // console.log(join_id);

  // 회원가입 클릭시 로그인 페이지로 리디렉션
  response.redirect("http://127.0.0.1:5501/230727Express/public/Login.html");

  // 로그인 페이지
  router.post("/login", (request, response) => {
    let id = request.body.id;
    let pw = request.body.PW;
    console.log(id);
    // 입력한 이이디와 비밀번호가 회원가입 정보와 일치하는지 확인
    if (id == join_id && pw == join_pw) {
      // 일치하는 경우 성공페이지 리디렉션
      response.redirect("http://127.0.0.1:5501/230727Express/public/S.html");
    } else {
      // 일치하지 않는경우 실패 페이지로 리디렉션
      response.redirect("http://127.0.0.1:5501/230727Express/public/F.html");
    }
  });
  response.end(); //응답 종료
});

// 위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
// --> 모듈화 (router)
module.exports = router;
