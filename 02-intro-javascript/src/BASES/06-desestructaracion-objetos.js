//DESESTRUCTARACION DE OBJETOS
//ASIGNACION DESESTUCTURANTE

const persona = {
    id:1,
    nombre:"saul",
    apellido:"santamaria",
    edad:12
}
//EXTRAE DENTRO DE LAS LLAVES LO DE PERSONA
//const {nombre,apellido:apellido2}= persona;
//console.log(persona.id);
//console.log(nombre);
//console.log(apellido2);

//EJEMPLO1
const retornaPersona = (usuario)=>{
    const {nombre,apellido:apellido2}= usuario;
    console.log(nombre,apellido2);
}

//EJEMPLO2
const retornaPersona2 = ({nombre,edad, rango = "capitan"})=>{
    console.log(nombre,edad,rango);
}

//EJEMPLO3
const retornaPersona3 = ({nombre,edad})=>{
    return {
        name:nombre,
        year:edad,
        latlng:{
            lat:213,
            lng:2332,
        }
    }
}


retornaPersona(persona);
retornaPersona2(persona);

console.log(retornaPersona3(persona));
const {name,year,latlng:{lat,lng}} =retornaPersona3(persona);
console.log(name,year,lat,lng);