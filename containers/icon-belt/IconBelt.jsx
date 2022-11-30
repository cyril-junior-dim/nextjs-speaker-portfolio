import React, { useState } from 'react';
import styles from './iconBelt.module.css';
import data from '../../data/iconBelt-data';
import { Icon } from '../../components';

const IconBelt = () => {
    const [icons] = useState(data);

    return (
        <div className={styles.coachingSteps} data-aos={"zoom-in"}>
            {icons.map((icons) => {
                return <Icon key={icons.id} {...icons}/>
            })}
        </div>
    );
};

export default IconBelt;