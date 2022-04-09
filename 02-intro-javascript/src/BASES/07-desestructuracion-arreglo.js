const personajes = ['goku','vegeta','trunks'];
//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

//IGNORE AL PRIMERO
const [,p2] = personajes;
console.log(p2);

const retornaArreglo = ()=>{
    return ['abc',12132]
} 

console.log(retornaArreglo());

const retornaArreglo2 = (valor) =>{
    return [valor,() => { console.log('hola mundo') }];
}

const arr = retornaArreglo2('dfs');
console.log(arr); 
arr[1]();


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const tarea = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = tarea( 'Goku' );

console.log( nombre );
setNombre();

