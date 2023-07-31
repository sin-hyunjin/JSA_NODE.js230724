const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

let conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "coavldjs3372!@",
  port: "3306",
  database: "nodejs_DB",
});

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

router.post("/SelectOne", (request, response) => {
  // DB접속
  conn.connect();
  let sql = "select * from member";
  conn.query(sql, (err, rows) => {
    if (!err) {
      //err가 아니라면  -> 쿼리문이 정상 실행
      console.log("쿼리문 실행완료");
      console.log(rows[1]);
      response.render("SelectOne", { id: rows[1].id });
    } else {
      console.log("DB 명령이 제대로 실행되지 않았습니다.");
    }
  });
});

module.exports = router;
