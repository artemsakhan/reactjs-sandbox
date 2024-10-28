import React from 'react';
import VerifiedBadgeSvg from "../../Shapes/VerifiedBadgeShape";
import UIConfig from "../../UIConfig";

const CardHeader = ({matchCandidate, currentSection}) => {
    const {name, age, cityName, geoProximity, occupation} = matchCandidate;

    return (
        <div style={containerStyle}>
            <div className="item" style={itemStyle}>
                <div className="cardHeaderName" style={nameStyle}>
                    <div>
                        {name}, {age}&nbsp;
                    </div>
                    <VerifiedBadgeSvg/>
                </div>
                {currentSection === 0 ? (
                    <div className="cardHeaderCity" style={locationStyle}>
                        <i className="fa-solid fa-location-dot"></i>&nbsp;{cityName}, {geoProximity} away
                    </div>
                ) : (
                    <div className="cardHeaderCity" style={locationStyle}>
                        <i className="fa-solid fa-briefcase"></i>&nbsp;{occupation}
                    </div>
                )}
            </div>
        </div>

    );
};

const containerStyle = {
    color: 'white',
    textAlign: 'left',
    width: '100%',
    height: '60px',
    background: UIConfig.Card.Content.background,
};

const itemStyle = {
    width: 'calc(100% - 25px)',
    marginLeft: '15px',
    marginTop: '13px',
    marginBottom: '5px',
};

const nameStyle = {
    ...UIConfig.Typography.Card.Title,
    margin: '12px 0px 7px',
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
};

const locationStyle = UIConfig.Typography.Card.SubTitle;

export default CardHeader;
