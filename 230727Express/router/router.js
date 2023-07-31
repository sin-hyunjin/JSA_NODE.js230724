const { Router } = require("express");
const express = require("express");
const router = express(Router);
// DB연결
// 1. mysql 연결할 수 있는 mysql 이라는 모듈가져오기
const mysql = require("mysql2");
// 2. mysql DB에 접근할수 있는 정보를 저장
// DB에 접근할 수 있는 기능을 conn에 저장
let conn = mysql.createConnection({
  // mysql 서버의 주소(ip)
  host: "localhost",
  // mysql에 접속할 id,pw 입력
  user: "root",
  password: "coavldjs3372!@",
  port: "3306",
  database: "nodejs_DB", // DB생성 이름
});

// ======================================================

// 서버의 부담을 줄이기 위해 router파일로 따로 빼줌
router.get("/", (request, response) => {
  console.log("접속확인");
  response.render("exTemp", { day: "월요일" });
});
router.get("/response", (request, response) => {
  console.log(request.query.text);
  response.end();
});

// =================================================
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
// 중첩 라우터 방식은 사용시 페이지를 넘길때 오류가 생겨서 다시뻄
// =================================================
// join.html  -> http://localhost:3000/join" method="post"

//회원가입 정보 전역변수
let join_id = "";
let join_pw = "";
let join_name = "";

//  ==============================================
//  ============  회원가입 페이지  ===============
// ===============================================
router.post("/join", (request, response) => {
  join_id = request.body.id; // 회원가입시 입력한 아이디
  join_pw = request.body.pw; // 회원가입시 입력한 비밀번호
  join_name = request.body.name; //회원가입시 입력한 이름
  console.log("id : " + join_id, ", pw : " + join_pw, "name : " + join_name);
  // DB접속
  conn.connect();

  // (첫번째방법)
  // let sql = `insert into member values('${join_id}','${join_pw}','${join_name}')`;
  // ? -> 나중에 값을 담아준다 (단! 순서를 맞춰서 적어줘야한다.)

  //(두번째 방법 )
  let sql = `insert into member values(?,?,?)`;
  // conn.query(sql,()=>{}) -> sql 쿼리무늘 실행 시킨다 .
  // (sql,()=>{}) : 쿼리문을 실행 후 작업을 진행하겠다는 의미
  conn.query(sql, [join_id, join_pw, join_name], (err, rows) => {
    // ? 에 들어갈 값을 [ ] 안에 순서대로 적어줘야한다.
    // err -> 쿼리문에 오류 내용을 받아온다
    // rows -> 정상 실행된 결과를 받아온다
    // err 또는 rows 둘중 하나만 값이 들어간다.
    if (!err) {
      //err가 아니라면  -> 쿼리문이 정상 실행
      console.log("쿼리문 실행완료");
      // 회원가입 클릭시 로그인 페이지로 리디렉션
      response.redirect(
        "http://127.0.0.1:5501/230727Express/public/Login.html"
      );
    } else {
      console.log("DB 명령이 제대로 실행되지 않았습니다.");
    }
  });
  // response.end(); //응답 종료
});

// ===============================================
// ==========     로그인 페이지      =============
// ===============================================
router.post("/login", (request, response) => {
  let id = request.body.id; // 로그인 아이디
  let pw = request.body.pw; // 저장된 로그인 비밀번호
  console.log("id : ", id, "pw : ", pw);

  conn.connect(); //데이터 베이스 연결
  let sql = "select * from member where id = ? and pw = ?"; //회원정보 조회
  conn.query(sql, [id, pw], (err, rows) => {
    // 쿼리문이 성공했을 때
    if (!err) {
      console.log("로그인 실행 완료");
      // rows는 배열로 담아온다.
      console.log("유저정보 : ", rows);
      console.log("nick : ", rows[0].nick);
      // 조회 결과가 없을 경우 (회원 정보가 없는 경우)
      if (rows.lesngth == 0) {
        console.log("로그인 실패");
      } else {
        console.log("로그인 성공");
        response.render("LoginS", { nick: rows[0].nick });
      }
      //쿼리문이 실패했을때
    } else {
      console.log("로그인 실행 실패");
    }
  });
  // 입력한 이이디와 비밀번호가 회원가입 정보와 일치하는지 확인

  /* if (id == join_id && pw == join_pw) {
    // 일치하는 경우 성공페이지 리디렉션
    console.log("성공");
    response.redirect("http://127.0.0.1:5501/230727Express/public/S.html");
  } else {
    // 일치하지 않는경우 실패 페이지로 리디렉션\
    console.log("실패");
    response.redirect("http://127.0.0.1:5501/230727Express/public/F.html");
  }*/
});

// =============================================
// ========  삭제하고 싶은 회원정보  ===========
// =============================================
router.post("/delete", (request, response) => {
  let del_user = request.body.del_user;
  console.log("user_name : ", del_user);
  // 1. 서버의 DB의 통로
  conn.connect();
  // 2. 실행시킬 쿼리문 작성
  let sql = `delete from member where nick=?`;
  conn.query(sql, [del_user], (err, rows) => {
    if (!err) {
      console.log("회원삭제 성공");
      response.redirect("http://localhost:5501/230727Express/public/Main.html");
    } else {
      console.log("회원삭제 실패");
    }
  });
  // response.end();
});

// ==========================================
// ======== 업데이트 하고싶은 회원 ==========
// ==========================================
router.post("/update", (request, response) => {
  let update_id = request.body.id; // 업데이트하고싶은 계정 id
  let update_pw = request.body.pw; // 바꾸고싶은 비밀번호
  let update_name = request.body.name; // 바꾸고 싶은 이름
  console.log("id : ", update_id, "pw : ", update_pw, "name : ", update_name);
  conn.connect(); //데이터베이스 연결
  let sql = `update member set pw = ?, nick = ? where id = ?`;
  conn.query(sql, [update_pw, update_name, update_id], (err, rows) => {
    if (!err) {
      response.redirect("http://127.0.0.1:5501/230727Express/public/Main.html");
    } else {
      console.log("수정 실패");
    }
  });
});

// =============================================
// ========       전체회원 조회      ===========
// =============================================

router.get("/getAlluser", (request, response) => {
  // DB접속
  conn.connect();

  let sql = `select * from member`;

  conn.query(sql, (err, rows) => {
    if (!err) {
      //err가 아니라면  -> 쿼리문이 정상 실행
      console.log("쿼리문 실행완료");
      console.log(rows);
      // 회원가입 클릭시 로그인 페이지로 리디렉션
      response.render("getAlluser", { id: rows });
    } else {
      console.log("DB 명령이 제대로 실행되지 않았습니다.");
    }
  });
  // response.end(); //응답 종료
});

// 위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
// --> 모듈화 (router)

//  ================================================
//
module.exports = router;
