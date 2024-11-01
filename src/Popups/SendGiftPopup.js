import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import GiftShape from "../Shapes/GiftShape";
import TextArea from "../Components/TextArea";
import UIConfig from "../UIConfig";
import GiftAnimation from "../Components/GiftAnimation";
import LoadingAnimation from "../Components/LoadingAnimation";
import CheckShape from "../Shapes/CheckShape";

const CloseRoundButton = ({onClick}) => {
    return (
        <motion.div
            whileTap={{scale: 0.8}}
            onTap={onClick}
            className="sendGiftCloseButton"
            style={closeButtonContainerStyle}
        >
            <motion.div>
                <i className="fa-solid fa-xmark" style={closeButtonStyle}/>
            </motion.div>
        </motion.div>
    )
}

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
                    <LoadingAnimation width={40} height={40}/>
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

const SendGiftPopup = ({handleClose}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const sendGift = () => {
        setIsLoading(!isLoading);
        setTimeout(() => {
            setIsLoaded(true);
            setIsLoading(false);

            setTimeout(handleClose, 1200)
        }, 1500);
    }

    return (
        <div
            className="sendGiftContainer"
            style={containerStyle}
        >
            <div className="sendGiftContent" style={contentStyle}>
                <div style={giftContainerStyle}>
                    <GiftAnimation width={120} height={120} shouldAnimate={isLoaded}/>
                </div>
                <div className="sendGiftText" style={textContainerStyle}>
                    <p style={textStyle}>
                        Break the silence
                    </p>
                    <p style={subTextStyle}>
                        Leave a note with your gift
                    </p>
                </div>
                {!isLoaded && (
                    <div className="sendGiftTextArea" style={textAreaStyle}>
                        <TextArea
                            placeholder={'Drop a sweet compliment here...'}
                            disabled={isLoading || isLoaded}
                        />
                    </div>
                )}
                <SendGiftButton onClick={sendGift} isLoading={isLoading} isLoaded={isLoaded}/>
                <CloseRoundButton onClick={handleClose}/>
            </div>
        </div>);
};

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 0px)',
    top: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: UIConfig.Colors.BackgroundDark,
    borderTopLeftRadius: '35px',
    borderTopRightRadius: '35px',
};

const contentStyle = {
    width: 'calc(100% - 30px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const giftContainerStyle = {
    width: '120px',
    height: '120px',
    position: 'absolute',
    top: 'calc(8% - 60px)',
    right: 'calc(50% - 60px)',
};

const textContainerStyle = {
    width: 'calc(100% - 35px)',
    marginTop: '110px',
};

const subTextStyle = {
    fontSize: '16px',
    color: 'rgb(223 218 218)',
    margin: '0px 0px 15px 0px',
    textAlign: 'center',
};

const textStyle = {
    fontSize: '20px',
    letterSpacing: '0.5px',
    color: '#FFF',
    margin: '0px 0px 10px 0px',
    lineHeight: '21px',
    textAlign: 'center',
    fontWeight: 500,
    fontFamily: UIConfig.Fonts.Primary,
}

const textAreaStyle = {
    width: '100%',
    marginBottom: '15px',
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

const closeButtonContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    borderRadius: '35px',
}

const closeButtonStyle = {
    width: '45px',
    height: '45px',
    color: '#FFF',
    border: 'none',
    borderRadius: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    cursor: 'pointer',
    fontSize: '24px',
};

export default SendGiftPopup;
