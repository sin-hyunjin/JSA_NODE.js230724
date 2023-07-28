// 4000번 포트로 서버를 열어주기
// http://192.168.20.17:4000

console.log("실행확인");
// require("http"); --> http 모듈을 가져와서 사용
const http = require("http");
const m_url = require("url");
// url 모듈 : 클라이언트가 보낸 url정보를 사용할 수 있게 도와주는 모듈(기능)

http
  .createServer(function (request, response) {
    // request : 클라이언트 -> 서버
    // response : 서버 -> 클라이언트
    /*
    http://192.168.20.17:4000/?inputId=123&inputPw=123 
    ? get 방식으로 querystring 형태로 데이터를 요청보냄
      querystring : ? 를 기준으로 왼쪽에는 주소, 
      오른쪽은 data(key-value) >> key --> html에서 input태그에 적은 name 출력 
    데이터가 여러개 라면 & 기호를 기준으로 나뉘어진다!
        */

    // url에 담긴 데이터 꺼내기
    console.log(request.url); // request.url : 클라이언트가 요청한 url

    // ture --> 쿼리스트링의 데이터부분만 사용함
    // .query -> 사용할수 있게 객체로 만들어 줌
    let qyeryData = m_url.parse(request.url, true).query;
    console.log(qyeryData);
    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    if (qyeryData.inputId == "aischool" && qyeryData.inputPw == "123") {
      // 로그인 성공
      response.write("<html>");
      response.write("<body>");
      response.write("<h1>로그인 성공</h1>");
      response.write("</body>");
      response.write("</html>");
    } else {
      // 로그인 실패
      response.write("<html>");
      response.write("<body>");
      response.write("<h1>로그인 실패</h1>");
      response.write("</body>");
      response.write("</html>");
    }

    console.log("입력한 ID : " + qyeryData.inputId);
    console.log("입력한 PW : " + qyeryData.inputPw);
    // 넘겨받은 값 ID: aischool, PW: 123  h1태그로 로그인 성공!
    // 둘중 하나라도 값이 다르다면 h1태그로 로그인 실패!

    console.log("서버생성완료");
    //  request : 클라이언트가 서버로 요청을 보냈을 때 정보를 가짐
    let ip = request.connection.remoteAddress;
    console.log("요청보낸 주소:" + ip);

    response.end();
  })
  .listen(4000);
// 포트 --> 중복 x
