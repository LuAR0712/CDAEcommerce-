import React, { useState } from 'react';
import styles from './Counter.module.css';


const Counter = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    
    const aumentar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        initial < count && setCount(count - 1);
    };


    const sumar = () => {
        onAdd(count);
    };

    return (
        <div className={styles.counter}>
            <div className={styles.addSub}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={aumentar}>+</button>
            </div>

            <div>
                <button className={styles.add} onClick={sumar}>
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default Counter;