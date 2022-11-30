import React from 'react';
import { useRouter } from 'next/router'
import { RippleButton, SecureLink } from '../../components';
import styles from './offer.module.css'


const Offer = ({title, description, directory, buttonText, page, props, target}) => {
    if (directory === "") {
        return (
            <div className={styles.offer}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles.learnMoreButton}>
                    <SecureLink
                        href={{
                            pathname: page,
                            query: {
                                product: props
                            }
                        }}>
                        <RippleButton type={"button"}>{buttonText}</RippleButton>
                    </SecureLink>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.offer}>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className={styles.learnMoreButton}>
                    <SecureLink href={directory} target={target} rel={"noreferrer"}>
                        <RippleButton type={"button"}>{buttonText}</RippleButton>
                    </SecureLink>
                </div>
            </div>
        );
    }
};

export default Offer;