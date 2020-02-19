import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    //Definir el STATE
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Función que lee el presupuesto
    const definirPresupuesto = evt => {
        let valorNumerico = parseInt(evt.target.value);
        guardarCantidad(valorNumerico, 10);
    }

    //Submit para definir el presupuesto
    const agregarPresupuesto = evt => {
        //SIEMPRE que se hace un submit es recomendable prevenir
        //que los campos no estén vacios
        evt.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            //En la mayoría de las ocasiones es recomendable
            //usar un return para terminar con la ejecución del código
            return;
        }

        //si se pasa la validación
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>
            {
                error
                ?
                    <Error 
                        mensaje="El presupuesto es incorrecto"
                    >s                    </Error>
                :
                    null
            }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
};

export default Pregunta;