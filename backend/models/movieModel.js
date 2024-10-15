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
    poster:{
        type: String,
    },
    rating:{
        type: Number,
        min:0,
        max:5,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
      },
      genre:{
        type:String,
        required: [true, 'A move must have a genre'],
        enum: {
            values: ['comedy', 'action', 'drama','romance'],
            message: 'Difficulty is either: comedy, action, drama,romance'
          }
    },
     
})

const Movie = mongoose.model('Movies' , movieSchema) //model's variable name and name should start with a capital letter

module.exports= Movie;