import React from 'react';
import UIConfig from "../UIConfig";

const TextArea = ({ value, onChange, placeholder }) => {

    return (
        <textarea
            style={textAreaStyle}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

const textAreaStyle = {
    width: 'calc(100% - 55px)',
    height: '45px',
    padding: '14px',
    borderRadius: '10px',
    fontSize: '16px',
    resize: 'none',
    outline: 'none',
    fontFamily: UIConfig.Fonts.Primary,
    background: '#41414c',
    border: 'none',
    color: '#FFF',
};

export default TextArea;
