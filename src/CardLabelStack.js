import React from 'react';

const CardLabelStack = ({ aboutMe }) => {
    return (
        <div className="cardLabelStack" style={containerStyle}>
            <span className="cardLabelItem" style={{
                marginLeft: '15px',
                ...labelStyle,
            }}>
                <i className="fas fa-globe" style={iconStyle}></i> Ukrainian
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fas fa-paw" style={iconStyle}></i> Dogs
            </span>
        </div>
    );
};

const containerStyle = {
    display: 'flex', // Displays labels inline
    flexWrap: 'wrap', // Wraps labels if needed
    width: '100%',
    color: 'white',
    textAlign: 'left',
    height: '60px', // Fixed height for the container
    alignItems: 'center', // Vertically center the labels
    gap: '10px', // Equal gap between the labels
    overflow: 'hidden', // Ensures that content doesn't overflow the container
};

const labelStyle = {
    display: 'inline-flex', // Labels displayed inline
    alignItems: 'center', // Vertically centers the icon and text
    backgroundColor: 'rgb(104 104 105)', // Background color for the label
    borderRadius: '15px', // Rounded corners for the label
    padding: '5px 15px', // Consistent padding inside each label
    height: '26px', // Fixed height for the labels to fit inside the 60px container
    whiteSpace: 'nowrap', // Prevents text from wrapping within the label
    marginTop: '5px',

};

const iconStyle = {
    marginRight: '5px', // Space between icon and text
};

export default CardLabelStack;
