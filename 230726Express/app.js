/* 기존 서버가져오는 방식
const http = require("http");
http.createServer((request, response) => {}).listen(3000);
*/

// == express로 서버 요청하기 =====

// 1. express 사용 기능 가져오기
const express = require("express");
// 2. express 실행 정보를 app 변수에 저장
const app = express();
// 3. router 기능 사용 선언
const router = express.Router();
// 4. 서버등록
app.use(router);
// 클라이언트가 요청보낸 주소값에 따라서 서버를 사용한다.
// 5. 포트번호 등록
app.listen(3000);
