import { getHeroeById } from "./BASES/08-export-import";

//PROMESAS
//SON TAREAS ASINCRONAS
//const promesa = new Promise((resolve,reject)=>{
//    setTimeout(() => {
//        const heroe = getHereoById(2)
//        //console.log(heroe);
//        resolve(heroe)//TRASFIERE AL THEN
//    }, 2000);
//});
//
//promesa.then((heroe)=>{
//    console.log(heroe);
//})
//.catch(err => console.log(err))

const getHeoreByIdAsync = (id)=>{
    return  new Promise((resolve,reject)=>{
        setTimeout(() => {
            const p1 = getHeroeById(id)
            if (p1) {
                resolve(p1)//TRASFIERE AL THEN
            } else {
                reject('No se pudo')                
            }
        }, 2000);
    });
    //return promesa;
}

getHeoreByIdAsync(12)
    .then((heroe)=>{
    console.log(heroe);
    }).catch(error =>{console.log(error);})