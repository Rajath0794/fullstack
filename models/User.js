const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fname: String,
    lname: String,
    Username: {type: String, unique: true, required: true},
    Password: {type: String, required:true},
    UserType: {type: String, required:true},
    age: Number,
    dob: Date,
    car_details: Object,
    license: String,


})
UserSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.Password, 10, (error, hash) => {
        user.Password = hash
        next()
    })

})
const User = mongoose.model('User', UserSchema);
module.exports = User