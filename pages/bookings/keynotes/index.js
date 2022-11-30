import React, {useEffect} from 'react';
import ndiniKeynote from '../../../public/assets/img/ndini-keynote.jpg';
import { useInvalidUrlRoutes } from '../../../security/helpers';
import { Offer, Navbar } from '../../../components';
import Aos from 'aos';
import styles from '../../../styles/pages/keynotes.module.css';
import offerStyles from '../../../components/offer/offer.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Head from "next/head";

const Keynotes = () => {
    useInvalidUrlRoutes();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.keynotes}>
            <Head>
                <title>Cyril Keynotes</title>
                <meta name="description" content="Cyril Keynotes"/>
                <meta property="og:title" content="Cyril Keynotes"/>
                <meta property="og:description" content="Keynote Address by Cyril Junior Dim."/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/keynotes"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.keynotesNav}>
                <Navbar />
            </div>
            <div className={`${styles.keynotes_header} section__padding`} data-aos={"fade-up"}>
                <h1>Keynote Addresses</h1>
                <p>A special performance can be a welcome highlight on any agenda. It could be during a corporate event,
                    large conference, or any event where the audience welcomes an emotional lift.
                </p>

                <p>Over the past decade, I have mastered the art of converting simple stories into powerful,
                    entertaining speeches that are, among many things, thought-provoking and inspirational. Couple this
                    with a culture of research and close contact with academic sources and you have a speaker who can
                    deliver not only entertainment, but real value.
                </p>

                <p>With this in mind, why not bring me in to speak at your event? Gift your audience a World-Class keynote
                    address.
                </p>
            </div>
            <div className={`${styles.keynoteOffers} section__padding`} data-aos={"fade-up"}>
                <h1>Keynote Offers</h1>
                <div className={offerStyles.offerRhs} data-aos={"slide-right"}>
                    <div className={offerStyles.offerImg}>
                        <Image src={ndiniKeynote} alt={"Ndini Keynote"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"This Is Me - Ndini"}
                            description={"Have you ever felt uncomfortable being who you are? Many people look into " +
                                "the mirror and they only see those things that make them different - their skin, " +
                                "their body, their choices in life... For many people, confronting and embracing the " +
                                "real you is the ultimate test of strength and character. I've battled to find and " +
                                "accept my identity my whole life, and it may surprise you how I learned to start " +
                                "accepting myself. Let me tell you my story..."}
                            directory={"/assets/pdf/This is me - Ndini.pdf"}
                            target={"_blank"}
                            buttonText={"View Offer"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Keynotes;