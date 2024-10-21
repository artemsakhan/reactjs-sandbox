import React from 'react';

const CardLabelStack = ({ occupation, height }) => {
    return (
        <div className="cardLabelStack" style={containerStyle}>
            <span className="cardLabelItem" style={{
                ...labelStyle,
            }}>
                <i className="fa-solid fa-briefcase" style={iconStyle}></i>&nbsp;
                {occupation}
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fa-solid fa-ruler-vertical" style={iconStyle}></i>
                {height}
            </span>
        </div>
    );
};

const containerStyle = {
    position: 'absolute',
    bottom: '80px',
    left: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    width: 'calc(100% - 100px)',
    color: 'white',
    textAlign: 'left',
    height: '30px',
    alignItems: 'center',
    gap: '5px',
    overflow: 'hidden',
};

const labelStyle = {
    display: 'inline-flex', // Labels displayed inline
    alignItems: 'center', // Vertically centers the icon and text
    backgroundColor: 'rgb(104 104 105 / 60%)', // Background color for the label
    borderRadius: '15px', // Rounded corners for the label
    padding: '2px 10px', // Consistent padding inside each label
    height: '26px', // Fixed height for the labels to fit inside the 60px container
    whiteSpace: 'nowrap', // Prevents text from wrapping within the label
    fontSize: '13px',

};

const iconStyle = {
    marginRight: '5px', // Space between icon and text
};

export default CardLabelStack;
