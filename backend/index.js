const express = require('express');
const app = express();
require('./connection');
const Image = require('./images');
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(bodyParser.urlencoded({ extended: false }));


// Fake data
// const faker = require('faker');
// const mongoclient = require('mongodb').MongoClient;
// let brans=["roadster","leva","puma","reebok","roadster"];
// let myobj=[];
// for(let i = 0; i<5; i++){
//     myobj.push({
//         title:"t-shirt",
//         imageurl: images[i],
//         imagediscription:brans[i],
//         price: faker.random.number(i*12),
//            count:0
//     })
// }
// let url ="mongodb+srv://kcap:KyaKyun123@cluster0.a6mc0.mongodb.net/borderfree?retryWrites=true&w=majority";
// mongoclient.connect(url, function(err, db) {  
//     if (err) throw err;
//     var db = db.db("borderfree");  
//     db.collection("images").insertMany(myobj, function(err, res) {  
//     if (err) throw err;  
//     console.log("1 record inserted");  
//     });  
//     });  




app.get("/images/:val", async (req,res)=>{
    let search = req.params.val; 
    search = search.substring(1);  
    console.log(search); 
    let data =await Image.find({title:search});
    console.log(data);
    res.send(data);
})

app.listen(5000);