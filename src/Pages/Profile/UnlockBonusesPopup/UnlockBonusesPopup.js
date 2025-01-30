import React from "react";
import UIConfig from "../../../UIConfig";
import CloseButton from "./Components/CloseButton";
import OkayButton from "./Components/OkayButton";
import CheckShape from "../../../Shapes/CheckShape";
import BulbShape from "../../../Shapes/BulbShape";


const UnlockBonusesPopup = ({handleClose}) => {
    return (
        <div
            style={containerStyle}
        >
            <div style={contentStyle}>
                <div style={textContainerStyle}>
                    <p style={textStyle}>
                        Show your best
                    </p>
                    <p style={subTextStyle}>
                        Make your profile stand out and get this check-list done
                    </p>
                    <div style={benefitStyle}>
                        <CheckShape width={20} height={20} stroke={'#000'}/>&nbsp;
                        Add a bio
                    </div>
                    <div style={benefitStyle}>
                        <CheckShape width={20} height={20} stroke={'#000'}/>&nbsp;
                        Fill in profile details
                    </div>
                    <div style={benefitStyle}>
                        <CheckShape width={20} height={20} stroke={'#000'}/>&nbsp;
                        Upload at least 2 photos
                    </div>
                    <div style={{
                        color: 'rgb(111 109 109)',
                        fontSize: '14px',
                        marginTop: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <BulbShape width={65} height={65}/>
                        <p style={{
                            padding: '2px',
                            margin: 0,
                            textAlign: 'left',
                            marginLeft: '10px',
                        }}>
                            The more attention you get, the more challenges will be
                            opened for you!
                        </p>
                    </div>
                </div>
                <OkayButton onClick={handleClose}/>
                <CloseButton onClick={handleClose}/>
            </div>
        </div>);
};

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

const benefitStyle = {
    color: '#000',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '15px',
    width: '70%'
}

const textStyle = {
    fontSize: '23px',
    letterSpacing: '0.5px',
    color: '#000',
    margin: '0px 0px 10px 0px',
    lineHeight: '21px',
    textAlign: 'center',
    fontWeight: 'bold',
}


export default UnlockBonusesPopup;
