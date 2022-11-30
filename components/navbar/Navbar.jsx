import React, { useState } from 'react';
import { LocationContextProvider } from '../../security/helpers';
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import { RippleButton } from '../../components';
import { SecureLink } from '../../components';
import styles from './navbar.module.css';

const Menu = () => (
    <>
        <LocationContextProvider>
            <p><SecureLink href="/">Home</SecureLink></p>
            <p><SecureLink href="/#about">About Cyril</SecureLink></p>
            <p><SecureLink href="/bookings">Bookings</SecureLink></p>
            <p><SecureLink href="/bookings/coaching">Coaching</SecureLink></p>
        </LocationContextProvider>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className={`${styles.cyrilWebsite__navbar} section__padding`}>
            <div className={styles.cyrilWebsite__navbarLinks_home}>
                <p><SecureLink href="/">Cyril Junior Dim</SecureLink></p>
            </div>
            <div className={styles.cyrilWebsite__navbarLinks_home_alt}>
                <p><SecureLink href="/">Cyril J. Dim</SecureLink></p>
            </div>
            <div className={styles.cyrilWebsite__navbarLinks}>
                <div className={styles.cyrilWebsite__navbarLinks_container}>
                    <Menu />
                </div>
            </div>
            <div className={styles.cyrilWebsite__navbarContact}>
                <SecureLink href={"/contact"}>
                    <RippleButton type="button">Contact</RippleButton>
                </SecureLink>
            </div>
            <div className={styles.cyrilWebsite__navbarMenu}>
                {toggleMenu
                    ? <RiCloseLine color="#000000" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#000000" size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className={`${styles.cyrilWebsite__navbarMenu_container} scale-up-center`}>
                        <div className={styles.cyrilWebsite__navbarMenu_containerLinks}>
                            <Menu />
                        </div>
                        <div className={styles.cyrilWebsite__navbarMenu_containerLinksContact}>
                            <SecureLink href={"/contact"}>
                                <RippleButton type={"submit"}>Contact</RippleButton>
                            </SecureLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;