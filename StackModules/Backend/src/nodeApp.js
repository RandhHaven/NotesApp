const express = require('express'); 

//Importo Modulo cors
const cors = require('cors');

const app = express();

console.log('LOG PROCESS PORT', process.env.PORT);
//settings
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/UserRouter'));
app.use('/api/notes', require('./routes/NotesRouter'));

module.exports = app;