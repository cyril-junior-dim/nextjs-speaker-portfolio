import React from 'react';
import { Article } from '../../components';
import { Forbes_blog, Wroclaw_blog, NewsDay_blog, PWr_blog, TVN_blog } from '../../data/news-articles';
import styles from './blog.module.css';

const Blog = () => {
    return (
        <div className={`${styles.news} section__padding`} id={"blog"}>
            <div className={styles.newsHeading}>
                <h1> Cyril in The News </h1>
            </div>
            <div className={styles.newsContainer}>
                <div className={styles.newsContainer_GroupA}>
                    <Article
                        imgUrl={Forbes_blog}
                        date={"Sep 14 2022"}
                        title={"Four Ways To Attract Clients By Speaking Like A Toastmasters World Champion"}
                        content={"For agency owners, business coaches and strategic consultants, it pays to be a better" +
                            " speaker. Public speaking is clearly the top strategy for attracting new clients." +
                            "So, take a lesson from Cyril Junior Dim, a 24-year-old Zimbabwean software engineer living" +
                            " in Wroclaw, Poland, who won the Toastmasters World Championship of Public Speaking on " +
                            "Saturday, August 20 in Nashville.\n" +
                            "\n" +
                            "Dim reached the championship level after several eliminating rounds that began more than " +
                            "six months ago with 30,000 participants from 144 countries. (Watch Dim’s inspiring winning " +
                            "speech, “Ndini,” here.)\n" +
                            "\n" +
                            "After his win, Dim shared four tips that can help you become a better speaker on the stage," +
                            " on Zoom and on podcasts..."}
                        link={"https://www.forbes.com/sites/henrydevries/2022/09/14/four-ways-to-attract-clients-by-" +
                            "speaking-like-a-toastmasters-world-champion/"}
                    />
                </div>
                <div className={styles.newsContainer_GroupB}>
                    <Article
                        imgUrl={Wroclaw_blog}
                        date={"Aug 30 2022"}
                        title={"A graduate of Wrocław University of Science and Technology has just become the World " +
                            "Champion of Public Speaking. You will be surprised where he works and what he does"}
                        content={"Cyrili Junior Dim zwyciężył na World Champion of Public Speaking 2022 w USA..."}
                        link={"https://www.wroclaw.pl/dla-mieszkanca/world-champion-of-public-speaking-cyril-junior-" +
                            "dim-keynote-speaker"}
                    />
                    <Article
                        imgUrl={NewsDay_blog}
                        date={"Aug 31 2022"}
                        title={"A toast to Zim public speaking champion"}
                        content={"ON August 20, through a motivational speech titled Ndini, Cyril Junior Dim won the " +
                            "Toastmasters World Championship Public Speaking for 2022. This was a remarkable " +
                            "achievement, not least because the competition involved 30 000 participants from 144 " +
                            "countries..."}
                        link={"https://www.newsday.co.zw/opinion-amp-analysis/article/17033/a-toast-to-zim-public-" +
                            "speaking-champion"}
                    />
                    <Article
                        imgUrl={PWr_blog}
                        date={"Aug 26 2022"}
                        title={"Our graduate becomes world champion in public speaking"}
                        content={"Our Zimbabwe-born graduate Cyril came to Wrocław in 2018 to..."}
                        link={"https://pwr.edu.pl/en/university/news/our-graduate-becomes-world-champion-in-public-" +
                            "speaking-10577.html"}
                    />
                    <Article
                        imgUrl={TVN_blog}
                        date={"Sep 19 2022"}
                        title={"How to perform in public? The best orator in the world revealed his ways"}
                        content={"Cyril Junior Dim won the world championship in public speaking. The master of..."}
                        link={"https://dziendobry.tvn.pl/styl-zycia/jak-wystepowac-publicznie-sposoby-mistrza-swiata" +
                            "-kim-jest-cyril-junior-dim-6119821"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;