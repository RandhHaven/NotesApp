//Importo Modulo doteenv
require('dotenv').config();

const app = require('./nodeApp');
require('./database');

async function main(){
    await app.listen(4500);
    console.log('server 4500');
}

main();