import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {
    //Registrar los datos de los gastos
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Agregar gasto
    const agregarGasto = (evt) => {
        evt.preventDefault();

        //Validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        console.log(gasto);

        //Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //Resetear form
        guardarNombre('');
        guardarCantidad(0);
    }
    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>
                Agregar tus gastos aquí
            </h2>
            {
                error 
                ?
                    <Error
                        mensaje="Ambos campos son obligatorios"
                    />
                :
                    null
            }
            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={evt => guardarNombre(evt.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={evt => guardarCantidad(parseInt(evt.target.value), 10)}
                />
            </div>
            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;