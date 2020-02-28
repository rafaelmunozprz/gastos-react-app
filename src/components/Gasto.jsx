import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

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

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;