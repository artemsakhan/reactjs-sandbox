import React from "react";
import LottieAnimation from "../../../../Other/LottieAnimation";
import loadingAnimationData from "../../../../Assets/premium_background.json";

const PremiumButton = () => {
    return (
        <div style={buttonStyle}>
            <span style={{
                fontSize: '17px',
                color: '#FFF',
                fontWeight: 600,
                position: 'absolute',
                zIndex: 1,
            }}>Get Premium</span>

            <LottieAnimation
                width={'100%'}
                height={'100%'}
                animationData={loadingAnimationData}
                shouldAnimate={true}
                loop={false}
                speed={0.8}
                styles={{
                    position: 'absolute',
                }}
            />
        </div>
    );
};


const buttonStyle = {
    position: 'absolute',
    bottom: '20px',
    // left: '25px',
    width: '100%',
    height: '50px',
    color: '#000',
    border: 'none',
    borderRadius: '45px',
    background: 'none',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    fontWeight: 500,
    marginBottom: '10px',
};

export default PremiumButton;