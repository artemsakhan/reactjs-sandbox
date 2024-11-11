// src/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/heart_exploading.json';

const HeartExploadingLottie = ({width, height, shouldAnimate}) => {
    return (
        <div>
            <Lottie
                options={{
                    loop: false,
                    autoplay: shouldAnimate,
                    animationData,
                }}
                width={width}
                height={height}
            />
        </div>
    );
};

export default HeartExploadingLottie;