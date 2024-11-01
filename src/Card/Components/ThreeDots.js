import React from 'react';

const styles = {
    dotsContainer: {
        position: 'absolute',
        left: '25px',
        top: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '7px',
    },
    dot: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: 0.5,
    },
    activeDot: {
        opacity: 1,
    },
};

const ThreeDots = ({activeIndex, imagesCount}) => {
    if (imagesCount <= 1) {
        return null;
    }

    return (
        <div style={styles.dotsContainer}>
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    style={{
                        ...styles.dot,
                        ...(index === activeIndex ? styles.activeDot : {}),
                    }}
                />
            ))}
        </div>
    );
};

export default ThreeDots;
