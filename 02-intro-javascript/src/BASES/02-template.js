const nombre = "Saul";
const apellido = "santamaria"

const nombreTeclado = `Hola mundo mi nombre es ${nombre} y apellido es ${apellido}`;
console.log(nombreTeclado);

function getSaludo(nombre){
    return 'hola ' +nombre;
}

console.log(`Este es im texto: ${getSaludo(nombre)}`);