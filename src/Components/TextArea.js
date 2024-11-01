import React, {useEffect, useRef} from 'react';
import UIConfig from "../UIConfig";

const TextArea = ({ value, onChange, placeholder, disabled }) => {
    return (
        <textarea
            style={textAreaStyle}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

const textAreaStyle = {
    width: 'calc(100% - 63px)',
    height: '35px',
    padding: '14px',
    fontSize: '16px',
    resize: 'none',
    outline: 'none',
    fontFamily: UIConfig.Fonts.Primary,
    background: 'rgb(43 43 45)',
    border: 'none',
    color: '#FFF',
    borderRadius: '10px',
    lineHeight: '20px',
};

export default TextArea;
