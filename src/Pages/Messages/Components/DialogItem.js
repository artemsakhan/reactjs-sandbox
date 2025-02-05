import React from "react";
import {motion} from "framer-motion";
import UIConfig from "../../../UIConfig";
import GiftShape from "../../../Shapes/GiftShape";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";

const DialogItem = ({item, openClaimGift}) => {
    const {
        name,
        imgUrl,
        lastMessageText,
        isUnread,
        isNewMatch,
        isPendingGift,
        isActive,
    } = item;

    var fontWeight = 300;

    if (isUnread || isNewMatch || isPendingGift) {
        fontWeight = 600;
    }

    var textContent = '';

    if (isPendingGift) {
        textContent = "You've got a gift"
    } else if (isNewMatch) {
        textContent = "New match"
    } else {
        textContent = lastMessageText
    }

    return (
        <div style={containerStyle} onClick={() => {
            isPendingGift && openClaimGift();
        }}>
            <div style={imageContainerStyle}>
                <img
                    style={{
                        ...imageStyle,
                        ...(isPendingGift ? {
                            // boxShadow: 'rgba(191, 124, 238, 0.3) 0px 0px 11px 2px',
                        } : null)
                    }}
                    src={imgUrl}
                    alt=""
                />
                {isActive && <div style={activeIndicatorStyle}/>}
                {isPendingGift && (
                    <div style={{
                        position: 'absolute',
                        width: '30px',
                        height: '30px',
                        borderRadius: '17px',
                        background: '#000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        right: '7px',
                        top: '42px',
                    }}>
                        <DiamondFillShape width={18} height={18} fillColor={'#FFF'} style={{
                            marginTop: '2px',
                        }}/>
                        {/*<GiftShape width={18} height={18} fill={'#FFF'}/>*/}
                    </div>
                )}
            </div>
            <div style={dialogContainerStyle}>
                <div style={nameStyle}>
                    {name}
                    {isPendingGift && (
                        <></>
                        // <div style={specialIconContainerStyle}>
                        //     <LottieAnimation
                        //         width={35}
                        //         height={35}
                        //         shouldAnimate={false}
                        //         loop={false}
                        //         animationData={giftSentAnimationData}
                        //     />
                        // </div>
                    )}
                </div>
                <p style={{
                    ...messageTextStyle,
                    fontWeight: fontWeight,
                }}>
                    {textContent}
                </p>
            </div>
            {isPendingGift && (
                <>
                    <motion.div style={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        background: '#000',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <span style={{
                            fontSize: '12px',
                            padding: '8px 15px',
                            fontWeight: 'bold',
                            color: '#FFF',
                            fontFamily: UIConfig.Fonts.Primary,
                        }}>
                            View
                        </span>
                    </motion.div>
                </>
            )}
            {(isUnread || isNewMatch) && (
                <div style={unreadIndicatorStyle}/>
            )}
        </div>
    )
}

const specialIconContainerStyle = {
    position: 'absolute',
    width: '35px',
    height: '35px',
    top: '-7px',
    right: '-31px',
}
const unreadIndicatorStyle = {
    position: 'absolute',
    right: '20px',
    top: '35px',
    width: '10px',
    height: '10px',
    background: '#000',
    borderRadius: '5px',
}

const nameStyle = {
    padding: '2px',
    margin: '0px',
    fontWeight: 500,
    position: 'relative',
}

const messageTextStyle = {
    padding: '1px 2px',
    margin: '0px',
    fontWeight: 300,
    fontSize: '14px',
}

const containerStyle = {
    width: '100%',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '12px',
    position: 'relative',
}

const dialogContainerStyle = {
    width: 'calc(100% - 100px)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    position: 'relative'
}

const imageContainerStyle = {
    width: '100px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
}

const activeIndicatorStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '10px',
    background: '#2fba2f',
    position: 'absolute',
    bottom: '3px',
    right: '11px',
    border: '3px solid #FFF',
}

const imageStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '35px',
    marginLeft: '7px',
    objectFit: 'cover',
}

export default DialogItem;