//FC
import PropTypes from 'prop-types';
//<> es un fragment
//DESTRUCTURACION
const PrimeraApp = ( {saludo })=>{
  
    console.log(saludo);
    return (
        <> 
            <h1>Hola mundo </h1>
            <h2>{saludo}</h2>
            <p>Hola mundo</p>
        </>
        );

        
}
PrimeraApp.propTypes={
            saludo:PropTypes.number.isRequired
}
export default PrimeraApp;