import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
    //definir el STATE
    const [presupuesto, guardarPresupuesto] =useState(0);
    const [restante, guardarRestante] = useState(0);
    const [mostrarpregunta, actualizarPregunta] = useState(true);
    const [gastos, guardarGastos] = useState([]);

    //cuando agreguemos un nuevo gasto
    const agregarNuevoGasto = gasto => {
        guardarGastos([
            ...gastos,
            gasto
        ])
    }

    //definir el restante
    return (
        <div className="container">
            <header>
                <h1>
                    Gasto Semanal
                </h1>
            </header>
            <div className="contenido-principal contenido">
                {
                    mostrarpregunta 
                    ?
                        (
                            <Pregunta
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                actualizarPregunta={actualizarPregunta}
                            />
                        )
                    :
                        (
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario
                                        agregarNuevoGasto={agregarNuevoGasto}
                                    />
                                </div>
                                <div className="one-half column">
                                    <Listado
                                        gastos={gastos}
                                    />
                                </div>
                            </div>
                        )
                }                
            </div>
        </div>
    );
}

export default App;
