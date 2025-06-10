import React from "react";
import TwoHeartsShape from "../../../Shapes/TwoHeartsShape";
import GiftNewShape from "../../../Shapes/GiftNewShape";
import FireMultiShape2 from "../../../Shapes/FireMultiShape2";
import FireMultiShape from "../../../Shapes/FireMultiShape";

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
    textContent = "У захваті"
  } else if (isNewMatch) {
    textContent = "Це матч"
  } else {
    textContent = lastMessageText
  }

  return (
    <div style={containerStyle} onClick={() => {
      isPendingGift && openClaimGift();
    }}>
      <div style={imageContainerStyle}>
        <div style={{
          width: '70px',
          height: '70px',
          borderRadius: '35px',
          marginLeft: '7px',
          overflow: "hidden",
          position: 'relative',
          ...(isPendingGift ? {
            boxShadow: 'rgba(191, 124, 238, 0.3) 0px 0px 11px 2px',
          } : null)
        }}>
          <img
            style={{
              ...imageStyle,

            }}
            src={imgUrl}
            alt=""
          />
        </div>

        {isActive && <div style={activeIndicatorStyle}></div>}
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
            <>
              <FireMultiShape
                width={22}
                height={22}
                // fill={'#735490'}
              />
              &nbsp;
            </>
          )}
          {
            isNewMatch && (
              <>
                <TwoHeartsShape
                  width={24}
                  height={24}
                  fill={'#bc4141'}
                />
                &nbsp;
              </>
            )
          }
          {textContent}
        </p>
      </div>
      {(isUnread || isNewMatch || isPendingGift) && (
        <div style={unreadIndicatorStyle}/>
      )}
    </div>
  )
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
  border: '3px solid rgb(245 245 245)',
}
const imageStyle = {
  width: '70px',
  height: '70px',
  borderRadius: '35px',
  objectFit: 'cover',
}

export default DialogItem;