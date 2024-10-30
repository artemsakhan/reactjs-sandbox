import React, {useEffect, useState} from "react";
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

const SendGiftButton = ({ onClick, isLoading, isLoaded }) => {
    return (
        <motion.div
            whileTap={!isLoading ? { scale: 0.9 } : {} }
            style={{
                ...sendGiftButtonStyle,
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.9 : 1,
            }}
            onClick={!isLoading ? onClick : null}
        >
            {isLoaded ? (
                <>
                    <span style={{fontSize: '17px'}}>Sent</span>
                    <CheckShape height={24} width={24} style={{ marginLeft: '10px'}}/>
                </>
            ) : (
                isLoading ? (
                    <LoadingAnimation width={70} height={70}/>
                ) : (
                    <>
                        <span style={{ fontSize: '17px' }}>Send a Gift</span>
                        <GiftShape
                            width="26px"
                            height="26px"
                            fill="#000"
                            style={{ marginLeft: '10px' }}
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
        }, 1500);
    }

    return (
        <div
            className="sendGiftContainer"
            style={containerStyle}
        >
            <div style={{ width: '150px', height: '150px', position: 'absolute', top: -48, right: -32}}>
                {isLoaded && (
                    <GiftAnimation width={150} height={150} shouldAnimate={isLoaded}/>
                )}
            </div>
            <div className="sendGiftText" style={textContainerStyle}>
                <p style={textStyle}>
                    Break<br/> the silence
                </p>
                <p style={subTextStyle}>
                    Leave a note with your gift
                </p>
            </div>
            <div className="sendGiftTextArea" style={textAreaStyle}>
                <TextArea placeholder={'Drop a sweet compliment here...'}/>
            </div>

            <SendGiftButton onClick={sendGift} isLoading={isLoading} isLoaded={isLoaded}/>
            <CloseRoundButton onClick={handleClose}/>
        </div>);
};

const containerStyle = {
    width: 'calc(100% - 50px)',
    left: '25px',
    top: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: UIConfig.Colors.BackgroundDark,
    borderRadius: '35px',
};

const textContainerStyle = {
    width: 'calc(100% - 35px)',
    marginTop: '20px',
    marginLeft: '7px',
};

const subTextStyle = {
    fontSize: '15px',
    letterSpacing: '0.1px',
    color: 'rgb(225 221 221)',
    margin: '4px 0px 20px',
    lineHeight: '16px',
    textAlign: 'left',
};

const textStyle = {
    fontSize: '14px',
    letterSpacing: '0.5px',
    color: '#FFF',
    margin: '0px 0px 5px 0px',
    lineHeight: '21px',
    textAlign: 'left',
    fontWeight: 600,
    textTransform: 'uppercase',
}

const textAreaStyle = {
    width: '100%',
};

const sendGiftButtonStyle = {
    width: 'calc(100% - 20px)',
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
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px', // Optional shadow
    fontWeight: 500,
    marginBottom: '10px',
    marginTop: '6px',
};

const closeButtonContainerStyle = {
    position: 'absolute',
    right: '-10px',
    top: '-40px',
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
