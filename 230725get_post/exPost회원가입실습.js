const http = require("http");
const qs = require("querystring");
//  --> body 안에 담긴데이터를 객체형식으로 변환해서 사용할 수 있게 도와주는 역할
// require("querystring"); : 클라이언트로부터 넘겨받은 데이터(body안에있는 )를
//                          쿼리스트링 형식처럼 사용할 수 있게 도와주는
const exPostTemp = require("./exPostTemp");
http
  .createServer((request, response) => {
    //  post 방식 데이터 꺼내오기 (꺼내기,사용하기)
    // 1. request.on('data') --> 서버로 데이터를 가지고 요청을 보냈을때 실행
    let bodyData = "";
    request.on("data", (data) => {
      // data --> 클라이언트로 부터 넘겨받은 데이터
      console.log(data);
      bodyData += data;
    });
    // 2. 모든 요청이 끝났을때( 데이터를 전부 전송했을때)
    // 받아온 데이터를 사용가능하게 변환
    request.on("end", () => {
      let queryDate = qs.parse(bodyData);
      console.log(queryDate);
      response.writeHead(200, { Content_Type: "text/html;charset=utf-8" });
      response.write(exPostTemp.postTemp(queryDate));
      response.end();
    });
  })
  .listen(3004);
