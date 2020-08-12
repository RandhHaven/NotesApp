const {Schema, model} = require('mongoose');

var noteSchema = new Schema({
    NoteId: Number,
    titulo: String,
    content:{
        type: String,
        required: true
    },
    author:String
}, {
    timestamps: true
});

model('NoteSchema', noteSchema);