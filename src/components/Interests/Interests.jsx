import React from "react";

import socials from "../../data/socials.json";
import styles from "./Interests.module.css";
import { getImageUrl } from "../../utils";
import { ImageSlider } from "./ImageSlider";

export const Interests = () => {

    const codingImages = [
        getImageUrl("interests/coding/c1.jpg"),
        getImageUrl("interests/coding/c2.jpg"),
        getImageUrl("interests/coding/c3.jpg"),
    ];

    const photographyImages = [
        getImageUrl("interests/photography/p1.jpg"),
        getImageUrl("interests/photography/p2.jpg"),
        getImageUrl("interests/photography/p3.jpg"),
    ];

    const sportsImages = [
        getImageUrl("interests/sports/s1.jpg"),
        getImageUrl("interests/sports/s2.jpg"),
        getImageUrl("interests/sports/s3.jpg"),
        getImageUrl("interests/sports/s4.jpg"),
        getImageUrl("interests/sports/s5.jpg"),
    ];

    const musicImages = [
        getImageUrl("interests/music/m1.jpg"),
        getImageUrl("interests/music/m2.jpeg"),
        getImageUrl("interests/music/m3.png"),
        getImageUrl("interests/music/m4.png"),
        getImageUrl("interests/music/m5.jpeg"),
    ];

    const tvImages = [
        getImageUrl("interests/tv/t1.jpg"),
        getImageUrl("interests/tv/t2.jpg"),
        getImageUrl("interests/tv/t3.jpg"),
        getImageUrl("interests/tv/t4.jpg"),
        getImageUrl("interests/tv/t5.jpg"),
        getImageUrl("interests/tv/t6.jpg"),
    ];

    const gamingImages = [
        getImageUrl("interests/gaming/g1.jpg"),
        getImageUrl("interests/gaming/g2.jpg"),
        getImageUrl("interests/gaming/g3.jpg"),
        getImageUrl("interests/gaming/g4.jpg"),
        getImageUrl("interests/gaming/g5.jpg"),
    ];

    const outdoorsImages = [
        getImageUrl("interests/outdoors/o1.jpg"),
        getImageUrl("interests/outdoors/o2.jpg"),
        getImageUrl("interests/outdoors/o3.jpg"),
        getImageUrl("interests/outdoors/o4.jpg"),
        getImageUrl("interests/outdoors/o5.jpg"),
        getImageUrl("interests/outdoors/o6.jpg"),
        getImageUrl("interests/outdoors/o7.jpg"),
        getImageUrl("interests/outdoors/o9.jpg"),
        getImageUrl("interests/outdoors/o10.jpg"),
        getImageUrl("interests/outdoors/o11.jpg"),
        getImageUrl("interests/outdoors/o12.jpg"),
        getImageUrl("interests/outdoors/o13.jpg"),
        getImageUrl("interests/outdoors/o14.jpg"),
        getImageUrl("interests/outdoors/o15.jpeg"),
        getImageUrl("interests/outdoors/o16.jpg"),
        getImageUrl("interests/outdoors/o17.jpg"),
        getImageUrl("interests/outdoors/o18.jpg"),
        getImageUrl("interests/outdoors/o19.jpg"),
    ];

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return (
        <section className={styles.container} id="interests">
            <h2 className={styles.title}>Hobbies & Interests</h2>
            <div className={styles.content}>
                <ul className={styles.interestItems}>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>💻 Coding</h3>
                                <p>
                                    Firstly and most importantly, I love coding. Even outside of work and school, I like to build projects, learn new technologies, and solve problems for the fun of it. See some of my most significant projects <a href="#projects">above</a> or check out my <a href={socials.github} target="_blank">GitHub</a> for more.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(codingImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>📸 Photography</h3>
                                <p>
                                    I enjoy taking photos everywhere I go.  I like to capture moments, places, and people. I learned how to use a professional DSLR camera in high school and used it to learn different kinds of photography. Now I mostly take photos on my Pixel phone, which has an excellent camera and computational photography. I like to edit my photos using Adobe Lightroom and sometimes Photoshop. I organize my photos of friends and particular events into albums on Google Photos. I also print photos or collages that I like the most and frame them or put them on my fridge for memories. Check out some of my photos on my <a href={socials.instagram} target="_blank">Instagram</a>.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(photographyImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🏀 Sports</h3>
                                <p>
                                    I love playing sports, mostly basketball. I've played recreationally since around 2017. I like to play wing defense and shoot 3s or midrange/corner jumpshots. I also enjoy watching various sports, mainly the NBA, the Champions League and some NHL. I was a huge FC Barcelona fan around 2014-2019 era and Lionel Messi is my favorite player. I support the Toronto Raptors in the NBA to rep Toronto/Canada and also cheer for the Golden State Warriors and the Dallas Mavericks. Stephen Curry, Luka Doncic and Kyrie Irving are some of my favorite players.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(sportsImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🎧 Music</h3>
                                <p>
                                    Music is a big part of my life. I listen to a decent variety of genres, but mostly hip-hop, R&B and some pop. Some of my favorite artists include Drake, The Weeknd, Travis Scott, Dave, Justin Beiber and Ed Sheeran. Some of my all time favorite albums include, Views by Drake, After Hours by The Weeknd, ASTROWORLD by Travis Scott, NOT ALL HEROES WEAR CAPES and HEROES & VILLIANS by Metro Boomin. I went to The Weeknd concert in Toronto in 2022 as well as NAV's Never Sleep Tour in 2023 where Travis Scott made a special appearance. I also drove to Buffalo, NY to see a Drake concert in February 2024 alongside J. Cole. I always enjoy making playlists and discovering new music. Check out my <a href={socials.spotify} target="_blank">Spotify</a> profile to view my playlists and more.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(musicImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>📺 TV Shows/Movies</h3>
                                <p>
                                    In some of my free time, I like to watch TV shows and movies. I enjoy a variety of genres, but mostly watch action, comedy, drama and some sci-fi. My all time favorite TV show is Silicon Valley just because of how relatable it is. Some of my other favorites include How I Met Your Mother, Breaking Bad, Money Heist, Black Mirror and F.R.I.E.N.D.S.  The Dark Knight, Interstellar, The Avengers: Infinity War and Spiderman: No Way Home are some of my favorite movies.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(tvImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🎮 Gaming</h3>
                                <p>
                                    I sometimes like to game very casually on my PS5 my free time. I mostly play career mode or online friendlies on FIFA and NBA 2K. I've played through some open world single-player titles that I really enjoyed including Ghost of Tsushima, Spiderman, Spiderman: Miles Morales and I'm currently playing through Spiderman 2.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(gamingImages)} interval={Math.floor(Math.random() * 3000) + 2000} />
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🏞️ Being Outdoors</h3>
                                <p>
                                    And lastly my most beloved hobby is just being outdoors. I like to go for drives, walks, hikes, bike rides, and just explore new places. I also enjoy going by lakes, parks, and being in nature or taking a train downtown and simply biking through the city. I love taking photos and videos of the places I visit and share them with my friends and family. I also often go on trips with friends/family mostly within the country. So far, I've been to Montreal, Ottawa, Kingston, Calgary, Banff, Niagara Falls and Blue Mountain.
                                </p>
                            </div>
                            <div className={styles.imageSlider}>
                                <ImageSlider images={shuffle(outdoorsImages)} interval={Math.floor(Math.random() * 2000) + 1000} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    );
};
