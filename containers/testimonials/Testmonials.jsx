import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { Testimonial } from '../../components';
import data from '../../data/testimonials-data';
import styles from './testimonials.module.css';

const Testimonials = () => {
    const [testimonials /*, setTestimonials*/ ] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = testimonials.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, testimonials])

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 8000);
        return () => clearInterval(slider)
    }, [index])

    return (
        <section className={styles.section}>
            <div className={styles.section_title}>
                <h1>Testimonials</h1>
            </div>
            <div className={styles.testimonials}>
                {testimonials.map((testimonial, testimonialIndex) => {
                    return <Testimonial key={testimonial.id} {...testimonial} testimonialIndex=
                        {testimonialIndex} index={index} length={data.length}/>
                })}
                <button className={styles.prev} onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className={styles.next} onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Testimonials;