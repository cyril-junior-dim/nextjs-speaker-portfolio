import React, {useEffect} from 'react';
import Aos from 'aos';
import { CForm, Navbar, RippleButton } from '../../../components';
import { useInvalidUrlRoutes } from '../../../security/helpers';
import styles from '../../../styles/pages/hosting.module.css';
import 'aos/dist/aos.css';
import Head from "next/head";

const Hosting = () => {
    useInvalidUrlRoutes();

    let offerFile = "/assets/pdf/Events Hosting.pdf";
    let headerImg = "/assets/img/hosting-header-img.png";

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.hostingMain}>
            <Head>
                <title>Event Hosting</title>
                <meta name="description" content="Event Hosting by Cyril Junior Dim"/>
                <meta property="og:title" content="Event Hosting"/>
                <meta property="og:description" content="Event Hosting by Cyril Junior Dim."/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/hosting"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.hostingNav} style={{backgroundImage: `url(${headerImg})`, backgroundSize: 'cover'}} data-aos={"fade"}>
                <div className={styles.hostingNavbar}>
                    <Navbar />
                </div>
                <div className={styles.hostingBgImg}>
                    <div className={`${styles.hostingPageCta} section__padding`}>
                        <p data-aos={"fade-up"}>Place your event in the care of a professional host</p>
                        <a href={offerFile} target={"_blank"} rel={"noreferrer"} data-aos={"fade"} data-aos-delay="2500">
                            <RippleButton type="button">View Offer</RippleButton>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${styles.hostingForm} section__padding`} data-aos={"slide-right"}>
                <p className={styles.subtitle}>Want Me to Host Something Specific?</p>
                <CForm />
            </div>
        </div>
    )
};

export default Hosting;