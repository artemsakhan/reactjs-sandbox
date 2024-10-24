import React from 'react';

const styles = {
    textArea: {
        width: '70%',
        height: '30px',
        padding: '15px',
        borderRadius: '20px',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
        border: '1px solid #ccc',
        fontSize: '16px',
        resize: 'none',
        outline: 'none',
    },
    textAreaFocus: {
        // boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
};

const TextArea = ({ value, onChange, placeholder }) => {

    return (
        <textarea
            style={styles.textArea}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default TextArea;
