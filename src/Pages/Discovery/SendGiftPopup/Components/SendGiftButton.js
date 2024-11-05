import {motion} from "framer-motion";
import UIConfig from "../../../../UIConfig";
import CheckShape from "../../../../Shapes/CheckShape";
import LottieAnimation from "../../../../Other/LottieAnimation";
import loadingAnimationData from "../../../../Assets/loader_v2.json";
import GiftShape from "../../../../Shapes/GiftShape";
import React from "react";

const SendGiftButton = ({onClick, isLoading, isLoaded}) => {
    const disabled = isLoaded || isLoading;

    return (
        <motion.div
            whileTap={!disabled ? {scale: 0.9} : {}}
            style={{
                ...sendGiftButtonStyle,
                cursor: !disabled ? 'pointer' : 'not-allowed',
                opacity: isLoading ? 0.5 : 1,
                ...(isLoaded ? {
                    color: UIConfig.Colors.Primary,
                    background: 'none',
                } : null)
            }}
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
                        <span style={{fontSize: '17px'}}>Send a Gift</span>
                        <GiftShape
                            width="26px"
                            height="26px"
                            fill="#000"
                            style={{marginLeft: '10px'}}
                        />
                    </>
                )
            )}
        </motion.div>
    );
};


const sendGiftButtonStyle = {
    width: 'calc(100% - 35px)',
    height: '50px',
    color: 'black',
    border: 'none',
    borderRadius: '45px',
    background: UIConfig.Colors.Primary,
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

export default SendGiftButton;