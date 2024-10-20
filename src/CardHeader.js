import React from 'react';
import CardLabelStack from "./CardLabelStack";

const CardHeader = ({matchCandidate, activeIndex}) => {
    const {name, age, aboutMe, cityName, geoProximity} = matchCandidate;

    return (
        <div style={styles.container}>
            <div className="cardHeaderName">
                <p style={styles.name}>
            <span>{name}</span>, {age}
                    <i className="fa fa-check-circle" style={styles.verifiedIcon}/>
                </p>
            </div>
            {activeIndex !== 1 ? (
                <div className="cardHeaderAboutMe" style={{
                }}>
                    <p style={styles.aboutMe}>{aboutMe}</p>
                </div>
            ) : (
                <CardLabelStack
                    cityName={cityName}
                    geoProximity={geoProximity}
                />
            )}
        </div>
    );
};

const styles = {
    labelItem: {
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,

    },
    container: {
        color: 'white',
        textAlign: 'left',
        width: 'calc(100% - 30px)',
        marginLeft: '12px',
        height: '100px',
    },
    name: {
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: '600',
        marginTop: '10px',
        marginBottom: '10px',
    },
    verifiedIcon: {
        marginLeft: '8px',
        color: '#fafe27',
    },
    aboutMe: {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3, // Limit to 2 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        fontSize: '14px',
        color: 'white',
        textAlign: 'left', // Optional for better alignment
        marginBottom: '0px',
        lineHeight: '1.4',
    },
};

export default CardHeader;
