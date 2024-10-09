import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

var day = new Date();
var weekday = day.getDay();

let type = "a weekday";
let adv = `it's time to work hard`;

if (weekday === 0 || weekday === 6) {
  type = "a weekend";
  adv = "is for partying";
}

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}.`);
});
