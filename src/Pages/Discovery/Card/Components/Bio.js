import React from 'react';
import VerifiedBadgeSvg from "../../../../Shapes/VerifiedBadgeShape";
import UIConfig from "../../../../UIConfig";
import LocationShape from "../../../../Shapes/LocationShape";
import BriefcaseShape from "../../../../Shapes/BriefcaseShape";

const Bio = ({matchCandidate, currentSection, totalSections}) => {
    const {
        profile: {
            name,
            age,
            cityName,
            occupation,
            geoProximity,
        },
    } = matchCandidate;

    let contentView = <LocationInfo geoProximity={geoProximity} cityName={cityName}/>;

    // Got more than 1 image? We have space to display the occupation if we've got one.
    if (totalSections > 1 && currentSection === 1 && occupation) {
        contentView = <OccupationInfo occupation={occupation}/>
    }

    return (
        <div style={containerStyle}>
            <div className="item" style={itemStyle}>
                <div className="cardHeaderName" style={nameStyle}>
                    <div>
                        {name}, {age}&nbsp;
                    </div>
                    <VerifiedBadgeSvg/>
                </div>
                {contentView}
            </div>
        </div>

    );
};

const OccupationInfo = ({occupation}) => (
    <div className="cardHeaderCity" style={locationStyle}>
        <BriefcaseShape width={12} height={12} fillColor={'rgb(176, 176, 176)'}/>
        <div style={{
            ...UIConfig.Typography.Card.SubTitle,
            marginLeft: '5px',
        }}>{occupation}
        </div>
    </div>
);

const LocationInfo = ({cityName, geoProximity}) => (
    <div className="cardHeaderCity" style={locationStyle}>
        <LocationShape width={12} height={12} fillColor={'rgb(176, 176, 176)'}/>
        <div style={{
            ...UIConfig.Typography.Card.SubTitle,
            marginLeft: '3px',
        }}>{cityName}, {geoProximity}</div>
    </div>
)

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

const locationStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
};

export default Bio;
