const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//setting middleware
//app.use(express.static(__dirname + 'public')); //Serves resources from public folder
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


//process.env.BOOKSURL
//"http://test.test"
app.get("/", (req, res) => {
  res.render("index", {
    pagetitle: "Acme Bookstore", 
    booksapiurl: process.env.BOOKSAPIURL,
    bookstockapiurl: process.env.BOOKSTOCKAPIURL
  });
});

var server = app.listen(5000, function () {
  console.log("Express server listening on port 5000");
});