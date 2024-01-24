const mongoose = require('mongoose');

const regData = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    number: {
        type:Number,
        required:true,
        unique:true
    },
    message: {
        type:String,
    }
})

const PortfolioMessage = mongoose.model('Entry', regData)

module.exports = PortfolioMessage