const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


//single button click

// app.post("/", function(req, res){
//     var num1 = parseInt(req.body.num1);
//     var num2 = parseInt(req.body.num2);
//     var result = num1 + num2;
//     res.send("The result is: " + result);
// });


// multiple button click

app.post("/", function(req, res){
    
  const { num1, num2, operator } = req.body;

  let result;
  switch (operator) {
    case 'add':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtract':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiply':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'divide':
      result = parseFloat(num1) / parseFloat(num2);
      break;
  }
    res.send("The result is: " + result);
});


//BMI
app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
    
});

app.post("/bmi", function(req, res){
    var num1 = parseFloat(req.body.weight);
    var num2 = parseFloat(req.body.height);
    var result = num1 / (num2*num2);
    res.send("Your BMI is: " + result);

});

app.listen(process.env.PORT || 3000, function(){
console.log("server is running on port 3000");
});
