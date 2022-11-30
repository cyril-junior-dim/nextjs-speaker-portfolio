import React, {useEffect} from 'react';
import Aos from 'aos';
import styles from '../../styles/pages/contact.module.css';
import 'aos/dist/aos.css';
import { useInvalidUrlRoutes } from '../../security/helpers';
import { CForm, Navbar } from '../../components';
import Head from "next/head";

const Contact = () => {
    useInvalidUrlRoutes();

    let headerImg = "/assets/img/contact-header.png";

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.contact}>
            <Head>
                <title>Contact Cyril</title>
                <meta name="description" content="Contact Cyril"/>
                <meta property="og:title" content="Contact - Cyril Junior Dim"/>
                <meta property="og:description" content="Contact Cyril Junior Dim."/>
                <meta property="og:url" content="https://cyriljuniordim.com/contact"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.contactNav}>
                <Navbar />
            </div>
            <div className={styles.pageTitle} style={{backgroundImage: `url(${headerImg})`}}>
                <h1>Contact</h1>
            </div>
            <div className={`${styles.cform} section__padding`} data-aos={"fade"}>
                <p className={styles.subtitle}>For Queries or Specialized In-House Trainings</p>
                <CForm />
            </div>
        </div>
        );
};

export default Contact;