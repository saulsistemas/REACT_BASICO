import  heroes,{owners}  from "../data/heroes";

//console.log(owners);
//FIND RETORNA UNO
//export const getHereoById = (id)=>{
//    return heroes.find((heore) =>{
//        return heore.id == id;
//    });
//}
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
//console.log(getHereoById(2).id);
//console.log(heroes);

//FILTER TODO LOS QUE TRAE
export const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));


