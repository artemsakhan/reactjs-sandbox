import React, {useEffect, useState} from "react";
import LottieAnimation from "../../../Other/LottieAnimation";
import giftSentAnimationData from "../../../Assets/gift_sent_v2.json";

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
                            boxShadow: 'rgba(191, 124, 238, 0.3) 0px 0px 11px 2px',
                        }: null)
                    }}
                    src={imgUrl}
                    alt=""
                />
                {isActive && <div style={activeIndicatorStyle}/>}
            </div>
            <div style={dialogContainerStyle}>
                <div style={nameStyle}>
                    {name}
                    {isPendingGift && (
                        <div style={specialIconContainerStyle}>
                            <LottieAnimation
                                width={35}
                                height={35}
                                shouldAnimate={false}
                                loop={false}
                                animationData={giftSentAnimationData}
                            />
                        </div>
                    )}
                </div>
                <p style={{
                    ...messageTextStyle,
                    fontWeight: fontWeight,
                }}>
                    {textContent}
                </p>
            </div>
            {(isUnread || isPendingGift || isNewMatch) && (
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