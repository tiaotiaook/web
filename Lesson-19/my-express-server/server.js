const express=require("express");
const app=express();

app.get("/",function(request,response){
  response.send("<h1>hello world</h1>");
});

app.get("/contact",function(request,response){
  response.send("contact me at: 1234567");
});

app.get("/about",function(request,response){
  response.send("i'm tiaotiao~");
});

app.get("/hobbies",function(request,response){
  response.send("programm");
});

app.listen(3000,function(){
  console.log("server started on port 3000.")
});
