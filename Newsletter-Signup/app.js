const express =require("express");
const bodyParser =require("body-parser");
const request=require("request");
const https=require("https");

const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req,res){
  const firstName=req.body.fName;
  const lastName=req.body.lName;
  const email=req.body.email;
  const data={
    member:[{
      email_address:email,
      status:"subscribed",
      merge_fields:{
        FNAME:firstName,
        LNAME:lastName
      }
    }]
  };
  const jsonData=JSON.stringify(data);

  const url="https://us13.api.mailchimp.com/3.0/lists/d277cc660c";
  const options={
    method:"POST",
    auth:"tiaotiao:1a2053e27f264d523ccc3a47abbc9e79-us13"
  }


  const request=https.request(url,options,function(response){
    if (response.statusCode===200){
      res.sendFile(__dirname+"/success.html");
    }else{
      res.send(__dirname+"/failure.html");
    }

    response.on("data",function(data){
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();

});


app.post("/failure",function(req,res){
  res.redirect("/")
})

app.listen(3000,function(){
  console.log("Server is running on port 3000.");
});

// 1a2053e27f264d523ccc3a47abbc9e79-us13
// d277cc660c
