const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    age: {
        type: Number
    }
})

const Userdb = mongoose.model('customer', schema);

module.exports = Userdb;