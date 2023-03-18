const express = require("express");
const path = require("path");

const app = express();

const PORT = 8000; //인스턴스 생성시 만들었던 포트번호 기입

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({extended:true})); 


app.get("/*", (req, res) => {
  // res.set({
  //   "Cache-Control": "no-cache, no-store, must-revalidate",
  //   Pragma: "no-cache",
  //   Date: Date.now()
  // });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`Listening on http://localhost:${PORT}`);
});
