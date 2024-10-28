import React from 'react';

const CardLabelStack = ({occupation, height}) => {
    return (
        <div className="cardLabelStack" style={containerStyle}>
            <span className="cardLabelItem" style={{
                ...labelStyle,
            }}>
                <i className="fa-solid fa-child" style={iconStyle}/>
                Athletic
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
    bottom: '67px',
    left: '7px',
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
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgb(104 104 105 / 60%)',
    borderRadius: '15px',
    padding: '2px 10px',
    height: '26px',
    whiteSpace: 'nowrap',
    fontSize: '13px',

};

const iconStyle = {
    marginRight: '5px',
};

export default CardLabelStack;
