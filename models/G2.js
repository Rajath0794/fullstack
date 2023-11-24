const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const G2Schema = new Schema({
    fname: String,
    lname: String,
    license: Number,
    age: Number,
    dob: Date,
    car_details: {
    make: String,
    model: String,
    year: Number,
    pno: String
    }
    })

const G2 = mongoose.model('G2', G2Schema);
module.exports = G2
