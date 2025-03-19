import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill) => {
            return (
              <div key={skill.title} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem) => {
            return (
              <li key={`${historyItem.organisation}-${historyItem.role}`} className={styles.historyItem}>
                <div className={styles.historyItemHeader}>
                  <div className={styles.historyItemImg}>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                    />
                  </div>
                  <div className={styles.historyItemDetails}>
                    <h3>{historyItem.organisation}</h3>
                    <h3>{historyItem.role}</h3>
                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  </div>
                </div>
                <ul>
                  {historyItem.experiences.map((experience) => {
                    return <li key={experience}><span>{experience}</span></li>;
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
