const fs = require('fs');

const{crearArchivo}=require('./helpers/multiplicar')


const argv = require('./config/yargs');
require('colors')
console.clear();
//console.log(argv);


console.log(process.argv);
console.log(argv);
console.log('base:yargs',argv.b);
//const base=6;
/* const[,,arg3='base=5']=process.argv;
const[,base=5]=arg3.split("=")
console.log(base); */

crearArchivo(argv.b ,argv.l ,argv.h)
         .then(nombreArchivo => console.log(nombreArchivo.rainbow,'Creado'))
         .catch(err=>console.log(err));


