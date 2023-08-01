const express = require("express");
const router = express.Router();
const db = require("../config/database");
let conn = db.init();

//http://localhost:3000/user/join
router.post("/join", (request, response) => {
  let join_id = request.body.id; // 회원가입시 입력한 아이디
  let join_pw = request.body.pw; // 회원가입시 입력한 비밀번호
  let join_name = request.body.name; //회원가입시 입력한 이름
  console.log("id : " + join_id, ", pw : " + join_pw, "name : " + join_name);
  // DB접속
  conn.connect();
  let sql = `insert into member values(?,?,?)`;

  conn.query(sql, [join_id, join_pw, join_name], (err, rows) => {
    if (!err) {
      //err가 아니라면  -> 쿼리문이 정상 실행
      console.log("쿼리문 실행완료");
      // 회원가입 클릭시 로그인 페이지로 리디렉션
      // response.redirect(
      //   "http://127.0.0.1:5501/230727Express/public/Login.html"
      // );
    } else {
      console.log("DB 명령이 제대로 실행되지 않았습니다.");
    }
  });
  response.end();
});

// user / selectone
router.post("/SelectOne", (request, response) => {
  // DB접속
  let id = request.body.selectId;
  console.log(id);
  conn.connect();
  let sql = "select * from member where id=?";
  conn.query(sql, [id], (err, rows) => {
    if (!err) {
      //err가 아니라면  -> 쿼리문이 정상 실행
      console.log(rows);
      response.render("SelectOne.html", { selectUser: rows });
    } else {
      console.log("DB 명령이 제대로 실행되지 않았습니다.");
    }
  });
});

router.post("/login", (request, response) => {
  let id = request.body.id;
  let pw = request.body.pw;

  conn.connect();
  let sql = "select * from member where id=? and pw=?";
  conn.query(sql, [id, pw], (err, rows) => {
    if (!err) {
      if (rows.length > 0) {
        console.log("로그인 성공");
        // 로그인 성공했을때 DB에서 가지고온 정보를
        // cookie나 session에 저장하고싶다.
        // 쿠키 생성
        response.cookie("info", rows[1]);
        // 세션 생성
        request.session.info = rows[1];
        response.render("Main.html");
      }
    } else {
      console.log("쿼리문 실행 실패");
    }
  });
});
module.exports = router;
