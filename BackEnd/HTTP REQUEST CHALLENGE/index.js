import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello, my name is Carlos</h1>");
});

app.get("/aboutme", (req, res) => {
  res.send("<h1>And i'm a graphic</h1>");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
