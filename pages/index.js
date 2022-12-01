import React, { useEffect } from 'react';
import { Affiliate, Form, Navbar } from '../components';
import { useInvalidUrlRoutes } from '../security/helpers';
import { Videos, About, Header, Pictures, Testimonials, Blog } from '../containers';
import galleryPictures from '../data/gallery-pictures';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useInvalidUrlRoutes();

  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
      <div className={"Home"}  id={"home"} data-aos={"fade"}>
          <Head>
              <title>Cyril Junior Dim</title>
              <meta name="description" content="Official Website of Cyril Junior Dim"/>
              <meta property="og:title" content="Cyril Junior Dim's Website"/>
              <meta property="og:description" content="Official Website of Cyril Junior Dim"/>
              <meta property="og:url" content="https://cyriljuniordim.com/"/>
              <meta property="og:type" content="website"/>
              <link rel="icon" href="/assets/logos/logo-white.png" />
          </Head>
        <div className={styles.homeImg} style={{backgroundImage: `url(/assets/img/home-main-image.png)`, backgroundSize: 'cover'}}>
          <div className={styles.homeNav}>
            <Navbar />
          </div>
          <Header />
        </div>
        <div className={"affiliates"} data-aos={"fade-up"}>
          <Affiliate />
        </div>
        <div className={"about-short"} id={"about"}>
          <About />
        </div>
        <Videos />
        <div className={"testimonials-container"} data-aos={"flip-right"}>
          <Testimonials />
        </div>
        <div className={styles.formContainer}>
          <div className={`${styles.form} section__padding`} data-aos={"slide-left"}>
            <div className={styles.cyrilWebsite__formText}>
              <p>
                Subscribe to receive updates from Cyril and get his article “The Story of Ndini”.
              </p>
            </div>
            <Form />
          </div>
        </div>
        <div className={`${styles.galleryContainer} section__padding`} data-aos={"fade-up"}>
          <Pictures galleryImages={galleryPictures} />
        </div>
        <Blog />
      </div>
  );
}

export default Home;
