import React, {useEffect, useState} from "react";
import UIConfig from "../../../../UIConfig";
import ProfileSimpleShape from "../../../../Shapes/ProfileSimpleShape";

const SenderBlock = ({style}) => {
    return (
        <div style={{...containerStyle, ...style}}>
            <div style={imageContainerStyle}>
                <img
                    style={imageStyle}
                    src={'https://kyivdate.app/photos/MXBLOrA/b0y0d.624abf5ef198c.120x120.webp'}
                    alt=""
                />
                <ProfileSimpleShape
                    width={15}
                    height={15}
                    fillColor={'#fff'}
                    style={{
                        position: 'absolute',
                        bottom: '-1px',
                        right: '8px',
                        background: '#251832',
                        borderRadius: '210px',
                        padding: '5px',
                    }}
                />
            </div>
        </div>
    )
}

const nameStyle = {
    padding: '2px',
    margin: '0px',
    fontWeight: 600,
    fontFamily: UIConfig.Fonts.Primary,
    lineHeight: '14px',
    position: 'relative',
    color: '#FFF',
    fontSize: '19px',
}

const messageTextStyle = {
    padding: '1px 2px',
    margin: '0px',
    fontWeight: 300,
    fontSize: '14px',
    color: '#FFF',
}

const containerStyle = {
    width: '180px',
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

const imageStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '35px',
    marginLeft: '7px',
    objectFit: 'cover',
}

export default SenderBlock;