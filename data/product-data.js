import scriptEval from '../public/assets/img/script_eval.png';
import vidEval from '../public/assets/img/video_eval.png';
import sixtyDay from '../public/assets/img/60_day_coach.png';

const products = {
    1: {
        img: scriptEval,
        title: "Script Evaluation",
        description: "Receive written feedback on a script. I evaluate elements of clarity, coherence, storytelling, " +
            "consistency with the purpose, emotional impact and language musicality. Feedback is ready within 1 week.",
        price: 1,
        instructions:
            <ul>
                <li>Upon checkout, you will be redirected to the submissions page</li>
                <li>The submissions page contains detailed instructions on what to include in your final submission</li>
                <li>
                    In your submission, please remember to include details about the target audience and specific
                    areas in need of feedback.
                </li>
                <li>Please complete all submissions on the same day as payments.</li>
            </ul>
    },
    2: {
        img: vidEval,
        title: "Video Evaluation",
        description: "Receive written evaluation of a recorded performance. In addition to scripting elements, I " +
            "evaluate stage presence, props, and, especially, audience connection. Feedback is ready within 1 week " +
            "and can be further discussed in a virtual meeting.",
        price: 150,
        instructions:
            <ul>
                <li>
                    Before checking out, <i>please ensure you've uploaded your video to <b>YouTube</b>.</i> YouTube viewership can be
                    set to unlisted so that only those with a link can view the video.
                </li>
                <li>Upon checkout, you will be redirected to the submissions page</li>
                <li>The submissions page contains detailed instructions on what to include in your final submission</li>
                <li>
                    In your submission, please remember to include details about the target audience and specific
                    areas in need of feedback.
                </li>
                <li>Please complete all submissions on the same day as payments.</li>
            </ul>
    },
    3: {
        img: sixtyDay,
        title: "10-Session Bundle",
        description: "Receive personalized coaching from me over the course of ten 1-Hour sessions. " +
            "During this time we will work on crafting a compelling speech, and meticulously " +
            "planning its delivery. Ideal for individuals who need support developing a roadmap " +
            "from speech inception to delivery.",
        price: 1500,
        instructions:
            <ul>
                <li>Upon checkout, you will be redirected to Cyril's online booking platform. Please use this page to book your first session.</li>
                <li>The first session will be used as the basis for organizing subsequent sessions</li>
                <li>
                    Please think in advance what goals you'd like to meet and the specific value you hope to obtain from dedicated coaching by Cyril
                </li>
                <li>Please complete all bookings on the same day as payments.</li>
            </ul>
    }
};

export default products;