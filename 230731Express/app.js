const express = require("express");
// const router = require("./router/");
const page = require("./router/page");
const user = require("./router/user");
const nunjucks = require("nunjucks"); //nunjucks 모듈
const session = require("express-session");
const app = express();
const path = require("path");

app.set("view engine", "html");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
nunjucks.configure("views", { express: app, watch: true }); // Nunjucks 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(router);
// 미들웨어 경로 설정
app.use(
  session({
    httpOnly: true,
    secret: "secretkey",
    resave: false,
  })
);
app.use("/page", page);
app.use("/user", user);

app.listen(3000);
