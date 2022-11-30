import React from 'react';
import Image from 'next/image';
import styles from './affiliate.module.css';
import { toastmasters, tedx, pwr, iza } from '../../data/affiliates-logos';

const Affiliate = () => {
    return (
        <div className={styles.cyrilWebsite__affiliate}>
            <div className={styles.cyrilWebsite__affiliates}>
                <div>
                    <Image src={iza} alt={'Izabella Tokarska'}/>
                </div>
                <div>
                    <Image src={tedx} alt={'tedx'}/>
                </div>
                <div>
                    <Image src={pwr} alt={'pwr'}/>
                </div>
                <div>
                    <Image src={toastmasters} alt={'toastmasters'}/>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;