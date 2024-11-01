import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../Assets/heart_exploading.json';

const LottieAnimation = ({ width, height, shouldAnimate, speed = 1 }) => {
    const lottieContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: lottieContainer.current, // container div
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData,
        });

        // Set speed and play if shouldAnimate is true
        animation.setSpeed(speed);
        if (shouldAnimate) {
            animation.play();
        }

        return () => {
            animation.destroy(); // Clean up on unmount
        };
    }, [shouldAnimate, speed]); // Re-run if shouldAnimate or speed changes

    return (
        <div
            ref={lottieContainer}
            style={{ width: width || 200, height: height || 200 }}
        />
    );
};

export default LottieAnimation;
