import { heroes } from "./data/heroes";
//FIND RETORNA UNO
//const getHereoById = (id)=>{
//    return heroes.find((heore) =>{
//        return heore.id =id;
//    });
//}
//
//console.log(getHereoById(2).id);
//console.log(heroes);

//FILTER TODO LOS QUE TRAE
const getHeroesByOwner = owner => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));

