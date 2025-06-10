import React from 'react';

const ThreeDots = ({activeIndex, imagesCount}) => {
    if (imagesCount <= 1) {
        return null;
    }

    const dotItems = Array.from({ length: imagesCount }, (_, i) => i);

    return (
        <div style={containerStyle}>
            {dotItems.map((index) => (
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
    right: '25px',
    top: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '7px',
};

const dotStyle = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: 0.5,
};

export default ThreeDots;
