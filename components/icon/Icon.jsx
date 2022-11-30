import React from 'react';
import Image from 'next/image';
import styles from './icon.module.css';

const Icon = ({id, img, title, text}) => {
    return (
        <div className={styles.iconGroup} key={id}>
            <div>
                <Image src={img} alt={title}/>
                <p className={styles.boldTitle}>{title}</p>
            </div>
            <div>
                <p className={styles.iconText}>{text}</p>
            </div>
        </div>
    );
};

export default Icon;