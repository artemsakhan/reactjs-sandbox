import React from 'react';
import CardLabelStack from "./CardLabelStack";

const CardHeader = ({matchCandidate}) => {
    const {name, age, aboutMe, cityName, geoProximity} = matchCandidate;

    return (
        <div style={styles.container}>
            <div className="item" style={styles.item}>
                <div className="cardHeaderName">
                    <p style={styles.name}>
                <span style={{
                    fontStyle: 'italic',
                }}>{name}</span>, {age}
                        <i className="fa fa-check-circle" style={styles.verifiedIcon}/>
                    </p>
                </div>
                <div className="cardHeaderAboutMe">
                    <p style={styles.aboutMe}>{aboutMe}</p>
                </div>
                <CardLabelStack
                    cityName={cityName}
                    geoProximity={geoProximity}
                />
            </div>
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
    item: {
        width: 'calc(100% - 105px)',
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
        WebkitLineClamp: 3, // Limit to 2 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        fontSize: '16px',
        color: 'white',
        marginTop: '5px',
        textAlign: 'left', // Optional for better alignment
        marginBottom: '8px',
    },
};

export default CardHeader;
