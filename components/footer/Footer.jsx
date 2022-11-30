import React, {useEffect} from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ig, fb, yt, linkedin, mail } from '../../data/footer-icons';
import { useInView } from "react-intersection-observer";
import { SecureLink } from '../index';

const Menu = () => (
    <>
        <p><SecureLink href="/">Home</SecureLink></p>
        <p><SecureLink href="/#about">About Cyril</SecureLink></p>
        <p><SecureLink href="/bookings">Bookings</SecureLink></p>
        <p><SecureLink href="/bookings/coaching">Coaching</SecureLink></p>
        <p><SecureLink href={"/contact"}>Contact</SecureLink></p>
    </>
)

const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
        window.addEventListener('load', Aos.refresh)
    }, []);

    const [ref, inView] = useInView({ threshold: 0.5 });

    return (
        <div className={styles.footer}>
            <div className={`${styles.cyrilWebsite__footer} section__padding`}>
                <div className={styles.footerNav} data-aos={"slide-right"}>
                    <Menu />
                </div>
                <div className={styles.footerDivider} />
                <div className={styles.contactInfo}>
                    <div ref={ref} className={styles.footerSmIcons}>
                        <div>
                            <SecureLink href={"/contact"}>
                                <Image src={mail} alt={"Mail"} className={inView ? styles.smAnimation1 : null}/>
                            </SecureLink>
                        </div>
                        <div>
                            <a href={"https://www.linkedin.com/in/cyril-junior-dim/"} target={"_blank"} rel={"noreferrer"}>
                                <Image src={linkedin} alt={'LinkedIn'} className={inView ? styles.smAnimation2 : null}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.youtube.com/channel/UC_GNE1TkbDB2IJILJtSe55A"} target={"_blank"} rel={"noreferrer"}>
                                <Image src={yt} alt={"YouTube"} className={inView ? styles.smAnimation3 : null}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.facebook.com/cyril.j.dim/"} target={"_blank"} rel={"noreferrer"}>
                                <Image src={fb} alt={"Facebook"} className={inView ? styles.smAnimation4 : null}/>
                            </a>
                        </div>
                        <div>
                            <a href={"https://www.instagram.com/cyril.jr.dim/"} target={"_blank"} rel={"noreferrer"}>
                                <Image src={ig} alt={'Instagram'} className={inView ? styles.smAnimation5 : null}/>
                            </a>
                        </div>
                    </div>
                </div>
                <p className={styles.copyright}>© Cyril Junior Dim, Inc. 2022</p>
            </div>
            <div className={styles.copyrightFooter}>
                <p className={styles.smallFooter}>© Cyril Junior Dim, Inc. 2022</p>
            </div>
        </div>
    );
};

export default Footer;