import React, { useState } from 'react';
import Image from 'next/image';
import styles from './pictures.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Pictures = ({galleryImages}) => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber( galleryImages.length - 1 )
            : setSlideNumber( slideNumber - 1);
    }

    // Next Image
    const nextSlide = () => {
        slideNumber === (galleryImages.length - 1)
            ? setSlideNumber(0)
            : setSlideNumber( slideNumber + 1)
    }

    return (
        <div>
            {openModal &&
                <div className={styles.sliderWrap}>
                    <FiChevronLeft className={styles.btnPrev} onClick={prevSlide} />
                    <FiChevronRight className={styles.btnNext} onClick={nextSlide} />
                    <div className={styles.fullScreenImage}>
                        <FontAwesomeIcon  icon={ faCircleXmark } className={styles.btnClose} onClick={handleCloseModal} />
                        <Image src={galleryImages[slideNumber].img} alt={''} />
                    </div>
                </div>
            }
            <h1 className={styles.heading}>Gallery</h1>
            <div className={styles.galleryWrap}>
                {
                    galleryImages && galleryImages.map((slide) => {
                        return (
                            <div
                                className={styles.single}
                                key={slide.id}
                                onClick={ () => handleOpenModal(slide.id - 1) }
                            >
                                <Image src={slide.img} alt={' '}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default Pictures;