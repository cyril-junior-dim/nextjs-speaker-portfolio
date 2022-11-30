import React, { useEffect } from 'react';
import styles from '../../../styles/pages/coaching.module.css';
import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { IconBelt } from '../../../containers';
import { useInvalidUrlRoutes } from '../../../security/helpers';
import { Offer, Navbar, RippleButton } from '../../../components';
import hourSession from '../../../public/assets/img/1_hour_session.png';
import mainImg from '../../../public/assets/img/training-title.png';
import scriptEval from '../../../public/assets/img/script_eval.png';
import sixtyDay from '../../../public/assets/img/60_day_coach.png';
import vidEval from '../../../public/assets/img/video_eval.png';
import 'aos/dist/aos.css';
import Head from "next/head";

const Coaching = () => {
    useInvalidUrlRoutes();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={"coaching"}>
            <Head>
                <title>Coaching - Cyril Junior Dim</title>
                <meta name="description" content="Coaching by Cyril"/>
                <meta property="og:title" content="Coaching - Cyril Junior Dim"/>
                <meta property="og:description" content="Coaching by Cyril"/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/coaching"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.coachingNav}>
                <Navbar />
            </div>
            <div className={styles.coachingHeader} data-aos={"fade"}>
                <div className={styles.headerContent}>
                    <div className={styles.offer} data-aos={"fade"}>
                        <h1>Build a World Class Presentation</h1>
                        <p>Perhaps you’re an emerging speaker, participating a speech contest, or an executive with years of
                            corporate experience. At times, the difference between a good speech and a great one is
                            having an experienced coach in your corner. I can be just that. Take a moment to
                            consider my wide range of coaching offers.
                        </p>
                        <div className={"offersButton"} data-aos={"fade"} data-aos-delay="2200">
                            <Link href="/bookings/coaching#coaching-offers">
                                <RippleButton type={"button"} >View Offers</RippleButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.coaching_headerImg}>
                    <Image src={mainImg} alt={"Training"} priority={true}/>
                </div>
            </div>
            <div className={styles.coaching_headerMobile} data-aos={"fade"}
                 style={{backgroundImage: `url(/assets/img/coaching-header-img-shaded.png)`, backgroundSize: 'cover'}}>
                <div className={`${styles.offerMobile} section__padding`}>
                    <h1>Build a World Class Presentation</h1>
                    <p>Perhaps you’re an emerging speaker, participating a speech contest, or an executive with years of
                        corporate experience. At times, the difference between a good speech and a great one is
                        having an experienced coach in your corner. I can be just that. Take a moment to
                        consider my wide range of coaching offers.
                    </p>
                    <div className={"offersButton"} data-aos={"fade"} data-aos-delay="2200">
                        <Link href="/bookings/coaching#coaching-offers">
                            <button type={"button"}>View Offers</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.coachingProcess}>
                <IconBelt />
            </div>
            <div className={`${styles.coachingOffers} section__padding`} id={"coaching-offers"} data-aos={"fade-up"}>
                <h1>Coaching Offers</h1>
                <div className={styles.offerRhs} data-aos={"slide-right"}>
                    <div className={styles.offerImg}>
                        <Image src={hourSession} alt={"Hour Session"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"1-Hour Session"}
                            description={"A consultation session for speakers who have made some headway into their " +
                                "presentation or those who need very specific feedback or recommendations. Can be conducted" +
                                " physically or virtually."}
                            directory={"https://www.picktime.com/cyriljuniordim"}
                            target={"_blank"}
                            buttonText={"Book a Session"}
                        />
                    </div>
                </div>
                <div className={styles.smallOfferRhs} data-aos={"slide-right"}>
                    <div className={styles.offerImg}>
                        <Image src={scriptEval} alt={"Script Evaluation"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"Script Evaluation"}
                            description={"Receive written feedback on a script. I evaluate elements of clarity, coherence," +
                                " storytelling, consistency with the purpose, emotional impact and language musicality. " +
                                "Feedback is ready within 1 week."}
                            directory={""}
                            page={ "/bookings/coaching/checkout" }
                            props={1}
                            buttonText={"Submit a Script"}
                        />
                    </div>
                </div>
                <div className={styles.offerLhs} data-aos={"slide-left"}>
                    <div className={styles.offerContent}>
                        <Offer
                            title={"Script Evaluation"}
                            description={"Receive written feedback on a script. I evaluate elements of clarity, coherence," +
                                " storytelling, consistency with the purpose, emotional impact and language musicality. " +
                                "Feedback is ready within 1 week."}
                            directory={""}
                            page={ "/bookings/coaching/checkout" }
                            props={1}
                            buttonText={"Submit a Script"}
                        />
                    </div>
                    <div className={styles.offerImg}>
                        <Image src={scriptEval} alt={"Script Evaluation"}/>
                    </div>
                </div>
                <div className={styles.offerRhs} data-aos={"slide-right"}>
                    <div className={styles.offerImg}>
                        <Image src={vidEval} alt={"Video Evaluation"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"Video Evaluation"}
                            description={"Receive written evaluation of a recorded performance. In addition to scripting" +
                                " elements, I evaluate stage presence, props, and, especially, audience connection." +
                                " Feedback is ready within 1 week and can be further discussed in a virtual meeting."}
                            directory={""}
                            page={ "/bookings/coaching/checkout" }
                            props={2}
                            buttonText={"Submit a Video"}
                        />
                    </div>
                </div>
                <div className={styles.smallOfferRhs} data-aos={"slide-right"}>
                    <div className={styles.offerImg}>
                        <Image src={sixtyDay} alt={"10-Session Bundle"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"10-Session Bundle"}
                            description={"Receive personalized coaching from me over the course of ten 1-Hour sessions. " +
                                "During this time we will work on crafting a compelling speech, and meticulously " +
                                "planning its delivery. Ideal for individuals who need support developing a roadmap " +
                                "from speech inception to delivery."}
                            directory={""}
                            page={ "/bookings/coaching/checkout" }
                            props={3}
                            buttonText={"Book Cyril"}
                        />
                    </div>
                </div>
                <div className={styles.offerLhs} data-aos={"slide-left"}>
                    <div className={styles.offerContent}>
                        <Offer
                            title={"10-Session Bundle"}
                            description={"Receive personalized coaching from me over the course of ten 1-Hour sessions. " +
                                "During this time we will work on crafting a compelling speech, and meticulously " +
                                "planning its delivery. Ideal for individuals who need support developing a roadmap " +
                                "from speech inception to delivery."}
                            directory={""}
                            page={ "/bookings/coaching/checkout" }
                            props={3}
                            buttonText={"Book Cyril"}
                        />
                    </div>
                    <div className={styles.offerImg}>
                        <Image src={sixtyDay} alt={"10-Session Bundle"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coaching;