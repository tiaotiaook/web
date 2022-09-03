const mongoose =require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{useNewUrlParser:true});


const fruitSchema=new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Please check your data entry, no name specified!"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

const Fruit =mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit({

  rating:10,
  review:"Peaches are so yummy!"
});

// fruit.save();

const personSchema=new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

const Person =mongoose.model("Person",personSchema);

const mango=new Fruit({
  name:"Mongo",
  score:6,
  review:"Decent fruit."
});

mango.save();

Person.updateOne({name:"John"},{favouriteFruit:mango},function(err){
  if (err){
    console.log(err);
  } else{
    console.log("Succesfully updated the document~.");
  }
});

// const person = new Person({
//   name:"Amy",
//   age:12,
//   favouriteFruit:pineapple
// });

// person.save();

// const kiwi=new Fruit({
//   name:"Kiwi",
//   score:10,
//   review:"The best fruit!"
// });
//
// const orange=new Fruit({
//   name:"Orange",
//   score:4,
//   review:"Too sour for me"
// });
//
// const banana=new Fruit({
//   name:"Banna",
//   score:3,
//   review:"Weird texture"
// });

// Fruit.insertMany([kiwi,orange,banana],function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });


Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id:"63136c3373d1ead4a4434e36"},{name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("succesfully updated the document.")
//   }
// });


// Fruit.deleteOne({name:"Peach"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("succesfully deleted the document.")
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("succesfully deleted all the document.")
//   }
// });






// const findDocuments = function(db, callback){
//
//   const collection = db.collection('fruits');
//
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// }
