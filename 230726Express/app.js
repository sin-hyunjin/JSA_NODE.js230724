/* 기존 서버가져오는 방식
const http = require("http");
http.createServer((request, response) => {}).listen(3000);
*/

// == express로 서버 요청하기 =====

// 1. express 사용 기능 가져오기
const { request } = require("express");
const express = require("express");
// 2. express 실행 정보를 app 변수에 저장
const app = express();
// 3. router 기능 사용 선언
const router = express.Router();
// body 영역 사용등록 --> post 방식때 사용되어짐
app.use(express.urlencoded({ extended: true })); //body 영역 허용
app.use(express.json()); // 받은 데이터를 json형태로 변환
// 4. 서버등록
app.use(router);
// 클라이언트가 요청보낸 주소값에 따라서 서버를 사용한다.
// 5. 포트번호 등록
app.listen(3000);

// 6. 요청을 보낸 주소값에 대해서 처리!
// http://localhost:3000   ex01.html

router.get("/", (request, response) => {
  console.log("서버접속 확인 ");
});

router.get("/plus", (request, response) => {
  console.log("plus서버접속 확인 ");
  console.log(request.query.user_num1);
  console.log(request.query.user_num2);
  let num1 = parseInt(request.query.user_num1);
  let num2 = parseInt(request.query.user_num2);

  response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  response.write("<html><body>");
  response.write(`결과 ${num1}+${num2} = ${num1 + num2}`);
  response.write("</body></html>");
});
// ======================================
// ===== get 방식으로 서버 요청하기 =====
// ====================================
//  http://localhost:3000/login  /ex02.html
router.get("/login", (request, response) => {
  console.log("서버접속 확인 ");
  console.log(request.query.ID);
  console.log(request.query.PW);

  response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  response.write("<html><body>");
  if (request.query.ID == "aischool" && request.query.PW == "123") {
    response.write("<h2>로그인 성공</h2>");
  } else {
    response.write("<h2>로그인 실패</h2>");
  }
  response.write("</body></html>");
});

// =====================================
// === Post 방식으로 서버 요청하기 =====
// =====================================  /ex02.html
// router 를 통해서 각각의 주소값에 따라 다른 기능을 실행 시킬 수 있다!
// 주의!! router.get , router.post 각각에 상황에 맞게 사용
router.post("/login", (request, response) => {
  console.log("서버요청확인");
  let id = request.body.ID;
  let pw = request.body.PW;
  console.log(id, pw);

  response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  response.write("<html><body>");
  if (id == "aischool" && pw == "123") {
    response.write("<h2>로그인 성공</h2>");
  } else {
    response.write("<h2>로그인 실패</h2>");
  }
  response.write("</body></html>");
});

// =====================================
// =router.post 방식으로 서버 요청하기 =
// =========== /ex03.html ==============

const exPostTemp = require("./public/ex03Temp");
router.post("/grade", function (request, response) {
  console.log("서버요청");

  response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
  response.write(exPostTemp.gradetemp(request.body));

  response.end();
});
