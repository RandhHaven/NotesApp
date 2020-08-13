const notesController = {};

var NoteModel = require('../modules/NotesModule');

notesController.getNotes = async (req,res) => { 
    const notes = await NoteModel.find();
    res.json(notes);
};

notesController.createNotes = async (req,res) =>{
    const { title, content, author, date } = req.body;
    const newNote = new NoteModel({
        title: title,
        content: content,
        author: author,
        date: date
    });
    await newNote.save();
    res.json(newNote);
};

notesController.updateNotes = async (req,res) => {
    const { title, content, author, date } = req.body;
    const updateNote = await NoteModel.findByIdAndUpdate(req.params.id,{
        title: title,
        content: content,
        author: author,
        date: date
    });
    res.json(updateNote);
};

notesController.deleteNotes = async (req,res) => { 
    const delNote = await NoteModel.findByIdAndDelete(req.params.id);
    res.json(delNote);
}

notesController.getNote = async (req,res) => {
    const newNote = await NoteModel.findById(req.params.id);
    res.json(newNote);
}

module.exports = notesController;