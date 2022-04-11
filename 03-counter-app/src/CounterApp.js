import PropTypes from 'prop-types';
//INGRESAN COMO OBJETO LUEGO SE RESTRUCTURA {}

const CounterApp = ({value})=>{
    //handleAdd
    const handleadd =(e)=>{
        console.log(e)
    }
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
            
        <button onClick={handleadd()}>+1 Enviar</button>
    </>
    );
}
CounterApp.propTypes ={
    value:PropTypes.number.isRequired
}

export default CounterApp;

