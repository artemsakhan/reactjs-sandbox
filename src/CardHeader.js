import React from 'react';
import CardLabelStack from "./CardLabelStack";

const CardHeader = ({ name, age, aboutMe }) => {
    return (
        <div style={styles.container}>
            <div className="item" style={styles.item}>
                <div>
                    <p style={styles.name}>
                <span style={{
                    fontStyle: 'italic',
                }}>{name}</span>, {age}
                        <i className="fa fa-check-circle" style={styles.verifiedIcon}/>
                    </p>
                </div>
                <div>
                    <p style={styles.aboutMe}>{aboutMe}</p> {/* Limited to 2 lines */}
                </div>
                <CardLabelStack/>
            </div>
        </div>
    );
};

const styles = {
    item: {
        width: 'calc(100% - 100px)',
        marginLeft: '15px',
        marginBottom: '5px',
    },
    container: {
        position: 'absolute',
        left: '0px',
        bottom: '0px',
        color: 'white',
        textAlign: 'left',
        width: '100%',
        background: 'linear-gradient(185deg, rgba(255, 255, 255, 0) 17%, rgb(39, 46, 58) 100%)',
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
