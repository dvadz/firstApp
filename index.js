const express = require("express");
const res = require("express/lib/response");
const app = express();

// app.use(() => {
//   console.log("We got a new request!");
// });

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1> You are browsing the ${subreddit}</h1>`);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send(`<h1> Search results for ${q}</h1>`);
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.post("/contact", (req, res) => {
  res.send("Thank you for contacting us! We'll get back to you soon!");
});

app.get("*", (req, res) => {
  res.send("Sorry I don't have what you're looking for!");
});

app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000!");
});
