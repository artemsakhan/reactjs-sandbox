import React from "react";
import {motion} from "framer-motion";
import UIConfig from "../../../UIConfig";
import GiftShape from "../../../Shapes/GiftShape";

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
                        ...imageStyle
                    }}
                    src={imgUrl}
                    alt=""
                />
                {isActive && <div style={activeIndicatorStyle}/>}
            </div>
            <div style={dialogContainerStyle}>
                <div style={nameStyle}>
                    {name}
                </div>
                <p style={{
                    ...messageTextStyle,
                    fontWeight: fontWeight,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: isPendingGift ? '2px' : '0px',
                }}>
                    {isPendingGift && (
                        <GiftShape width={20} height={20} fill={'#000'} style={{
                            marginRight: '3px',
                        }}/>
                    )}
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