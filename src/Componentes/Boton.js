import React from 'react';
import '../hojas-de-estilos/Boton.css';

function Boton(props){

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
        /*Si valor no es un numero y no es un punto y no es un igual
        retornar true, es un operador, por lo cual se le asignara la 
        clase adicional "operador" */
    }
    
    return (
        
        <div 
        /*Funcion que viene del Componente Principal  */
        onClick={() => props.manejarClick(props.children)}
        /*Función que asigna una clase adicional "operador": + - * / si el prop pasado al boton
            no es un numero */
        className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
            {props.children}
        </div>
    );
}

export default Boton;