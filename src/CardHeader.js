import React from 'react';
import CardLabelStack from "./CardLabelStack";

const CardHeader = ({ name, age, aboutMe }) => {
    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <p style={styles.name}>
                <span style={{
                    fontStyle: 'italic',
                }}>{name}</span>, {age}
                    <i className="fa fa-check-circle" style={styles.verifiedIcon}/>
                </p>
            </div>
            <div style={styles.item}>
                <p style={styles.aboutMe}>{aboutMe}</p> {/* Limited to 2 lines */}
            </div>
            <CardLabelStack/>
        </div>
    );
};

const styles = {
    container: {
        position: 'absolute',
        left: '15px',
        bottom: '5px',
        color: 'white',
        textAlign: 'left',
        width: 'calc(100% - 120px)',
    },
    name: {
        alignItems: 'center',
        fontSize: '22px',
        fontWeight: 'bold',
        margin: '10px 0px',
    },
    verifiedIcon: {
        marginLeft: '8px',
        color: '#fafe27',
    },
    aboutMe: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 4, // Limit to 2 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        fontSize: '16px',
        color: 'white',
        marginTop: '5px',
        textAlign: 'left', // Optional for better alignment
        marginBottom: '5px',
    },
};

export default CardHeader;
