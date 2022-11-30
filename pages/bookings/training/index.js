import React, { useEffect } from 'react';
import Aos from 'aos';
import { Offer, Navbar } from '../../../components';
import { useInvalidUrlRoutes } from '../../../security/helpers';
import feedback from '../../../public/assets/img/feedback.jpg';
import aristotle from '../../../public/assets/img/aristotle.jpg';
import offerStyles from '../../../components/offer/offer.module.css';
import styles from '../../../styles/pages/training.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Head from "next/head";

const Training = () => {
    useInvalidUrlRoutes();

    let rhetoricOffer = "/assets/pdf/How To Speak Convincingly - Principles of Rhetoric.pdf";
    let feedbackOffer = "/assets/pdf/How To Give Feedback & Inspiration In The Same Breath.pdf";

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className={styles.training}>
            <Head>
                <title>Cyril&apos;s Training Sessions</title>
                <meta name="description" content="Cyril's Training Sessions"/>
                <meta property="og:title" content="Trainings - Cyril Junior Dim"/>
                <meta property="og:description" content="Trainings by Cyril Junior Dim."/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/training"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.trainingNav}>
                <Navbar />
            </div>
            <div className={`${styles.training_header} section__padding`} data-aos={"fade-up"}>
                <h1>In-House Training</h1>
                <p>Companies that invest in the growth of their employees, especially when it comes to their soft skills,
                    ought to be applauded. These companies are often associated with thriving work cultures and teams of
                    highly motivated and satisfied individuals.
                </p>

                <p>As your Company strives to support employees&apos; search for soft skills like leadership, communication,
                    teamwork, and problem-solving, it is important to fully exploit the wealth of support found in
                    industry leaders, professionals, and people who have dedicated their lives to improving their soft-skills.
                </p>

                <p>With this in mind, why not bring me in to conduct in-house training? Gift your team World-Class
                    trainings on soft-skills that could forever change the trajectory of their careers.
                </p>
            </div>
            <div className={`${styles.trainingOffers} section__padding`} data-aos={"fade-up"}>
                <h1>Training Offers</h1>
                <div className={offerStyles.offerRhs} data-aos={"slide-right"}>
                    <div className={offerStyles.offerImg}>
                        <Image src={feedback} alt={"Feedback"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"How To Give Feedback & Inspiration In The Same Breath"}
                            description={"For many, the word 'feedback' represents that one meeting where one is told " +
                                "all the ways they've messed up. We may try to cushion this with the term " +
                                "'constructive criticism' but the bitter sentiment remains nevertheless. Feedback was " +
                                "an absolute difference-maker in my becoming The World Champion of Public Speaking, but " +
                                "that's because it was given correctly. When feedback is given correctly, it inspires, " +
                                "and it helps people shine! How can you give feedback correctly? How can you give " +
                                "feedback that is honest but still inspires greater confidence in the receiver?"}
                            directory={feedbackOffer}
                            target={"_blank"}
                            buttonText={"View Offer"}
                        />
                    </div>
                </div>
                <div className={offerStyles.smallOfferRhs} data-aos={"slide-right"}>
                    <div className={offerStyles.offerImg}>
                        <Image src={aristotle} alt={"Aristotle"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"How To Speak Convincingly - Principles of Rhetoric"}
                            description={"Aristotle taught that the goal of our speaking is to convince people. Indeed, " +
                                "before anybody invests in what we have to say, they have to invest in us as people first. " +
                                "But how can we be convincing? How can we speak in a way that demonstrates credibility and " +
                                "ultimately results in persuasion? Consider practical examples of using the principles of" +
                                " rhetoric."}
                            directory={rhetoricOffer}
                            target={"_blank"}
                            buttonText={"View Offer"}
                        />
                    </div>
                </div>
                <div className={offerStyles.offerLhs} data-aos={"slide-left"}>
                    <div className={offerStyles.offerContent}>
                        <Offer
                            title={"How To Speak Convincingly - Principles of Rhetoric"}
                            description={"Aristotle taught that the goal of our speaking is to convince people. Indeed, " +
                                "before anybody invests in what we have to say, they have to invest in us as people first. " +
                                "But how can we be convincing? How can we speak in a way that demonstrates credibility and " +
                                "ultimately results in persuasion? Consider practical examples of using the principles of" +
                                " rhetoric."}
                            directory={rhetoricOffer}
                            target={"_blank"}
                            buttonText={"View Offer"}
                        />
                    </div>
                    <div className={offerStyles.offerImg}>
                        <Image src={aristotle} alt={"Aristotle"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;