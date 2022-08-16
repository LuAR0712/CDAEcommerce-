import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { idCompra } = useParams();

    return (
        <div>
            Gracias por elegirnos! Tu codigo de seguimiento es {idCompra} con el mismo podes ver el estado de tu pedido.
        </div>
    );
};

export default Checkout;