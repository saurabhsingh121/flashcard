var express = require("express");
var app = express();


app.get("/", function(req, res) {
    res.send("This is Saurabh Singh")
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Flashcard has started!!");
});
