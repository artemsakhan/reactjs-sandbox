import React from 'react';


const styles = {
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        right: '15px',
        top: '15px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '9px',
        borderRadius: '28px',
        backgroundColor: 'rgb(250 254 39)', // Background color for the item
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow
    },
    icon: {
        marginRight: '4px', // Space between icon and text
        fontSize: '16px',
    },
    text: {
        fontSize: '14px',
        color: '#000',
        fontStyle: 'italic',
        fontWeight: 700,
    },
};

const CardFeature = ({ text }) => {
    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <span style={styles.text}>{text}</span>
            </div>
        </div>
    );
};

export default CardFeature;
