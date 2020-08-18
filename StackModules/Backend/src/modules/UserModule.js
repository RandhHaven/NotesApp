const {Schema, model} = require('mongoose');

var userSchema = new Schema({
    userId: Number,
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name: String,
    lastName: String,
    phoneNumber: String,
    mail: String
},{
    timestamps: true
});

module.exports = model('UserSchema', userSchema);