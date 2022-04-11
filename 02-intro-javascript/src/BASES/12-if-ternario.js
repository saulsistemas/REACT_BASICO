const activo = true;



//const mensaje = (activo) ? 'activo' : 'inactivo';
// const mensaje = (!activo) ? 'activo' : '';
const mensaje = !activo===false && 'activo'; //es un if


console.log(mensaje);