import React, {useEffect} from 'react';
import { useInvalidUrlRoutes } from '../../security/helpers';
import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";
import { Offer, Navbar } from '../../components';
import coaching from '../../public/assets/icons/coaching-clipart.jpeg';
import training from '../../public/assets/icons/training.jpeg';
import keynote from '../../public/assets/icons/keynote.jpeg';
import lecture from '../../public/assets/icons/lecture.jpeg';
import mic from '../../public/assets/icons/mic.jpeg';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from '../../styles/pages/bookings.module.css';
import offerStyles from '../../components/offer/offer.module.css';
import Head from "next/head";

const buttonText = "Learn More";

const Bookings = () => {
    useInvalidUrlRoutes();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const FadeUp = batch(StickyIn(), FadeIn(), ZoomIn(), MoveOut(0, -200));

    return (
        <div className={styles.bookings}>
            <Head>
                <title>Book Cyril</title>
                <meta name="description" content="Book Cyril"/>
                <meta property="og:title" content="Bookings - Cyril Junior Dim"/>
                <meta property="og:description" content="Book Cyril Junior Dim."/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.bookingsNav}>
                <Navbar/>
            </div>
            <div className={styles.scrollContainer}>
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <div className={"header-container"}>
                                <div className={styles.bookingsHeaderText} data-aos={"fade"} data-aos-delay="1000">
                                    <h1>Book a World Class Speaker today...</h1>
                                    <h2>Coaching  |  Keynotes  |  Lectures  |  Event Hosting  |  Trainings</h2>
                                </div>
                                <div className={styles.indicator}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={1}>
                        <Animator animation={FadeUp}>
                            <div className={"coaching-container"}>
                                <div className={offerStyles.offerRhs}>
                                    <div className={offerStyles.offerImg}>
                                        <Image src={coaching} alt={"coaching"}/>
                                    </div>
                                    <div className={"offer-content"}>
                                        <Offer
                                            title={"Coaching"}
                                            description={"Take the most important step in taking your speaking to the next level: Reaching" +
                                                " out for assistance. Be it for that one important presentation, speech contest, or life goal," +
                                                " let’s work together towards measurable growth."}
                                            directory={"/bookings/coaching"}
                                            target={"_self"}
                                            buttonText={buttonText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={2}>
                        <Animator animation={FadeUp}>
                            <div className={"keynotes-container"}>
                                <div className={offerStyles.offerRhs}>
                                    <div className={offerStyles.offerImg}>
                                        <Image src={keynote} alt={"keynote"}/>
                                    </div>
                                    <div className={"offer-content"}>
                                        <Offer
                                            title={"Keynote Address"}
                                            description={"Inspire teams and clients to action and increased productivity. Unforgettable stories" +
                                                " that are years in the crafting and an enthusiastic, lively delivery may just mark a turning " +
                                                "point in your team’s outlook."}
                                            directory={"/bookings/keynotes"}
                                            target={"_self"}
                                            buttonText={buttonText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={3}>
                        <Animator animation={FadeUp}>
                            <div className={"lectures-container"}>
                                <div className={offerStyles.offerRhs}>
                                    <div className={offerStyles.offerImg}>
                                        <Image src={lecture} alt={"lecture"}/>
                                    </div>
                                    <div className={"offer-content"}>
                                        <Offer
                                            title={"Educational Lecture"}
                                            description={"For Universities and other educational institutions looking to invite a professional "+
                                                "speaker to conduct a lecture. It is possible to organize recorded lectures to be prepared for" +
                                                " online courses."}
                                            directory={"/bookings/lecture"}
                                            target={"_self"}
                                            buttonText={buttonText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={4}>
                        <Animator animation={FadeUp}>
                            <div className={"hosting-container"}>
                                <div className={offerStyles.offerRhs}>
                                    <div className={offerStyles.offerImg}>
                                        <Image src={mic} alt={"hosting"}/>
                                    </div>
                                    <div className={"offer-content"}>
                                        <Offer
                                            title={"Event Hosting"}
                                            description={"Running a conference, award ceremony, or any other show? Add a touch of ‘World Class’" +
                                                " through your choice of event host."}
                                            directory={"/bookings/hosting"}
                                            target={"_self"}
                                            buttonText={buttonText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>

                    <ScrollPage page={5}>
                        <Animator animation={FadeUp}>
                            <div className={"training-container"}>
                                <div className={offerStyles.offerRhs}>
                                    <div className={offerStyles.offerImg}>
                                        <Image src={training} alt={"training"}/>
                                    </div>
                                    <div className={"offer-content"}>
                                        <Offer
                                            title={"In-House Training"}
                                            description={"Receive workshops and trainings for your company or team designed to boost " +
                                                "productivity, team culture, and the soft-skills that promote a healthy work environment"}
                                            directory={"/bookings/training"}
                                            target={"_self"}
                                            buttonText={buttonText}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </div>
            <div className={`${styles.bookingsContent} section__padding`}>
                <div className={"offersList"}>
                    <div className={styles.bookingsHeader}>
                        <div className={styles.bookingsHeaderText} data-aos={"fade"} data-aos-delay="1000">
                            <h1>Book a World Class Speaker today...</h1>
                            <div className={styles.bookingOffersMenu}>
                                <h2>
                                    <a href={"/bookings#offer-coaching"}>|Coaching|</a>
                                </h2>
                                <h2>
                                    <a href={"/bookings#offer-keynotes"}>|Keynotes|</a>
                                </h2>
                                <h2>
                                    <a href={"/bookings#offer-lectures"}>|Lectures|</a>
                                </h2>
                                <h2>
                                    <a href={"/bookings#offer-hosting"}>|Event Hosting|</a>
                                </h2>
                                <h2>
                                    <a href={"/bookings#offer-training"}>|Trainings|</a>
                                </h2>
                            </div>
                        </div>
                        <div className={styles.indicator}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={styles.bookingsOffers}>
                        <div className={"coaching-offer"} data-aos={"fade"}>
                            <div className={offerStyles.offerRhs} id={"offer-coaching"}>
                                <div className={offerStyles.offerImg}>
                                    <Image src={coaching} alt={"coaching"}/>
                                </div>
                                <div className={"offer-content"}>
                                    <Offer
                                        title={"Coaching"}
                                        description={"Take the most important step in taking your speaking to the next level: Reaching" +
                                            " out for assistance. Be it for that one important presentation, speech contest, or life goal," +
                                            " let’s work together towards measurable growth."}
                                        directory={"/bookings/coaching"}
                                        target={"_self"}
                                        buttonText={buttonText}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"keynote-offer"} data-aos={"fade"}>
                            <div className={offerStyles.offerRhs} id={"offer-keynotes"}>
                                <div className={offerStyles.offerImg}>
                                    <Image src={keynote} alt={"keynote"}/>
                                </div>
                                <div className={"offer-content"}>
                                    <Offer
                                        title={"Keynote Address"}
                                        description={"Inspire teams and clients to action and increased productivity. Unforgettable stories" +
                                            " that are years in the crafting and an enthusiastic, lively delivery may just mark a turning " +
                                            "point in your team’s outlook."}
                                        directory={"/bookings/keynotes"}
                                        target={"_self"}
                                        buttonText={buttonText}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"lecture-offer"} data-aos={"fade"}>
                            <div className={offerStyles.offerRhs} id={"offer-lectures"}>
                                <div className={offerStyles.offerImg}>
                                    <Image src={lecture} alt={"lecture"}/>
                                </div>
                                <div className={"offer-content"}>
                                    <Offer
                                        title={"Educational Lecture"}
                                        description={"For Universities and other educational institutions looking to invite a professional "+
                                            "speaker to conduct a lecture. It is possible to organize recorded lectures to be prepared for" +
                                            " online courses."}
                                        directory={"/bookings/lecture"}
                                        target={"_self"}
                                        buttonText={buttonText}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"hosting-offer"} data-aos={"fade"}>
                            <div className={offerStyles.offerRhs} id={"offer-hosting"}>
                                <div className={offerStyles.offerImg}>
                                    <Image src={mic} alt={"hosting"}/>
                                </div>
                                <div className={"offer-content"}>
                                    <Offer
                                        title={"Event Hosting"}
                                        description={"Running a conference, award ceremony, or any other show? Add a touch of ‘World Class’" +
                                            " through your choice of event host."}
                                        directory={"/bookings/hosting"}
                                        target={"_self"}
                                        buttonText={buttonText}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"training-offer"} data-aos={"fade"}>
                            <div className={offerStyles.offerRhs} id={"offer-training"}>
                                <div className={offerStyles.offerImg}>
                                    <Image src={training} alt={"training"}/>
                                </div>
                                <div className={"offer-content"}>
                                    <Offer
                                        title={"In-House Training"}
                                        description={"Receive workshops and trainings for your company or team designed to boost " +
                                            "productivity, team culture, and the soft-skills that promote a healthy work environment"}
                                        directory={"/bookings/training"}
                                        target={"_self"}
                                        buttonText={buttonText}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookings;