const argv =require('yargs')
        .option('b',{
            alias:'base',
            tipe:'number',
            demandOption:true
        })
        .option('l',{
            alias:'listar',
            tipe:'number',
            demandOption:true,
            default:false
        })
        .option('h',{
            alias:'hasta',
            tipe:'number',
            default:10,
            describe:"Este es el numero hasta donde quieres llegara"
        })

        .check((argv,option) =>{
            if(isNaN(argv.b)){
                throw 'la base teien que ser un numero '
            }
            return true;

        })        
        .argv;

module.exports=argv;
