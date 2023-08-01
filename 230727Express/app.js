// express 사용 3단계
// 1. npm init --> 프로젝트의 정보를 저장하는 packge.json 생성
// 2. 프로젝트 express 설치
// 3. 프로젝트 구조 생성
// config(환경설정), public(정적), router(경로), app.js(서버)

// express 서버 생성
// 1. express 모듈 가져오기
const express = require("express");

// 3. 경로를 설정할 수 있는 Router 만들기
const router = require("./router/router");
const page = require("./router/page");

// JSA_NODE.js_230724/230727Express/app.js",
// 동적페이지를 사용할 수 있는 nunjucks 가져오기
const nunjucks = require("nunjucks");
// html 파일들을 동적파일로 사용할수 있게 만듬
// 2. express 실행정보를 app 변수에 담아주기
const app = express();
const path = require("path");
// view engine 확장자를 html로 사용하겠다.
app.set("view engine", "html");

// ejs 파일들을 동적파일로 사용할 수 있게
app.set("view engine", "ejs");
app.set(
  "views",
  "/Users/sinhyeonjin/Documents/AI_School/JSA_NODE.js_230724/230727Express/views"
);
app.set("views", path.join(__dirname, "views"));
// views 안에있는 html을 동적파일로 사용할 수 있게끔 만듬
nunjucks.configure("views", { express: app, watch: true });

// 4. router로 만든 경로를 서버(app)에 등록 시켜주기!
// body영역 허용
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router를 등록하기 전에 body 영역부터 허용시켜야한다.
app.use(router);
app.use(page);
// 5. 포트번호 달아주기
app.listen(3000);
