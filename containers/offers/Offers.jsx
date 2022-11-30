import React from 'react';
import offerStyles from './offers.module.css';

const Offers = () => {
    return (
        <div className={`${offerStyles.cyrilWebsite__offers} section__padding`}>
            <h1>Book a World Class Speaker Today...</h1>
            <div className={offerStyles.cyrilWebsite__offersList}>
                <div className={"cyrilWebsite__offers-keynote"}>
                    <h2>Keynote Address</h2>
                    <p>
                        Inspire teams and clients to action and increased productivity. Unforgettable stories that are years
                        in the crafting and an enthusiastic, lively delivery may just mark a turning point in your team’s
                        outlook.
                    </p>
                    <button type={"button"}>Learn More</button>
                </div>
                <div className={offerStyles.cyrilWebsite__offersCoaching}>
                    <h2>Coaching</h2>
                    <p>
                        Take the most important step in taking your speaking to the next level: Reaching out for assistance.
                        Be it for that one important presentation, speech contest, or life goal, let’s work together towards
                        measurable growth.
                    </p>
                    <button type={"button"}>Learn More</button>
                </div>
                <div className={"cyrilWebsite__offers-event-hosting"}>
                    <h2>Event Hosting</h2>
                    <p>
                        Running a conference, award ceremony, or any other show? Add a touch of ‘World Class’ through your
                        choice of event host.
                    </p>
                    <button type={"button"}>Learn More</button>
                </div>
                <div className={offerStyles.cyrilWebsite__offersTraining}>
                    <h2>Training</h2>
                    <p>
                        Discover the secrets of providing effective feedback, communicating to evoke, and writing memorable
                        speeches.
                    </p>
                    <button type={"button"}>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Offers;