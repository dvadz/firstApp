const express = require("express");
const res = require("express/lib/response");
const app = express();

// app.use(() => {
//   console.log("We got a new request!");
// });

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
