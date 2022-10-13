// 1. express 불러오기
const express = require("express");

// 2. express 실행
// express 함수를 호출해서 만들어진 express applicaion
const app = express();

// PORT NUMBER
const PORT = 8080;

// app에 view engine을 ejs로 설정
app.set("view engine", "ejs");
// ejs 파일을 저장할 views 폴더의 경로
app.use("/views", express.static(__dirname + "/views"));
// 브라우저가 ip:port/static/image/cat.jpg
// 해당 파일을 ip:port/static/image/cat.jpg 에 존재하는지 찾음
app.use("/static", express.static(__dirname + "/static"));

// Routing (라우팅)
// 요청(requset)과 응답(response) 경로를 설정
// 클라이언트가 get 요청을 보내면 -> 응답으로 hello express 메세지를 띄운다.
// get 요청: 리소스 검색하고 반환받기 위해 사용되는 메서드
app.get("/", function (request, response) {
  response.send("hello express");
});

app.get("/test", function (request, response) {
  // response.send('test page');
  response.render("test");
});

app.get("/test2", function (request, response) {
  response.render("test2");
});

// 3. 로컬 서버 동작
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
