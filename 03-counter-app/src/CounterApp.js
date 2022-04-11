import PropTypes from 'prop-types';
//INGRESAN COMO OBJETO LUEGO SE RESTRUCTURA {}

const CounterApp = ({value})=>{
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
    </>
    );
}
CounterApp.propTypes ={
    value:PropTypes.number.isRequired
}

export default CounterApp;

