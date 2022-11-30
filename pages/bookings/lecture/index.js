import React, { useEffect } from 'react';
import Aos from 'aos';
import { Offer, Navbar } from '../../../components';
import { useInvalidUrlRoutes } from '../../../security/helpers';
import aristotle from '../../../public/assets/img/aristotle.jpg';
import standup from '../../../public/assets/img/stand-up-2.jpg';
import styles from '../../../styles/pages/lecture.module.css';
import offerStyles from '../../../components/offer/offer.module.css';
import Image from 'next/image';
import 'aos/dist/aos.css';
import Head from "next/head";

const Lecture = () => {
    useInvalidUrlRoutes();

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className={styles.lecture}>
            <Head>
                <title>Educational Lectures</title>
                <meta name="description" content="Educational Lectures"/>
                <meta property="og:title" content="Educational Lectures"/>
                <meta property="og:description" content="Educational Lectures from Cyril Junior Dim"/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/lectures"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div className={styles.lectureNav}>
                <Navbar />
            </div>
            <div className={`${styles.lecture_header} section__padding`} data-aos={"fade-up"}>
                <h1>Educational Lecture</h1>
                <p>Educational Institutions the world over recognize that students need more than industry knowledge. As
                    the saying goes, &quot;Book smarts are incomplete without street smarts,&quot; or, more formally, hard skills
                    are incomplete without soft-skills.
                </p>

                <p>As your University or school strives to impart knowledge about soft skills, skills like leadership,
                    communication, teamwork, and critical thinking, it is important to fully exploit the wealth of
                    support found in industry leaders, professionals, and people who have dedicated their lives to
                    improving their soft-skills.
                </p>

                <p>With this in mind, why not bring me in to give a lecture on core soft-skills? Gift your students a
                    World-Class lecture on skills they will use in their careers and beyond.
                </p>
            </div>
            <div className={`${styles.lectureOffers} section__padding`} data-aos={"fade-up"}>
                <h1>Lecture Offers</h1>
                <div className={offerStyles.offerRhs} data-aos={"slide-right"}>
                    <div className={offerStyles.offerImg}>
                        <Image src={aristotle} alt={"Rhetoric Lecture"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"How To Speak Convincingly - Principles of Rhetoric"}
                            description={"Aristotle taught that the goal of our speaking is to convince people. Indeed, " +
                                "before anybody invests in what we have to say, they have to invest in us as people first. " +
                                "But how can we be convincing? How can we speak in a way that demonstrates credibility and " +
                                "ultimately results in persuasion? Consider practical examples of using the principles of" +
                                " rhetoric."}
                            directory={"/assets/pdf/How To Speak Convincingly - Principles of Rhetoric.pdf"}
                            target={"_blank"}
                            buttonText={"View Offer"}
                        />
                    </div>
                </div>
                <div className={offerStyles.smallOfferRhs} data-aos={"slide-right"}>
                    <div className={offerStyles.offerImg}>
                        <Image src={standup} alt={"Storytelling"}/>
                    </div>
                    <div className={"offer-content"}>
                        <Offer
                            title={"How To Tell Stories That Connect"}
                            description={"From the dawn of time, mankind has told stories. Whether we realise it or not, " +
                                "we are constantly seeking stories. We watch the news, we browse social media, we go to" +
                                " the cinema. Something about these keeps us coming back for more. What's the " +
                                "magic? What do movie-makers and news outlets do to make us desperate to hear one " +
                                "more story? How can you speak so people want one more story and, most importantly, " +
                                "how can you leverage this skill to boost your career?"}
                            directory={"/assets/pdf/How To Tell Stories That Connect.pdf"}
                            target={"_blank"}
                            page={ "" }
                            buttonText={"View Offer"}
                        />
                    </div>
                </div>
                <div className={offerStyles.offerLhs} data-aos={"slide-left"}>
                    <div className={offerStyles.offerContent}>
                        <Offer
                            title={"How To Tell Stories That Connect"}
                            description={"From the dawn of time, mankind has told stories. Whether we realise it or not, " +
                                "we are constantly seeking stories. We watch the news, we browse social media, we go to" +
                                " the cinema. Something about these keeps us coming back for more. What's the " +
                                "magic? What do movie-makers and news outlets do to make us desperate to hear one " +
                                "more story? How can you speak so people want one more story and, most importantly, " +
                                "how can you leverage this skill to boost your career?"}
                            directory={"/assets/pdf/How To Tell Stories That Connect.pdf"}
                            target={"_blank"}
                            page={ "" }
                            buttonText={"View Offer"}
                        />
                    </div>
                    <div className={offerStyles.offerImg}>
                        <Image src={standup} alt={"Storytelling"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lecture;