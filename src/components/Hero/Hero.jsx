import React from "react";
import { SocialIcon } from 'react-social-icons'
import { Typewriter } from 'react-simple-typewriter'

import styles from "./Hero.module.css";
import socials from "../../data/socials.json";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Maaz 👋</h1>
        <p className={styles.description}> I'm
          <Typewriter
            words={[" a Software Developer 💻", "a Teaching Assistant 📚", " a Photographer 📸", " an Adventurer 🏞️", " a Music Lover 🎧", " a Sports Enthusiast 🏀"]}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <div className={styles.socialLinks}>
          <SocialIcon style={{ width: "70px", height: "70px" }} url={socials.linkedin} target="_blank" />
          <SocialIcon style={{ width: "70px", height: "70px" }} url={socials.github} target="_blank" />
          <SocialIcon style={{ width: "70px", height: "70px" }} url={socials.instagram} target="_blank" />
          <SocialIcon style={{ width: "70px", height: "70px" }} url={socials.twitter} target="_blank" />
          <SocialIcon style={{ width: "70px", height: "70px" }} url={socials.facebook} target="_blank" />
        </div>
        <a href={socials.resume} className={styles.resumeBtn} target="_blank" >
          Resume
        </a>
      </div>
      <div className={styles.heroImgContainer}>
        <img
          src={getImageUrl("hero/hero.jpg")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section >
  );
};
