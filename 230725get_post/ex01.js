// 사용자가 입력한 값의 합을 구하는 서버페이지 작성하기

console.log("실행확인");
const http = require("http");
const num_url = require("url");

http
  .createServer(function (request, response) {
    //첫번째 숫자, 두번째 숫자를 꺼내서 사용하기

    let Data = num_url.parse(request.url, true).query;
    // 쿼리스트링으로 넘겨받은 값은 문자열 타입이기 떄문에
    // 숫자타입으로 바꿔줘야 한다 .
    const user_num1 = parseInt(Data.user_num1);
    const user_num2 = parseInt(Data.user_num2);
    const cul = Data.cul;

    // console.log(request.url);
    console.log(Data);

    response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    response.write("<html>");
    response.write("<body>");
    if (cul == "+") {
      response.write(
        `<h1>${user_num1} + ${user_num2} = ${user_num1 + user_num2}</h1>`
      );
    } else if (cul == "-") {
      response.write(
        `<h1>${user_num1} - ${user_num2} = ${user_num1 - user_num2}</h1>`
      );
    } else if (cul == "*") {
      response.write(
        `<h1>${user_num1} * ${user_num2} = ${user_num1 * user_num2}</h1>`
      );
    } else if (cul == "/") {
      response.write(
        `<h1>${user_num1} / ${user_num2} = ${user_num1 / user_num2}</h1>`
      );
    }
    response.write("</body>");
    response.write("</html>");
    // console.log("입력한 숫자 : " + user_num1);
    let ip = request.connection.remoteAddress;

    console.log("요청보낸 주소:" + ip);
    response.end();
  })
  .listen(3000);
//http://192.168.21.161:3000

function cal() {}
