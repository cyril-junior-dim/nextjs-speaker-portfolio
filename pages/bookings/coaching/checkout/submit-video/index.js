import React, {useState} from 'react';
import {Navbar, Popup} from '../../../../../components';
import styles from '../../../../../styles/pages/submitScript.module.css';
import { useInvalidUrlRoutes } from '../../../../../security/helpers';
import Head from "next/head";

const SubmitVideo = () => {
    useInvalidUrlRoutes();

    const [buttonPopup, setButtonPopup] = useState(true);

    return (
        <div className={"submission-page"}>
            <Head>
                <title>Submit Video</title>
                <meta name="description" content="Submission Instructions"/>
                <meta property="og:title" content="Submit Video"/>
                <meta property="og:description" content="Submission Instructions"/>
                <meta property="og:url" content="https://cyriljuniordim.com/bookings/coaching/checkout/submit-video"/>
                <meta property="og:type" content="website"/>
                <link rel="icon" href="/assets/logos/logo-white.png" />
            </Head>
            <div>
                <Navbar />
            </div>
            <div className={styles.instructionsContainer}>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1 style={{textAlign: "center"}}>Success!</h1>
                    <p>Please follow the submission instructions outlined below. As a reminder, it is best to complete
                        all submissions today, on the same day as all payments.</p>
                </Popup>
                <div className={`${styles.instructions} section__padding`}>
                    <h2>Payment Successful!</h2>
                    <h1>Submission Instructions</h1>
                    <ul>
                        <li>Email the <span className={styles.emailText}>YouTube link </span> to your video to
                            <span className={styles.emailText}> ndini@cyriljuniordim.com </span> with the subject line
                            <b> “VIDEO REVIEW + [NAME & SURNAME] + [DATE].”</b> For example:
                        </li>
                        <p className={styles.emailExample}><i>VIDEO REVIEW JOHN DOE 13 NOVEMBER 2022</i></p>
                        <li>Please submit only one video.</li>
                        <li>In the email, please include any elements you’d like to receive specific feedback about.</li>
                        <li>In the email, please specify:</li>
                        <ul className={styles.nestedList}>
                            <li>the goal of the speech</li>
                            <li>who the audience members will be</li>
                        </ul>
                        <li>Feedback will be submitted to your mailbox within 7 days</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubmitVideo;