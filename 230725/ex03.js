const http = require("http");
const qs = require("querystring");
const exPostTemp = require("./ex03Temp");
http
  .createServer((req, res) => {
    let bodydata = "";
    req.on("data", (data) => {
      bodydata += data;
    });
    req.on("end", () => {
      let queryDate = qs.parse(bodydata);
      console.log(queryDate);
      ("aaaui");
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

      res.write(exPostTemp.formtemp(queryDate));
      res.end();
    });
  })
  .listen(3005);
