import React from "react";
import UIConfig from "../../../UIConfig";
import CloseButton from "./Components/CloseButton";
import ClaimButton from "./Components/ClaimButton";
import CheckShape from "../../../Shapes/CheckShape";


const GetMatchedPopup = ({handleClose}) => {
    return (
        <div
            style={containerStyle}
        >
            <div style={contentStyle}>
                <div style={textContainerStyle}>
                    <p style={textStyle}>
                        Get Matched & Earn Rewards
                    </p>
                    <p style={subTextStyle}>
                        Connect with people you like and unlock your bonus!
                    </p>
                </div>
                <div style={benefitStyle}>
                    <CheckShape width={20} height={20} stroke={'#000'}/>&nbsp;
                    Get 5 Matches
                </div>
                <ClaimButton onClick={handleClose}/>
                <CloseButton onClick={handleClose}/>
            </div>
        </div>);
};

const benefitStyle = {
    color: '#000',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '15px',
    width: '50%'
}

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 190px)',
    marginTop: '190px',
    borderTopLeftRadius: UIConfig.Card.Content.borderRadius,
    borderTopRightRadius: UIConfig.Card.Content.borderRadius,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: '#FFF',
};

const contentStyle = {
    width: 'calc(100% - 30px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const textContainerStyle = {
    width: 'calc(100% - 35px)',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
};

const subTextStyle = {
    fontSize: '16px',
    color: 'rgb(53 51 51)',
    margin: '5px 0px 15px 0px',
    textAlign: 'center',
    maxWidth: '90%',
};

const textStyle = {
    fontSize: '23px',
    letterSpacing: '0.5px',
    color: '#000',
    margin: '0px 0px 10px 0px',
    lineHeight: '21px',
    textAlign: 'center',
    fontWeight: 'bold',
}


export default GetMatchedPopup;
