//Importo Modulo express
const express = require('express'); 

//Importo Modulo cors
const cors = require('cors');

const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

console.log('LOG PROCESS MONGODB_URI', process.env.MONGODB_URI);
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