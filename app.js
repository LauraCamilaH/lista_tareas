//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv
const colors= require('colors');
const { actualizar } = require('./TareasPorHacer/tareasPorHacer');
const tareasPorHacer = require('./TareasPorHacer/tareasPorHacer');

let comando = argv._[0];
console.log(argv);

switch (comando){

    case 'crear':
        let tarea = tareasPorHacer.crear( argv.descripcion );
        console.log(`${tarea}`)
    break;

    case 'listar':

        let listado = tareasPorHacer.getListado();
        for (let tarea of listado){
            console.log("====== por hacer ======".green)
            console.log(`decripción: ${tarea.descripcion}`)
            console.log(`Estado: ${tarea.completado}`)
            console.log("=======================".green)
        }

        console.log(`Mostar todas las tareas por hacer`)
    break;
    case 'actualizar':
        let actualizado =  tareasPorHacer.actualizar(argv.descripcion, argv.completado)
        console.log (`${actualizado} actualizar las tareas por hacer `)
    break;
    case 'borrar':
        let borrado = tareasPorHacer.borrar (argv.descripcion);
        console.log(borrado)
    break;
    default:
        console.log(`selecion no encontrada`)
    

}

//console.log(argv)
//lista de cosas por hacer