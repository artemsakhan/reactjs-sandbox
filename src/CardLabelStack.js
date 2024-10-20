import React from 'react';

const CardLabelStack = ({ cityName, geoProximity }) => {
    return (
        <div className="cardLabelStack" style={containerStyle}>
            <span className="cardLabelItem" style={{
                ...labelStyle,
            }}>
                <i className="fa-solid fa-earth-europe" style={iconStyle}/>&nbsp;
                {cityName}
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fas fa-paw" style={iconStyle}></i> Dogs
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fas fa-bullseye" style={iconStyle}></i> Casual
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fas fa-bullseye" style={iconStyle}></i> Casual
            </span>
            <span className="cardLabelItem" style={labelStyle}>
                <i className="fas fa-bullseye" style={iconStyle}></i> Casual
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
    height: '55px', // Fixed height for the container
    alignItems: 'center', // Vertically center the labels
    gap: '5px', // Equal gap between the labels
    overflow: 'hidden', // Ensures that content doesn't overflow the container
    marginTop: '9px',
};

const labelStyle = {
    display: 'inline-flex', // Labels displayed inline
    alignItems: 'center', // Vertically centers the icon and text
    backgroundColor: 'rgb(104 104 105 / 60%)', // Background color for the label
    borderRadius: '15px', // Rounded corners for the label
    padding: '2px 9px', // Consistent padding inside each label
    height: '21px', // Fixed height for the labels to fit inside the 60px container
    whiteSpace: 'nowrap', // Prevents text from wrapping within the label
    fontSize: '13px',

};

const iconStyle = {
    marginRight: '5px', // Space between icon and text
};

export default CardLabelStack;
