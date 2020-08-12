const {Schema, model} = require('mongoose');

const billSchema = new Schema({
    billId: Number,
    description: String,
    userName:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},{
    timestamps: true
});

model('BillSchema', billSchema);