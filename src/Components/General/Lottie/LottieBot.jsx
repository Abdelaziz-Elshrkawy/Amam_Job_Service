import Lottie from 'lottie-react';

import './Lottie.css';
import lottieBot from '../../../assets/Animation -bot.json';

function LottieBot() {
    return (
        <div id="lottie-bot-div">
            <Lottie animationData={lottieBot} loop autoplay id="lottie-bot" />
        </div>
    );
}

export default LottieBot;
