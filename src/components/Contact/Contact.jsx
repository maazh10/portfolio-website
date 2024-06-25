import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
        <a
          href="https://www.flaticon.com/free-icons/software-development"
          title="software development icons"
        >Software development icons created by Freepik - Flaticon</a
        >
        <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Design Circle - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/back-to-school" title="back to school icons">Back to school icons created by Triangle Squad - Flaticon</a>
      </ul>
    </footer>
  );
};
