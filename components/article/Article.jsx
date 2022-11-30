import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './article.module.css';

const Article = ({ imgUrl, date, title, content, link }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.blogContainer_article} data-aos={"zoom-out"}>
            <div className={styles.blogContainer_articleImage}>
                <Image src={imgUrl} alt={"blog"}/>
            </div>
            <div className={styles.blogContainer_articleContent}>
                <div>
                    <p className={styles.date}>{date}</p>
                    <h3>{title}</h3>
                    <p className={styles.content}>{content}</p>
                </div>
                <p className={styles.readFull}>
                    <a href={link} target={"_blank"} rel={"noreferrer"}>
                        Read Full Article
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Article;