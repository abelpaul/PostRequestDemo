var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/",function(req,res){
res.render("home");
})

app.get("/friends", function(req,res) {
    let friends = ["Glen", "Chris", "Josh", "Christian", "Sean","Vijay"," Anish", "Karan","Tobenna","Mathews"];
    res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res){
    console.log(req.body)
    res.send("Hi Abel It works")
});

app.listen(3000, function() {
    console.log("Server Running")

})