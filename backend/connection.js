const mongoose = require('mongoose');
const db = "mongodb+srv://kcap:KyaKyun123@cluster0.a6mc0.mongodb.net/borderfree?retryWrites=true&w=majority";
mongoose.connect(db,{
    useNewUrlParser: true
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
}).then(()=>{
    console.log("connection established");
}).catch((err)=>{
    console.log("Alert ! Connection failed "+ err.message)
});
