const persona ={
    nombre:'Saul',
    apellido:'Santamaria',
    edad:28,
    direccion:{
        ciudad: 'new york',
        zip: 5454,
        lat: 15.323,
        lng: 34.5454
    }
}
const persona2 =  {...persona}; //...clon del objeto
persona2.nombre='sai';
console.log(persona);
console.log(persona2);