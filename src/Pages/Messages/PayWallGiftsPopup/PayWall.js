import CloseButton from "./Components/CloseButton";
import React from "react";
import PurchaseLineItem from "./Components/PurchaseLineItem";
import UIConfig from "../../../UIConfig";
import CheckShape from "../../../Shapes/CheckShape";

const PayWallGiftsPopup = ({handleClose}) => {
    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <p style={headlineStyle}>Choose your option</p>
            </div>
            <PurchaseLineItem unitAmount={1} price={100} style={{ marginTop: '40px'}} isPreSelected={false}/>
            <PurchaseLineItem unitAmount={3} price={250} style={{ marginTop: '15px'}} isPreSelected={false}/>
            <PurchaseLineItem unitAmount={6} price={450} style={{ marginTop: '15px'}} isPreSelected={true}  discountValue={25}/>

            <div style={{...subtextStyle, marginTop: '60px'}}>
                Why buy Gifts?
            </div>
            <div style={benefitStyle}>
                <CheckShape width={20} height={20} stroke={UIConfig.Colors.Primary}/>&nbsp;
                Increased engagement
            </div>
            <div style={benefitStyle}>
                <CheckShape width={20} height={20} stroke={UIConfig.Colors.Primary}/>&nbsp;
                Makes starting easier
            </div>
            <div style={benefitStyle}>
                <CheckShape width={20} height={20} stroke={UIConfig.Colors.Primary}/>&nbsp;
                Catch their attention
            </div>

            <CloseButton handleClose={handleClose}/>
        </div>
    )
}

const benefitStyle = {
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '15px',
    width: 'calc(100% / 2 + 10px)'
}

const headerStyle = {
    maxWidth: '60%',
}

const headlineStyle = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '30px',
    fontWeight: 700,
    color: '#FFF',
    marginBottom: '0px',
    marginTop: '20px',
    letterSpacing: '1px',
};

const subtextStyle = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '17px',
    letterSpacing: '0.3px',
    color: UIConfig.Colors.Primary,
    marginTop: '10px',
};

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgb(39 25 52) 0%, rgb(19, 27, 24) 90% )',
    zIndex: 2,
};

export default PayWallGiftsPopup;