const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {type: String, required: true, minLength:2, maxLength:255},
    description: {type: String, required: true},
    category: {type: String, required: true, minLength:5, maxLength:50},
    price: {type: Number, required: true},
    dateModified: {type: Date, required: true},

});