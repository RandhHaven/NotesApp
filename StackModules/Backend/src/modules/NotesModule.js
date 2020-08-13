const {Schema, model, models} = require('mongoose');

const noteSchema = new Schema({
    NoteId: Number,
    title: String,
    content:{
        type: String,
        required: true
    },
    author: String,
    date:{
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: true
});

module.exports = model('NoteSchema', noteSchema);