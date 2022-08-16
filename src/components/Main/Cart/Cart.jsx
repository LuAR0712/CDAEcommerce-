import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartDetail from './CartDetail';
import s from './Cart.module.css';
import Form from '../../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, disminuir, aumentar } =
        useContext(CartContext);
   

    if (cart.length === 0) {
        return (
            <div className={s.cartContainer}>
                <h1>
                    No contas con ningun producto agregado,{' '}
                    <Link to="/">Acá te dejamos todos nuestros productos</Link>
                </h1>
            </div>
        );
    }
    return (
        
            <>
                <div className={s.cartContainer}>
                    {cart.map((prod) => (
                        <CartDetail 
                            key={prod.id}
                            prod={prod}
                            deleteOne={deleteOne}
                            disminuir={disminuir}
                            aumentar={aumentar}
                        />
                    ))}
                    <div>
                        <button className={s.vaciar} onClick={clearCart}>
                            Vaciar Carrito
                        </button>
                        
                        <br></br>
                        
                        <h2 className={s.total}>Total: ${totalPrice}</h2>

                        <br></br>

                        <h3 className={s.detalle}>Completa tu compra ingresando tus datos:</h3>

                        <br></br>
                    
                    </div>
                    <Form
                        cart={cart}
                        totalPrice={totalPrice}
                        clearCart={clearCart}
                    />
                </div>
            </>
        );
    };
export default Cart;