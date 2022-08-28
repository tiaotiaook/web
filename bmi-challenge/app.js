const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extened:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
  var num1=Number(req.body.weight);
  var num2=Number(req.body.height);
  var result=num1/(num2*num2);
  res.send("your bmi is"+result);
});

app.listen(3000,function(){
  console.log("server is running on port 3000.");
})
