const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    panCard:{
        type:String,
        required: true,
        unique:true,
    }
    ,
    gstNumber:{
        type: String,
    },
    status:{
        type: String, // Change the type to String
        enum: ['Active', 'Inactive'], // Define the possible values
        default: 'Active', // Set a default value if needed
    }

}, {timestamps : true});

module.exports = new mongoose.model('Customer',customerSchema);
