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
    phoneNumber: String
},{
    timestamps: true
});

model('UserSchema', userSchema);