import React from 'react';
import Image from 'next/image';
import styles from './product.module.css';

const Product = ({ title, description, price, img }) => {
    return (
        <div className={styles.product}>
            <h1>Checkout</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <h2 className={styles.price}>{price}</h2>
            <Image src={img} alt={"Product Thumbnail"}/>
        </div>
    );
};

export default Product;