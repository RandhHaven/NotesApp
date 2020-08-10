//Importo Modulo Mongoose
var mongoose = require('mongoose')

console.log(process.env.MONGODB_URI);

const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const conecction = mongoose.connection;
conecction.on('error', console.error.bind(console, 'Connection error'));
conecction.once('open', function(){
  console.log('db connection open');
});