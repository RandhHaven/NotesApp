const notesController = {};

const notesSchema = require('../modules/NotesModule');

notesController.getNotes = async (req,res) => { 
    await notesSchema.find();
    res.json({message: [], transaccionid: '0'});
}

notesController.createNotes = (req,res) => res.json({message: 'Create Notes'});
notesController.updateNotes = (req,res) => res.json({message: 'Notes Saved'});
notesController.deleteNotes = (req,res) => res.json({message: 'Delete Notes'});
notesController.getNote = (req,res) => res.json({message: 'Get Note'});

module.exports = notesController;