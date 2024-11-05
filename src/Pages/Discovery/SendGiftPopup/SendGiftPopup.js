import React, {useState} from "react";
import UIConfig from "../../../UIConfig";
import giftSentAnimationData from '../../../Assets/gift_sent_v2.json';
import LottieAnimation from "../../../Other/LottieAnimation";
import SendGiftButton from "./Components/SendGiftButton";
import CloseRoundButton from "./Components/CloseButton";
import TextArea from "./Components/TextArea";


const SendGiftPopup = ({handleClose, handleSend}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const sendGift = () => {
        setIsLoading(true);

        handleSend().then(() => {
            setTimeout(() => {
                setIsLoaded(true);
                setIsLoading(false);
                window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid')

                setTimeout(() => handleClose(true), 1200)
            }, 400);
        })
    }

    return (
        <div
            className="sendGiftContainer"
            style={containerStyle}
        >
            <div className="sendGiftContent" style={contentStyle}>
                <div style={giftContainerStyle}>
                    <LottieAnimation
                        width={120}
                        height={120}
                        shouldAnimate={isLoaded}
                        loop={false}
                        animationData={giftSentAnimationData}
                    />
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
    backgroundImage: UIConfig.Colors.BackgroundDark,
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


export default SendGiftPopup;
