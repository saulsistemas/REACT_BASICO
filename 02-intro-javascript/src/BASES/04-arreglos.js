//ARREGLOS

const arreglo = [1,2,3,4];
//arreglo.push(1); //MODIFICA EL ARREGLO PRINCIPAL
let arreglo2 = [...arreglo,5];//AGREGA DATOS AL ARREGLO

const arreglo3 = arreglo2.map((numero)=>{
    return numero*2;
});
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);


//(4) [1, 2, 3, 4]
//(5) [1, 2, 3, 4, 5]
//(5) [2, 4, 6, 8, 10]