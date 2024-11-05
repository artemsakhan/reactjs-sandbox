import React from 'react';
import UIConfig from "../../../../UIConfig";
import ChatOutlineShape from "../../../../Shapes/ChatOutlineShape";

const Label = ({ text }) => {
    return (
        <div style={containerStyle}>
            <div style={itemStyle}>
                <span style={textStyle}>{text}</span>
                <ChatOutlineShape width={20} height={20} fillColor={'#000'}/>
            </div>
        </div>
    );
};

const containerStyle = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    right: '15px',
    top: '15px',
};

const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '9px',
    borderRadius: '28px',
    backgroundColor: UIConfig.Card.Feature.background,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const textStyle = {
    ...UIConfig.Card.Feature,
    fontFamily: 'Roboto, sans-serif',
    marginRight: '5px',
    letterSpacing: '0.9px',
};

export default Label;
