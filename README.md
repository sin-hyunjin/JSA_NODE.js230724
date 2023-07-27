# 🤔Node.js 학습시작 230724 

- 참고예제 : https://product.kyobobook.co.kr/detail/S000001834449

### ✅ 1. Mac 에서 node.js 설치하기!

- Node.js®는 Chrome V8 JavaScript 엔진 으로 빌드된 JavaScript 이다.
- 설치주소 :
  https://nodejs.org/ko

### ✅ 2. 터미널로 설치하기

#### Homebrew 설치 (https://brew.sh/index_ko)

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#### node.js 설치

    $ brew install node

#### node.js 설치버전 확인하기

    $ node -v

# mac 에서 ip확인하는법 !!

    $ ifconfig | grep inet

    $ ipconfig getifaddr en0 -> "ip만 나와서 간편하게 확인가능"

### 프로젝트(웹)을 만든다 가정했을떄?

front-end : html,css,jaavaScript 로 화면 구현

back-end : node.js를 통해서 서버 측 로직을 구현하고 DB의 데이터를 가져올 수 있다.

database : 프로젝트 필요한 데이터를 저장하고 관리하는 역할

### Server를 열기 위해서는 규약을 지켜야한다

1.  http로 서버 열기 : createServer

2.  포트번호 : 어떤 방으로 열어줄껀지? 포트번호가필요하다(ex. 5000,3000...)
    -> http://ip주소 : 3000
    
4.  서버 -> 클라이언트(사용자)
    response.write() -- 서버에서 가져온것을 화면에 표시
    response.end() -- 서버를 멈춘다

         서버 실행 : 터미널에 node 파일이름
         서버 중지 : control + c

- CLI : command line interface --> 리눅스 기반

- GUI : 사용자에 초점 화면 --> window 명령

### 자주사용하는 명령어

- cd : 경로 이동 ex) cd 경로명(파일명) / cd.. 이전 경로
- ls : 현재 경로에서 접근할 수 있는 파일 확인
- clear : 커맨드 창 지우기
- tab : 자동완성
# 🤔230725 get, post 요청방식

1. **`http.createServer()`**:

   - 이 메소드는 HTTP 서버를 생성하는 데 사용된다.
     서버는 들어오는 요청을 수신 대기한다.

   - 콜백 함수를 인자로 받으며, 서버로 요청이 들어올 때마다 이 함수가 실행된다.

2. **`req.on("data", (data) => { ... })`**:

   - 이 메소드는 들어오는 요청 (`req`)의 "data" 이벤트에 대한 이벤트 리스너이다.

   - 요청의 데이터를 수신하면 이벤트가 트리거되며, 데이터 청크는 `bodydata`에 연결된다.

3. **`req.on("end", () => { ... })`**:

   - 이 메소드는 들어오는 요청 (`req`)의 "end" 이벤트에 대한 이벤트 리스너이다.

   - 요청의 모든 데이터가 수신되면 이벤트가 트리거되며, `bodydata`에 저장된 데이터를 `qs.parse()`를 사용하여 객체로 파싱하고, `queryDate`에 저장한다.

4. **`res.writeHead(200, { Content_type: "text/html;charset=utf-8" })`**:

   - 이 메소드는 응답 헤더를 클라이언트에 작성하는 데 사용된다.

   - HTTP 상태 코드를 `200 OK`로 설정하고, 콘텐츠 타입을 `text/html;charset=utf-8`로 설정한다.

5. **`res.write(exPostTemp.formtemp(queryDate))`**:

   - 이 메소드는 응답 본문을 클라이언트에 작성하는 데 사용된다.

   - `exPostTemp` 모듈에서 `formtemp` 함수를 호출하여 `queryDate`를 인자로 전달하고, 반환된 HTML을 응답으로 작성한다.

6. **`res.end()`**:
   - 이 메소드는 응답을 종료하고 클라이언트로 보냅니다.
   - 응답 본문을 작성한 후에 이 메소드를 호출하여 응답을 완료한다.

# 🤔Node.js 수업방향 2307256

![image](https://github.com/sin-hyunjin/JSA_NODE.js_230724/assets/116487398/f30ead95-584a-4f04-a8e4-6e774f5e7fcd)

## nodemon 설치방법(nodejs 프로세스 관리도구 )

    $ npm install nodemon -g

### 설치한 다음 다음 명령어로 서버를 실행

    $ nodemon 파일이름

- 폴더 구분 없이 : nodemon server/basic-server.js

- 폴더 내의 문서들이 수정되면 서버를 자동으로 재시작:
  nodemon --watch server/ server/basic-server.js

# Express 처리흐름

![스크린샷 2023-07-26 오후 2 08 48](https://github.com/sin-hyunjin/NDB_Project_2307241/assets/116487398/e20694f5-bcb6-43ff-a615-423118e814a7)

## 설치방법

Node.js가 이미 설치되었다고 가정한 상태에서

    $ mkdir myapp
    $ cd myapp

npm init 명령을 이용하여 애플리케이션에 대한 package.json 파일을 작성한다.

    $ npm init

이 명령을 실행하면 애플리케이션의 이름 및 버전과 같은 몇 가지 정보에 대해 프롬프트하고, 지금은 다음의 항목을 제외한 대부분의 항목에서 ENTER 키를 눌러 기본값을 수락할 수 있따.

    entry point: (index.js)

기본 파일의 이름을 app.js로 입력하거나 자유롭게 입력

이제 myapp 디렉토리에 Express를 설치한 후 종속 항목 목록에 저장

    $ npm install express --save

Express를 임시로 설치하고 종속 항목 목록에 추가하지 않으려면, 다음과 같이 --save 옵션을 생략

    $ npm install express

### express 자주사용 하는 폴더

- config : 환경변수 정보 저장 (DB연결정보, API키값 등)

- public : 정적파일 관리 (JS, CSS, Image, Audio, Video 등)

- routes : 라우팅을 위한 폴더( 라우팅 별 모듈 생성/ 로직구현)

- views : 요청에 대한 로직 처리 후 응답을 보낼 html(ejs템플릿 사용)

- app.js 서버를 실행하기 위한 Main 파일(express 미들웨어 설정 )

### express로 서버 요청기본방식

- 1. express 사용 기능 가져오기

```Javascript
const express = require("express");
```

- 2. express 실행 정보를 app 변수에 저장

```Javascript
const app = express();
```

- 3. router 기능 사용 선언

```Javascript
const router = express.Router();
```

- 4. 서버등록

```Javascript
// body 영역 사용등록 --> post 방식때 사용되어짐
app.use(express.urlencoded({ extended: true })); //body 영역 허용
app.use(express.json()) // 받은 데이터를 json형태로 변환
app.use(router);
```

클라이언트가 요청보낸 주소값에 따라서 서버를 사용한다.

- 5. 포트번호 등록

```Javascript
app.listen(3000);
```

- 6. 요청을 보낸 주소값에 대해서 처리!

라우팅 작업

```Javascript
router.get("/", (request, response) => {
  console.log("서버접속 확인 ");
});
router.get("/plus", (request, response) => {
  console.log("plus서버접속 확인 ");
});
```

# 🤔 express.js 수업내용 230727

![스크린샷 2023-07-27 오후 3 20 24](https://github.com/sin-hyunjin/JSA_NODE.js_230724/assets/116487398/33ebff95-86df-4941-a521-d4cc53617a34)

## 경로를 설정할 수 있는 Router 모듈 만들기

router.js

```Javascript
const { Router } = require("express");
const express = require("express");
const router = express(Router);

// router를 따로 빼줌
router.get("/", (request, response) => {
  console.log("접속확인");
});
router.get("/response", (request, response) => {
  console.log(request.query.text);
});

// 위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
// --> 모듈화 (router)
module.exports = router;

```

app.js

```javascript
const router = require("./router/router");
```
