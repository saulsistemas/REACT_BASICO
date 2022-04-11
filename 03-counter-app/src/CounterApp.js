import React, { useState } from 'react';
import PropTypes from 'prop-types';
//INGRESAN COMO OBJETO LUEGO SE RESTRUCTURA {}

const CounterApp = ({value})=>{
    //DESESTRUCTURACION
    const [counter,setCounter] = useState(0)
    //(2) ['Goku', ƒ]
    console.log(counter);

    //handleAdd
    const handleadd =()=>{
        //setCounter(counter+1)
        setCounter((c)=>c+1)
    }
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
            
        <button onClick={handleadd}>+1 Enviar</button>
    </>
    );
}
CounterApp.propTypes ={
    value:PropTypes.number.isRequired
}

export default CounterApp;

