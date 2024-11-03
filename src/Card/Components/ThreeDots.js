import React from 'react';

const ThreeDots = ({activeIndex, imagesCount}) => {
    if (imagesCount <= 1) {
        return null;
    }

    return (
        <div style={containerStyle}>
            {Array.from({ length: imagesCount }, (_, i) => i).map((index) => (
                <div
                    key={index}
                    style={{
                        ...dotStyle,
                        ...(index === activeIndex ? {opacity: 1} : {}),
                    }}
                />
            ))}
        </div>
    );
};


const containerStyle = {
    position: 'absolute',
    left: '25px',
    top: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
    zIndex: 1,
};

const dotStyle = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: 0.5,
};

export default ThreeDots;
