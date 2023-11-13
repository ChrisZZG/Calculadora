import React from 'react';
import '../hojas-de-estilos/Pantalla.css'

/*Sintaxis de Desestructuracion para el props */
function Pantalla({input}) {
    return (
        /*Tomamos el valor que ingreso el usuario */
        <div className='input'>
            {input}
        </div>
    );
}

export default Pantalla;