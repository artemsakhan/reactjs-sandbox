import CloseButton from "./Components/CloseButton";
import React from "react";
import UIConfig from "../../../UIConfig";
import AcceptGiftButton from "./Components/AcceptGiftButton";
import RejectGiftButton from "./Components/RejectGiftButton";
import SkipButton from "./Components/SkipButton";
import LottieAnimation from "../../../Other/LottieAnimation";
import loadingAnimationData2 from "../../../Assets/you_got_gift_v3.json";

const ClaimGiftPopup = ({handleClose}) => {
    return (
        <div style={containerStyle}>

            <div style={photosContainerStyle}>
                <LottieAnimation
                    width={570}
                    height={570}
                    animationData={loadingAnimationData2}
                    shouldAnimate={true}
                    loop={true}
                    speed={1}
                />
            </div>
            <div style={actionButtonsContainerStyle}>
                <div style={textContainerStyle}>
                    <p style={textStyle}>
                        Alice
                    </p>
                    <p style={textStyle}>
                        Sent You a Gift
                    </p>

                    <p style={subTextStyle}>
                        Accept and see what she's got you.
                    </p>
                </div>
                <AcceptGiftButton/>
                <RejectGiftButton/>
                <SkipButton handleClose={handleClose}/>
            </div>
            <CloseButton handleClose={handleClose}/>
        </div>
    )
}

const photosContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '45%',
    position: 'absolute',
    top: '-20px',
    pointerEvents: 'none',
    marginLeft: '20px',
};

const actionButtonsContainerStyle = {
    position: 'absolute',
    bottom: '30px',
    width: 'calc(100% - 65px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 110px)',
    marginTop: '110px',
    borderTopLeftRadius: UIConfig.Card.Content.borderRadius,
    borderTopRightRadius: UIConfig.Card.Content.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(66 45 85) 0%, rgb(19, 27, 24) 90%)',
};

const textContainerStyle = {
    width: 'calc(100% - 10px)',
    marginBottom: '15px',
};

const subTextStyle = {
    fontSize: '16px',
    color: 'rgb(223 218 218)',
    margin: '10px 0px 15px 0px',
    textAlign: 'center',
};

const textStyle = {
    fontSize: '30px',
    color: '#fff',
    margin: '0px 0px 0px 0px',
    textAlign: 'center',
    fontWeight: 600,
    fontFamily: UIConfig.Fonts.Primary,
}

export default ClaimGiftPopup;