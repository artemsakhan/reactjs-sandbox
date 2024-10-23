import React from 'react';
import VerifiedBadgeSvg from "../../Shapes/VerifiedBadgeShape";

const CardHeader = ({matchCandidate, currentSection, totalSections}) => {
    const {name, age, aboutMe, cityName, geoProximity, occupation} = matchCandidate;

    var profileInfoSection = null;

    // @todo make this code more complex
    // 1. take into account various images length
    // 2. user will always have city, distance, name, age. Everything else is optional. Make sure you handle it
    // 3. estimate text lines correctly (if it's 1 line - display name on top of it)
    if (currentSection in [0, 1]) {
        profileInfoSection = (
            <div className="item" style={styles.item}>
                <div className="cardHeaderName" style={styles.name}>
                    <div>
                        {name}, {age}&nbsp;
                    </div>
                    <VerifiedBadgeSvg/>
                </div>
                {currentSection === 0 ? (
                    <div className="cardHeaderCity" style={styles.location}>
                        <i className="fa-solid fa-location-dot"></i>&nbsp;{cityName}, {geoProximity} away
                    </div>
                ) : (
                    <div className="cardHeaderCity" style={styles.location}>
                        <i className="fa-solid fa-briefcase"></i>&nbsp;{occupation}
                    </div>
                )}
            </div>
        )
    } else {
        if (aboutMe.length < 50) {
            profileInfoSection = (
                <div className="item" style={styles.item}>
                    <div className="cardHeaderName" style={styles.name}>
                        <div>
                            {name}, {age}&nbsp;
                        </div>
                        <VerifiedBadgeSvg/>
                    </div>
                    <div className="cardHeaderAboutMe" style={styles.aboutMe}>
                        {aboutMe}
                    </div>
                </div>
            );
        } else {
            profileInfoSection = (
                <div className="item" style={styles.item}>
                    <div className="cardHeaderAboutMe" style={styles.aboutMe}>
                        {aboutMe}
                    </div>
                </div>
            );
        }
    }

    return (
        <div style={styles.container}>
            {profileInfoSection}
        </div>

    );
};

const styles = {
    container: {
        color: 'white',
        textAlign: 'left',
        width: '100%',
        height: '70px',
        background: '#272e3a',
    },
    location: {
        fontFamily: "'Roboto', sans-serif", // or another sans-serif font you are using
        fontSize: '14px',                   // Slightly smaller than the name text
        fontWeight: 400,                    // Normal weight for the description
        color: '#B0B0B0',                   // Light gray color (adjust based on your theme)
        lineHeight: '16px',                 // Adjust for readability
        letterSpacing: '0.4px',
    },
    labelItem: {
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 500,
    },
    item: {
        width: 'calc(100% - 25px)',
        marginLeft: '15px',
        marginTop: '13px',
        marginBottom: '5px',
    },
    name: {
        fontSize: '21px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: 'bold',
        color: '#FFFFFF',
        lineHeight: '20px',
        letterSpacing: '0.5px',
        margin: '15px 0px 10px 0px',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    verifiedIcon: {
        marginLeft: '8px',
        color: '#fafe27',
    },
    aboutMe: {
        fontFamily: "'Roboto', sans-serif", // or another sans-serif font you are using
        fontSize: '15px',                   // Slightly smaller than the name text
        fontWeight: 400,                    // Normal weight for the description
        color: '#FFF',                   // Light gray color (adjust based on your theme)
        lineHeight: '16px',                 // Adjust for readability
        letterSpacing: '0.4px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3, // Limit to 2 lines
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'normal',
        // fontSize: '14px',
        // color: 'white',
        marginTop: '5px',
        textAlign: 'left', // Optional for better alignment
        marginBottom: '8px',
    },
};

export default CardHeader;
