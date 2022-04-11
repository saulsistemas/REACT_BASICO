//FC
import PropTypes from 'prop-types';
//<> es un fragment
//DESTRUCTURACION
const PrimeraApp = ( {saludo, subtitulo  })=>{
  
    console.log(saludo);
    return (
        <> 
            <h1>Hola mundo </h1>
            <h2>{saludo}</h2>
            <h2>{subtitulo}</h2>
            <p>Hola mundo</p>
        </>
        );

        
}
PrimeraApp.propTypes={
            saludo:PropTypes.number.isRequired
}
PrimeraApp.defaultProps ={
            subtitulo:'spy un subtitulo',
}
export default PrimeraApp;