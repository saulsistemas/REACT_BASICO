//funciones en js
const saludar = function(nombre){
    return  `Hola ${nombre}` 
}

const saludar2 = (nombre)=>{
    return  `Hola ${nombre}` 
}
//CUANDO TIENE UN ARGUMENTO
const saludar3 = (nombre)=> `Hola ${nombre}`; 

const saludar4 = ()=> `Hola Boruto`; 

console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3('Naruto'));
console.log(saludar4());

//Hola goku
//Hola vegeta
//Hola Naruto
//Hola Boruto

const getUser = ()=>{
    return {
        id:1,
        nombre:"saul"
    }
}
console.log(getUser());
/*{
    "id": 1,
    "nombre": "saul"
}*/

const getUser1 = (nombre)=>{
    return{
        id:1,
        nombre:nombre
    }
}
const objeto =getUser1('sauliño');
console.log(objeto.id);

