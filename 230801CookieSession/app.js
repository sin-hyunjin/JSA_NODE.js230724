const express = require("express");
const routerCookie = require("./router/cookie");
const routerSession = require("./router/session");
// 쿠키에 있는 데이터를 꺼내올때 사용할 수 있게 변환해주는 역할
const cookieParse = require("cookie-parser");

// 세션 : 공통 저장 공간을 서버에 만들어서 사용하는 기능
const session = require("express-session");
const app = express();

app.use(
  session({
    httpOnly: true, // http통일때 허용
    secret: "secretkey", //암호화키
    resave: false, //요청이 들어 왔을때 세션에 수정 사항이 없더라도 다시저장
  })
);

app.use("/s", routerSession);
app.use(cookieParse());
app.use("/g", routerSession);
app.use(routerCookie);
app.listen(3000);
