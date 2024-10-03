const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required: [true, 'A product must have a name'],
    },
    episodes:{
        type:Number,
        required: [true, 'A product must have a price'],
    },
    description:{
        type:String,
        default: 'a great product',
        required: [true, 'A product must have a description'],
    },
    image:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
     
})

const Movie = mongoose.model('Movies' , movieSchema) //model's variable name and name should start with a capital letter

module.exports= Movie;