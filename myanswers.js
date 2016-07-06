var express = require("express");
var app = express();

var correct_number = 7;

app.get("/pick-a-number/:num", function(req, res){
  var num = req.params.num;
  if (num == correct_number){
    res.send("Nailed it!");
  } else if (num > correct_number){
    res.send("Too High!");
  } else {
    res.send("Too Low");
  }
});

app.get("/color/:choice", function(req, res){
  var choice = req.params.choice;
  res.send("Your color is: " + choice);
});

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/taco/:index", function(req, res){
  var index = req.params.index;
  var selection = tacos[index] || "Sorry, that's not a taco option";
  res.send( selection );
});

app.get("/burger/:index", function(req, res){
  var index = req.params.index;
  var selection = burgers[index] || "Sorry, that's not a burger option";
  res.send( selection );
});

var port = 3000;
app.listen(port, function(){
  console.log("Server Running at localhost:3000/");
});