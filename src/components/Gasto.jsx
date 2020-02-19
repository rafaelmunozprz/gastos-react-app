import React, {Fragment} from 'react';

const Gasto = ({gasto}) => {
    const {nombre, cantidad} = gasto;
    return (
        <Fragment>
            <li className="gastos">
                <p>
                    {nombre}
                    <span className="gasto">$ {cantidad}</span>
                </p>
            </li>
        </Fragment>
    );
};

export default Gasto;