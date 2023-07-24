// 서버 실행 : 터미널에 node 파일이름
// 서버 중지 : control + c
console.log("실행확인");

// 파일을 서버로 만들기 위해서는 서버의 기능을 할 수 있는 모듈을 가져와서 사용해야한다.
// http 기능을 불러와서 사용하기!!
const http = require("http");

// http://로컬컴퓨터 주소(ip주소 )
/* mac 에서  ip확인하는법 !!
$ ifconfig | grep inet 
$ ipconfig getifaddr en0   : ip만 나와서 간편하게 확인가능  */

// http://192.168.20.17:3000
http
  .createServer(function (request, response) {
    // 1. creatServer : 현재 js 파일을 서버로 만들어 주는 역할
    // 2. function(request, response) {실행로직} : 클라이언트가 요청을 보냈을때 실행할 로직
    console.log("접속확인");

    //  request : 클라이언트가 서버로 요청을 보냈을 때 정보를 가짐
    let ip = request.connection.remoteAddress;
    console.log("요청보낸 주소:" + ip);

    // 응답값 만들어 주기 - > html 형식!
    // 200 --> 통신성공 코드
    // "Content-Type":"text/html" --> html형식으로 응답
    //  response : 응답객체 --> 응답을 하기위한 객체
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>첫번째 응답</h1>");
    response.write("</body>");
    response.write("</html>");

    response.end();
  })
  .listen(3000);
