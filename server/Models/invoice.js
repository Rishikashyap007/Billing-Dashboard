// const mongoose= require('mongoose')

// const invioceSchema = new mongoose.Schema({
    
// })

const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    Cname:{
        type:String,
    },
    address:{
        type:String,
    },
    pan:{
        type:String,
    },
    gst:{
        type:String
    },
    Iname:{
        type: []
    },
    IPrice:{
        type:String,
    }
    ,
    invoiceId:{
        type:String,
        requierd:true
    }
}, {timestamps:true});


const Invoice = mongoose.model('invoice',invoiceSchema);

module.exports = {Invoice}