// logica
const fs = require('fs');
const colors = require('colors');
// arreglo
let listadoPorHacer= [];

const guardarDb= ()=>{
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err)=>{
        if (err) throw new Error ('No se pudeo guardar:  ', err);
    });

}

const cargarDB = ()=>{
    try{

        listadoPorHacer = require('../db/data.json')

    }catch(error){
        listadoPorHacer = [];
    }

}

const crear = (descripcion)=>{
    
    cargarDB();
    let porHacer ={
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer; // retornar lo que se acaba de crear
}

const getListado = ()=>{
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true )=>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea =>{ // findIndex encuenta el index de un arreglo
         return tarea.descripcion === descripcion

    })

    if (index >=0){
        listadoPorHacer[index].completado = completado; // comprueba si es igual cuando regresa un -1 indica que no hay nada.
        guardarDb();
        return true
    }else{ 
        return false;

    }

}

let borrar =  (descripcion)=>{
    cargarDB();
    let nuevo = listadoPorHacer.filter(tarea =>{
        return tarea.listadoPorHacer !== descripcion
    });
if (listadoPorHacer.length === nuevo.length) {
    return false
}else{
    listadoPorHacer = nuevo;
    guardarDb();
   return true
}
}
module.exports= {
    crear,
    getListado,
    actualizar,
    borrar
}