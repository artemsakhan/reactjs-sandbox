// src/LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/loading.json'; // Import your Lottie JSON file

const LoadingAnimation = ({width, height}) => {
    return (
        <div>
            <Lottie
                options={{
                    loop: true,
                    autoplay: true,
                    animationData,
                }}
                width={width}
                height={height}
            />
        </div>
    );
};

export default LoadingAnimation;
