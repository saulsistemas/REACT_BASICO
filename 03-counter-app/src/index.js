import React from 'react';
import  ReactDOM  from 'react-dom';


const saludo = <h1>Hola mundo</h1>;
console.log(saludo);

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot)

//console.log(divRoot);