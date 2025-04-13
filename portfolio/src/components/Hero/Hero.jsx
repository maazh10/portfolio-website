import React, { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons'
import { Typewriter } from 'react-simple-typewriter'

import styles from "./Hero.module.css";
import socials from "../../data/socials.json";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const imageCount = 5;
  const images = [];
  for (let i = 1; i <= imageCount; i++) {
    images.push(getImageUrl(`hero/hero${i}.jpg`));
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [images.length]);


  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Maaz 👋</h1>
        <p className={styles.description}> I am
          <Typewriter
            words={[" a Software Developer 💻", " a Photographer 📸", " an Adventurer 🏞️", " a Music Lover 🎧", " a Sports Enthusiast 🏀"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <div>
          <div className={styles.socialLinks}>
            <SocialIcon className={styles.socialIcon} style={{ width: "70px", height: "70px" }} url={socials.linkedin} target="_blank" />
            <SocialIcon className={styles.socialIcon} style={{ width: "70px", height: "70px" }} url={socials.github} target="_blank" />
            <SocialIcon className={styles.socialIcon} style={{ width: "70px", height: "70px" }} url={socials.instagram} target="_blank" />
            <SocialIcon className={styles.socialIcon} style={{ width: "70px", height: "70px" }} url={socials.spotify} target="_blank" />
            <SocialIcon className={styles.socialIcon} style={{ width: "70px", height: "70px" }} url={socials.email} target="_blank" />
          </div>
          <div className={styles.heroBtnContainer}>
            <a href="/blog" className={styles.heroBtn} >
              Blog
            </a>
            <a href={getImageUrl("hero/resume.pdf")} className={styles.heroBtn} target="_blank" >
              Resume
            </a>
          </div>
        </div>
        <img src={getImageUrl("hero/signature.png")} alt="my signature" className={styles.signature} />
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={images[currentIndex]}
          alt="Hero"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section >
  );
};
