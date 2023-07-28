const http = require("http");
const qs = require("querystring");
// require("querystring"); : 클라이언트로부터 넘겨받은 데이터(body안에있는 )를
//                          쿼리스트링 형식처럼 사용할 수 있게 도와주는 모듈
http
  .createServer((request, respons) => {
    //  post 방식 데이터 꺼내오기 (꺼내기,사용하기)
    // 1. request.on('data') --> 서버로 데이터를 가지고 요청을 보냈을때 실행
    let body = "";
    request.on("data", (data) => {
      // data --> 클라이언트로 부터 넘겨받은 데이터
      console.log(data);
      body += data;
    });
    // 2.받아온 데이터를 사용가능하게 변환
    request.on("end", () => {
      let post = qs.parse(body);
      console.log(post);
    });
    respons.end();
  })
  .listen(3003);
