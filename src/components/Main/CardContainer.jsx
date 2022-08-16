import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from './CardList';
import style from './CardContainer.module.css';

const CardContainer = () => {
    
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
   

    useEffect(() => {
        setLoading(true);
        if (categoryId) {
            fetch(
                `https://fake-products-eric.herokuapp.com/api/products/category/${categoryId}`
            )
                .then((res) => res.json())
                .then((res) => {
                    setItems(res);
                    setLoading(false);
                });
        } else {
            fetch('https://fake-products-eric.herokuapp.com/api/products')
                .then((res) => res.json())
                .then((res) => {
                    setItems(res);
                    setLoading(false);
                });
        }
    }, [categoryId]);


    return (
        <div className={style.CardContainer}>
           
            {loading ? (
                <h1>Cargando...</h1>
            ) : (
                <>
                    {categoryId ? (
                        <h2>
                            Conocé nuestras {categoryId.toLocaleLowerCase()}
                        </h2>
                    ) : (
                        <h2>3 y 6 cuotas sin interes! ENVIOS GRATIS SUPERANDO LOS $500</h2>
                    )}

                    <CardList items={items} />
                </>
            )}
        </div>
    );
};

export default CardContainer;