const { Router } = require('express');
const router = Router();

const { getNotes, createNotes, updateNotes, deleteNotes, getNote } = require('../controllers/NotesController');

router.route('/').get(getNotes)
                 .post(createNotes);

router.route('/:id').put(updateNotes)
                    .delete(deleteNotes)
                    .get(getNote);

module.exports = router;
