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

    const outdoorsImages = Array.from({ length: 25 }, (_, i) => 
        getImageUrl(`interests/outdoors/o${i + 1}.jpg`)
    );

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
                                    First and foremost, I love coding. Beyond work and school, I genuinely enjoy building projects, exploring new technologies, and solving problems just for the fun of it. You can check out some of my most meaningful projects <a href="#projects">above</a>, or visit my <a href={socials.github} target="_blank">GitHub</a> to see more of what I’ve been working on.
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
                                    I love taking photos wherever I go—capturing moments, places, and people is something that's always brought me joy. I first learned how to use a professional DSLR camera back in high school, which gave me a solid foundation in different types of photography. These days, I mostly shoot with my Pixel phone, which has an incredible camera and powerful computational photography features.
                                    I edit my photos with Adobe Lightroom, or just light touch ups in Google Photos, to bring out the best in each shot. I organize photos of friends and special events into albums on Google Photos, and I like to print my favorites—sometimes as collages—to frame or put into a physical photo album as keepsakes. You can check out some of my own photos on my <a href={socials.instagram} target="_blank">Instagram</a>.
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
                                    I've always enjoyed playing sports, mainly basketball. I've been playing recreationally since around 2017, usually focusing on wing defense and shooting threes or midrange and corner jump shots. I'm also a big fan of watching sports—mainly the NBA, the Champions League, and occasionally some NHL.
                                    Back in the 2014-2019 era, I was a huge FC Barcelona fan, and Lionel Messi has always been my favorite player. In the NBA, I rep the Toronto Raptors to support my city, but I also cheer for the Golden State Warriors. Some of my favorite players include Stephen Curry, Luka Dončić, and Kyrie Irving.
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
                                    Music plays a huge role in my life. While I listen to a fairly wide range of genres, I mostly gravitate toward hip-hop, R&B, and a bit of pop. Some of my favorite artists include Drake, The Weeknd, Travis Scott, Dave, Ed Sheeran, and Coldplay. Here are a few of my all-time favorite albums:
                                    <ul className={styles.albumList}>
                                        <li>Dave - We're All Alone in This Together</li>
                                        <li>Drake - Views</li>
                                        <li>The Weeknd - Hurry Up Tomorrow</li>
                                        <li>The Weeknd - After Hours</li>
                                        <li>Travis Scott - ASTROWORLD</li>
                                        <li>Metro Boomin - NOT ALL HEROES WEAR CAPES</li>
                                    </ul>
                                    I had the chance to see The Weeknd live in Toronto in 2022 and attended NAV's Never Sleep Tour in 2023, where Travis Scott made a surprise appearance. In February 2024, I even drove down to Buffalo, NY to catch a Drake concert featuring J. Cole. I love curating playlists and discovering new music. Below are a couple of my current heavy rotation playlists. You can also check out my full collection on <a href={socials.spotify} target="_blank">Spotify</a>.

                                    <iframe title="hiphop" style={{ borderRadius: '12px', marginTop: '25px' }} src="https://open.spotify.com/embed/playlist/2oVUUmZ7uxboD9GGx07rVe?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                                    <iframe title="pop" style={{ borderRadius: '12px', marginTop: '25px' }} src="https://open.spotify.com/embed/playlist/0zDsO5CySDQlgYJoTymlil?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
                                    In some of my free time, I enjoy watching TV shows and movies across a variety of genres, with a preference for action, comedy, drama, and sci-fi. My all-time favorite TV show is Silicon Valley because of how relatable it is to my career. Some of my other favorites include How I Met Your Mother, Breaking Bad, Money Heist, and Black Mirror. As for movies, My all-time favorite movie is Interstellar. I also love The Dark Knight trilogy, The Avengers: Infinity War, and Spider-Man: No Way Home.
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
                                    I occasionally enjoy casual gaming on my PS5 during my free time. I mostly play career mode or online friendlies in FIFA or NBA 2K. I've also played and thoroughly enjoyed some open-world single-player titles, including Ghost of Tsushima, Spider-Man, Spider-Man: Miles Morales, and I'm currently making my way through Spider-Man 2.
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
                                    And lastly, one of my favorite hobbies is just spending time outdoors. I enjoy going for drives, walks, hikes, and bike rides, and I love exploring new places. Whether it's relaxing by a lake, strolling through a park, immersing myself in nature, or biking through the city after taking the train downtown—I find joy in it all. I also love capturing photos and videos of the places I visit and sharing them with friends and family. I often travel with loved ones, mostly within Canada. So far, I've been to Montreal, Ottawa, Kingston, Calgary, Banff, Niagara Falls, and Blue Mountain. In early 2025, I also had the chance to travel to Europe, where I visited London, Paris, and drove through some countryside in Northern England.
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
