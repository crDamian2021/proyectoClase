const fs = require('fs');

const  crearArchivo =async(base=5, listar=false ,hasta=10)=> {
    try{
        console.clear();
        let salida, consola ='';
        for (var i = 1; i <=hasta; i++) {
        salida+=`${base} x ${i} = ${base*i}\n`;
        consola +=`${base} ${'x'.blue} ${i} ${'='.green} ${base*i}\n`;
        }if (listar){
            console.log("+++++++++++++".red);
            console.log("Tabla: ".blue, base);
            console.log("+++++++++++++".red);
            console.log(consola);  

        }
        
        fs.writeFileSync(`./salida/tabala del ${base}.txt`,salida);
        return `tabla-del-${base}.txt creado `;
        
        
    }catch(error){

    }



}

module.exports={
    crearArchivo
}