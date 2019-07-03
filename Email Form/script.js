const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.post("/", (req, res) => {
  res.send(
    "Your name is " + req.body.name + " and your email is " + req.body.email
  );

  fs.appendFile(
    "database.txt",
    "name: " + req.body.name,
    "email" + req.body.email
  ),
    err => {
      if (err) throw Error;
    };
});

let options = {
  index: "index.html"
};

app.use(express.static("public", options));

app.listen(port, () => console.log(`Example app listening on port ${port}.`));
