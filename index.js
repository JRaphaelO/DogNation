const express = require("express");
var port = 3000;

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log("Logged on!");
});