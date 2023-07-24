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
- 
- GUI : 사용자에 초점 화면 --> window 명령

### 자주사용하는 명령어

- cd : 경로 이동 ex) cd 경로명(파일명) / cd.. 이전 경로
- ls : 현재 경로에서 접근할 수 있는 파일 확인
- clear : 커맨드 창 지우기
- tab : 자동완성
