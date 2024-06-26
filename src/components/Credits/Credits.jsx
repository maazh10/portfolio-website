import React from "react";

import styles from "./Credits.module.css";

export const Credits = () => {
  return (
    <footer id="credits" className={styles.container}>
      <div className={styles.text}>
        <h2>Credits</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://www.flaticon.com/free-icons/software-development"
            title="software development icons"
          >Software development icons created by Freepik - Flaticon</a
          >
        </li>
        <li className={styles.link}>
          <a href="https://www.flaticon.com/free-icons/development" title="development icons">Development icons created by Design Circle - Flaticon</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Freepik - Flaticon</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.flaticon.com/free-icons/back-to-school" title="back to school icons">Back to school icons created by Triangle Squad - Flaticon</a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/CodeCompleteYT/react-portfolio">Template from: CodeCompleteYT</a>
        </li>
      </ul>
    </footer>
  );
};
