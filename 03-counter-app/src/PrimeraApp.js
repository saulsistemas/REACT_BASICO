//FC

//<> es un fragment
//DESTRUCTURACION
const PrimeraApp = ( {saludo = 'hola mundito'})=>{

    console.log(saludo);
    return (
        <> 
            <h1>Hola mundo </h1>
            <h2>{saludo}</h2>
            <p>Hola mundo</p>
        </>
        );

}

export default PrimeraApp;