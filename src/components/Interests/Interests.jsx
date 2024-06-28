import React from "react";

import socials from "../../data/socials.json";
import styles from "./Interests.module.css";
import { getImageUrl } from "../../utils";

import LazyLoad from 'react-lazyload';


export const Interests = () => {
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
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/coding/c1.jpg")} alt="c1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/coding/c2.jpg")} alt="c2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/coding/c3.jpg")} alt="c3" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>📸 Photography</h3>
                                <p>
                                    I enjoy taking photos everywhere I go.  I like to capture moments, places, and people. I learned how to use a professional DSLR camera in high school and used it to learn different kinds of photography. Now I mostly take photos on my Pixel phone, which has an excellent camera and computational photography. I like to edit my photos using Adobe Lightroom and sometimes Photoshop. I like organize my photos of friends and particular events into albums on Google Photos. I also print photos or collages that I like the most and frame them or put them on my fridge for memories. Check out some of my photos on my <a href={socials.instagram} target="_blank">Instagram</a>.
                                </p>
                            </div>
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/photography/p1.jpg")} alt="c1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/photography/p2.jpg")} alt="c2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/photography/p3.jpg")} alt="c3" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🏀 Sports</h3>
                                <p>
                                    I love playing sports, mostly basketball. I've played mostly recreational since around 2017. I like play wing defense and shoot 3s or midrange/corner jumpshots. I also enjoy watching various sports, especially the NBA, the Champions League and some NHL. I was a huge FC Barcelona fan around 2014-2019 era and Lionel Messi is my favourite player. I support the Toronto Raptors in the NBA for the city and also cheer for the Golden State Warriors and the Dallas Mavericks. Stephen Curry, Luka Doncic and Kyrie Irving are some of my favourite players.
                                </p>
                            </div>
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/sports/s1.jpg")} alt="s1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/sports/s2.jpg")} alt="s2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/sports/s3.jpg")} alt="s3" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/sports/s4.jpg")} alt="s4" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/sports/s5.jpg")} alt="s5" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🎧 Music</h3>
                                <p>
                                    Music is a big part of my life. I listen to a decent variety of genres, but mostly hip-hop, R&B and some pop. Some of my favourite artists include Drake, The Weeknd, Travis Scott, Dave, Justin Beiber and Ed Sheeran. Some of all time favourite albums include, Views by Drake, After Hours by The Weeknd, ASTROWORLD by Travis Scott, NOT ALL HEROES WEAR CAPES and HEROES & VILLIANS by Metro Boomin. I've been to The Weeknd concert in Toronto in 2022 as well as NAV's Never Sleep Tour in 2023 where Travis Scott made a special appearance. I also drove to Buffalo, NY to see a Drake concert in February 2024 alongside J. Cole. I always enjoy making playlists and discovering new music. Check out my <a href={socials.spotify} target="_blank">Spotify</a> profile to view playlists and more.
                                </p>
                            </div>
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/music/m1.jpg")} alt="m1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/music/m2.jpeg")} alt="m2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/music/m3.png")} alt="m3" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/music/m4.png")} alt="m4" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/music/m5.jpeg")} alt="m5" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>📺 TV Shows/Movies</h3>
                                <p>
                                    In some of my free time, I like to watch TV shows and movies. I enjoy a variety of genres, but mostly watch action, comedy, drama and sci-fi. My all time favourite TV show is Silicon Valley and some of my other favourites include How I Met Your Mother, Breaking Bad, Money Heist, Black Mirror and F.R.I.E.N.D.S. Some of my favourite movies include The Dark Knight, Interstellar, The Avengers: Infinity War and Spiderman: No Way Home.
                                </p>
                            </div>
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t1.jpg")} alt="t1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t2.jpg")} alt="t2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t3.jpg")} alt="t3" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t4.jpg")} alt="t4" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t5.jpg")} alt="t5" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/tv/t6.jpg")} alt="t6" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                    <li className={styles.interestItem}>
                        <div className={styles.interestItemContent}>
                            <div className={styles.interestItemText}>
                                <h3>🎮 Gaming</h3>
                                <p>
                                    I like to game very casually on my PS5 in some of my free time. I mostly play career mode or online friendlies FIFA and NBA 2K. I've played through some open world that I really enjoyed including Ghost of Tsushima, Spiderman, Spiderman: Miles Morales and I'm currently playing Spiderman 2.
                                </p>
                            </div>
                            <div className={styles.interestItemImages}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/gaming/g1.jpg")} alt="g1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/gaming/g2.jpg")} alt="g2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/gaming/g3.jpg")} alt="g3" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/gaming/g4.jpg")} alt="g4" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/gaming/g5.jpg")} alt="g5" className={styles.image} />
                                </LazyLoad>

                            </div>
                        </div>
                    </li>
                    <li className={`${styles.interestItem} ${styles.interestItemOutdoors}`}>
                        <div className={`${styles.interestItemContent} ${styles.interestItemContentOutdoors}`}>
                            <div className={`${styles.interestItemText} ${styles.interestItemTextOutdoors}`}>
                                <h3>🏞️ Being Outdoors</h3>
                                <p>
                                    And lastly my most common hobby is just being outdoors. I like to go for drives, walks, hikes, bike rides, and just explore new places. I also enjoy going by lakes, parks, and just being in nature or taking a train downtown and biking through parks and buildings. I love taking photos and videos of the places I visit and share them with my friends and family. I also like to take trips with friends/family mostly within the country. So far, I've been to Montreal, Ottawa, Kingston, Calgary, Banff, Niagara Falls and Blue Mountain.
                                </p>
                            </div>
                            <div className={`${styles.interestItemImages} ${styles.interestItemImagesOutdoors}`}>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o1.jpg")} alt="o1" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o2.jpg")} alt="o2" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o3.jpg")} alt="o3" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o4.jpg")} alt="o4" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o5.jpg")} alt="o5" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o6.jpg")} alt="o6" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o7.jpg")} alt="o7" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o8.jpg")} alt="o8" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o9.jpg")} alt="o9" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o10.jpg")} alt="o10" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o11.jpg")} alt="o11" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o12.jpg")} alt="o12" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o13.jpg")} alt="o13" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o14.jpg")} alt="o14" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o15.jpeg")} alt="o15" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o16.jpg")} alt="o16" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o17.jpg")} alt="o17" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o18.jpg")} alt="o18" className={styles.image} />
                                </LazyLoad>
                                <LazyLoad height={200} offset={100}>
                                    <img src={getImageUrl("interests/outdoors/o19.jpg")} alt="o19" className={styles.image} />
                                </LazyLoad>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    );
};
