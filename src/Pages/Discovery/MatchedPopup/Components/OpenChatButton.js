import {motion} from "framer-motion";
import UIConfig from "../../../../UIConfig";
import CheckShape from "../../../../Shapes/CheckShape";
import LottieAnimation from "../../../../Other/LottieAnimation";
import loadingAnimationData from "../../../../Assets/loader_v2.json";
import React from "react";

const OpenChatButton = ({onClick, isLoading, isLoaded}) => {
    const disabled = isLoaded || isLoading;

    return (
        <motion.div
            whileTap={!disabled ? {scale: 0.9} : {}}
            style={buttonStyle}
            onClick={!disabled ? onClick : null}
        >
            {isLoaded ? (
                <>
                    <span style={{fontSize: '17px'}}>Sent</span>
                    <CheckShape height={24} width={24} style={{marginLeft: '10px'}} stroke={UIConfig.Colors.Primary}/>
                </>
            ) : (
                isLoading ? (
                    <LottieAnimation
                        width={40}
                        height={40}
                        animationData={loadingAnimationData}
                        shouldAnimate={true}
                        loop={true}
                    />
                ) : (
                    <>
                        <span style={{fontSize: '17px'}}>Open Chat</span>
                    </>
                )
            )}
        </motion.div>
    );
};


const buttonStyle = {
    width: 'calc(100% - 65px)',
    height: '50px',
    color: '#000',
    border: 'none',
    borderRadius: '45px',
    background: '#FFF',
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

export default OpenChatButton;