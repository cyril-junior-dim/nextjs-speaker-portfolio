import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './videos.module.css';

const Videos = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={`${styles.videos} section__padding`} data-aos={"slide-right"}>
            <div className={styles.video} data-aos={"zoom-in"}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lvYu29BpenY"
                        title="2022 Toastmasters World Champion of Public Speaking: Cyril Junior Dim" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={styles.video} data-aos={"zoom-in"}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/q05UjRjCYMA"
                        title="The 2022 World Champion of Public Speaking Shares the Makings of His Story"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    );
};

export default Videos;