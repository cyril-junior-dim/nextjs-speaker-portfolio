import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './videos.module.css';

const Videos = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={`${styles.videos} section__padding`}>
            <h1 className>Cyril in Action</h1>
            <div className={styles.videoRowRight}>
                <div className={`${styles.videoDescription} section__padding`} data-aos={"fade-up"}>
                    <h4>How to write speeches that connect  | Cyril Junior Dim | TEDxWiertniczaStreet</h4>
                    <p>
                        The World Champion of Public Speaking, Cyril Junior Dim, discusses the strategies that
                        master communicators exploit to deliver compelling speeches or presentations.
                    </p>
                </div>
            </div>
            <div className={`${styles.video2} section__padding`} data-aos={"zoom-in"}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6BV6PXEckqg"
                        title="How to write speeches that connect  | Cyril Junior Dim | TEDxWiertniczaStreet"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>

            <div className={styles.videoRow2}>
                <div className={styles.videoRow1}>
                    <div className={`${styles.video1} section__padding`} data-aos={"zoom-in"}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lvYu29BpenY"
                                title="2022 Toastmasters World Champion of Public Speaking: Cyril Junior Dim"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>
                    </div>
                    <div className={styles.videoRowLeft}>
                        <div className={`${styles.videoDescription} section__padding`} data-aos={"fade-down"}>
                            <h4>2022 Toastmasters World Champion of Public Speaking</h4>
                            <p>1st place: Watch Cyril Junior Dim – the 2022 Toastmasters International World Champion of
                                Public Speaking – deliver his winning speech &quot;Ndini.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;