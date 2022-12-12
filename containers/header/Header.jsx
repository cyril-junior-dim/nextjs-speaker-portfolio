import React, {useEffect} from 'react';
import logo from '../../public/assets/logos/logo-white.png';
import { RippleButton, SecureLink } from '../../components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './header.module.css';
import Image from 'next/image';

const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.cyrilWebsite__header}>
            <div className={`${styles.mainHeaderContent} section__padding`}>
                <div className={styles.textAndLogo} data-aos={"fade"}>
                    <div className={styles.headerContent_logo}>
                        <Image src={logo} alt={"Logo"} priority={true}/>
                    </div>
                    <p>World Champion of Public Speaking</p>
                    <p>Speaker | Coach | Event Host</p>
                    <div className={styles.headerContent_missionStatement}>
                        <p>Create real impact, through real stories, made for real people... in your real voice.</p>
                    </div>
                    <div className={styles.headerContent__button}>
                        <SecureLink href={"/bookings"}>
                            <RippleButton type={"button"}>Book Cyril</RippleButton>
                        </SecureLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;