const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const images = new Schema({
    title: {
        type: String
    },
    imageurl:{
        type: String
    },
    imagediscription :{
        type: String
    },
    price:{
        type: Number
    },
    count:{
        type: Number
    }
});

const Images = mongoose.model('Images',images);
module.exports=Images;