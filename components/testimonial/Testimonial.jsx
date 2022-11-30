import React from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import styles from '../../containers/testimonials/testimonials.module.css';

const Testimonial = ({id, image, name, title, quote, testimonialIndex, index, length}) => {
    let position = styles.nextSlide;

    if(testimonialIndex === index) {
        position = styles.activeSlide;
    }

    if(testimonialIndex === index - 1 || (index === 0 && testimonialIndex === length - 1)) {
        position = styles.lastSlide;
    }
    return (
        <article className={`${position}`} key={id}>
            <Image className={styles.personImg} src={image} alt={name} />
            <h4>{name}</h4>
            <p className={styles.title}>{title}</p>
            <p className={styles.quote}>{quote}</p>
            <FaQuoteRight className={styles.icon}/>
        </article>
    );
};

export default Testimonial;
