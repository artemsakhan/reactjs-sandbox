import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../Assets/gift_sent.json'; // Import your Lottie JSON file

const GiftAnimation = ({ width, height, shouldAnimate }) => {
    return (
        <div>
            <Lottie
                options={{
                    animationData,
                    loop: false,
                    autoplay: true, // Disable autoplay
                }}
                width={width}
                height={height}
            />
        </div>
    );
};

export default GiftAnimation;
