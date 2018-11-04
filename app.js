var express = require("express");
var app = express();
 var bodyParser = require("body-parser");

 app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

let friends = ["Glen", "Chris", "Josh", "Christian", "Sean","Vijay"," Anish", "Karan","Tobenna","Mathews"];

app.get("/",function(req,res){
res.render("home");
})

app.get("/friends", function(req,res) {
    res.render("friends", {friends: friends});
})

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    console.log(req.body);
    res.redirect("/friends");
});

app.listen(3000, function() {
    console.log("Server Running")

})