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
                Hi, I'm Maaz! I am a software developer and recent grad based in Toronto, Ontario. I graduated from the University of Toronto in June 2024 with a major in Computer Science and I currently work as a Software Developer at Electric Mind. I was born and raised in Karachi, Pakistan and moved to Canada in 2016. I ended off middle school, and completed my high school diploma in Winnipeg, Manitoba where I spent around 6 years of my life. I moved to Toronto to attend UofT in 2021 and have been living here ever since.
              </p>
              <p>
                I have a keen interest in building innovative software and solving complex problems, particularly on the web. I have a broad range of school/professional experiences in data manipulation, automation, full-stack web development, dev-ops, as well as designing complex software architecture.
              </p>
              <p>
                I am extremely knowledge-driven, aspired by cutting-edge technologies and I'm eager to grow and use my skills to change the world someday 😊
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/graduated.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                I am a recent graduate from the University of Toronto with a Bachelor's of Science
                majoring in Computer Science and specializing in Software Engineering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/development.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I currently work at Electric Mind (prev. Intelliware) as a Junior Software Developer. As a student I completed two 4 month co-ops as a Software Engineer at UHN and RBC. I have experience as both a frontend and backend web developer building responsive
                sites as well as fast and optimized back-end systems and APIs. I'm also experienced in
                object oriented programming, design principles, functional programming, and software architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/teaching.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Teaching Assistant</h3>
              <p>
                During my time at UofT, I served as a teaching assistant for multiple courses and have
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
