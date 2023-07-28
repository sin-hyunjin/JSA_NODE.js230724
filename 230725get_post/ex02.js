const { table } = require("console");
console.log("실행");
const http = require("http");
const url = require("url");

http
  .createServer((request, response) => {
    let date = url.parse(request.url, true).query;

    const tb_num = parseInt(date.tb_num);

    response.writeHead(200, { Content_Type: "text/html;charset=utf-8" });
    response.write("<html>");
    response.write("<body>");
    response.write("<table border=1px solid black;>");
    response.write("<tr>");
    for (let i = 1; i <= tb_num; i++) {
      response.write(`<td>${i}</td>`);
    }
    response.write("</tr>");
    response.write("</table>");
    response.write("</body>");
    response.write("</html>");

    response.end();
  })
  .listen(4000);
