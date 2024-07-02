import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/aboutme.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
                Hi, I'm Maaz! I am a software developer/recent grad based in Toronto, Ontario. I was born and raised in Karachi, Pakistan and moved to Canada in 2016. I ended off middle school, and completed my high school diploma in Winnipeg, Manitoba where I spent around 6 years of my life. I have a passion for software development and building things that live on the internet.  I have a keen interest in various fields of computer science, particularly in web development and software architecture. I am driven and excited by new technologies and always willing to learn more and more through either coursework or fun side projects. My aspiration is to contribute to something that has meaning or impact while also enhancing my skill set. I strive to grow as a professional and simply as a human while also making the world a better place :)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduated.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                I am a recent graduate from the University of Toronto with a Bachelor's of Science
                majoring in Computer Science and specializing in the Software Engineering stream.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/development.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I have experience as both a frontend and backend web developer building responsive
                sites as well as fast and optimised back-end systems and APIs. I'm also experienced in
                object oriented programming, design principles, functional programming, and software architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/teaching.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Teaching Assistant</h3>
              <p>
                I have been a teaching assistant for multiple courses and have
                helped students understand complex topics in computer science such as
                object-oriented programming, software engineering principles,
                web development, and more.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
