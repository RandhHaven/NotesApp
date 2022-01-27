//Importo Modulo doteenv
require('dotenv').config();

const app = require('./nodeApp');
require('./database');

async function main() {
    //await mapp.listen(app.get('port'));
    await app.listen(4500);
    console.log('Server on port', app.get('port'));
}

main();