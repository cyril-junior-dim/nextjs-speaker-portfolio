import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './about.module.css';
import headshot from '../../public/assets/img/Headshot.jpg';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className={styles.about}>
            <div className={styles.headshot} data-aos={"slide-right"}>
                <Image src={headshot} alt={'Cyril'}/>
            </div>
            <div className={styles.cyrilWebsite__about} data-aos={"slide-left"}>
                <h1>Ndini</h1>
                <p>Cyril Junior Dim is Zimbabwean by descent and was educated as a Software Engineer in Wrocław, Poland. He
                    has spent the past 13 years mastering the art of Public Speaking. Cyril’s exploits have taken him across
                    all avenues of the spoken word, including Theatre, Stand-Up Comedy, Sports Commentary, and Events
                    Hosting. He is most recognized as an achieved Competitive Public Speaker, having won 2 National
                    Championships in 2 countries in 2 languages. Cyril also holds 3 International titles in a District of 7
                    countries for Speech Evaluation, Improvised Speaking and Humorous Speaking. He is a 2X Continental
                    Champion, and Toastmasters International’s 2022 World Champion of Public Speaking.
                </p>

                <p>Says Cyril, "It took me over 20 years to find the gems and tactics I use onstage... to find my voice and
                    unblushingly proclaim, “Ndini!” I certainly hope I can help you use these gems to find your voice much
                    quicker... " Cyril reveres Public Speaking as a force for inspiration, growth and self-discovery.
                </p>
            </div>
        </div>
    );
};

export default About;