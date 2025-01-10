import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";

const LottieAnimation = ({ width, height, animationData, shouldAnimate = true, loop = false, speed = 2, styles = {} }) => {
    const lottieContainer = useRef(null);

    useEffect(() => {
        const animation = lottie.loadAnimation({
            container: lottieContainer.current,
            renderer: 'svg',
            loop: loop,
            autoplay: false,
            animationData: animationData,
        });

        animation.setSpeed(speed);
        if (shouldAnimate) {
            animation.play();
        }

        return () => {
            animation.destroy();
        };
    }, [shouldAnimate, speed]);

    return (
        <div
            ref={lottieContainer}
            style={{
                width: width || 200,
                height: height || 200,
                ...styles,
            }}
        />
    );
};

export default LottieAnimation;
