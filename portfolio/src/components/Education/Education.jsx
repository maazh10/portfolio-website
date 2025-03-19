import React from "react";

import styles from "./Education.module.css";
import history from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <ul className={styles.history}>
                    {history.map((historyItem) => {
                        return (
                            <li key={historyItem.school} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.school} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{historyItem.school}</h3>
                                    <h3>{historyItem.degree}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.desc.map((item) => {
                                            return <li key={item}><span>{item}</span></li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className={styles.skills}>
                    <div className={styles.sideImgContainer}>
                        <img src={getImageUrl("education/educationImg.png")} alt="Education" />
                    </div>
                </div>
            </div>

        </section>
    );
};
