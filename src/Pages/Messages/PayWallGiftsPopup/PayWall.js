import CloseButton from "./Components/CloseButton";
import React, {useState} from "react";
import PurchaseLineItem from "./Components/PurchaseLineItem";
import UIConfig from "../../../UIConfig";
import CheckShape from "../../../Shapes/CheckShape";
import IntersectingWaveLayerShape from "../../../Shapes/IntersectingWaveLayerShape";
import DiamondSimpleShape from "../../../Shapes/DiamondSimpleShape";
import CrownShape from "../../../Shapes/CrownShape";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";


const headerColor = 'rgb(49 26 67)'

const GiftHeader = ({}) => {


    return (
        <div style={headerStyle}>
            <div style={{
                background: headerColor,
                width: '100%',
                height: '85px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '38px',
                    height: '38px',
                    // background: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '35px',
                }}>
                    <DiamondFillShape width={35} height={35} fillColor={'#FFF'} style={{
                        marginTop: '2px',
                        transform: 'rotate(-15deg)'
                    }}/>
                </div>
                <p style={{...headlineStyle, marginLeft: '5px'}}>Gifts</p>
            </div>
            <IntersectingWaveLayerShape width={'100%'} fillColor={headerColor}/>
        </div>
    )
}

const PremiumHeader = ({}) => {

    return (
        <div style={headerStyle}>
            <div style={{
                background: headerColor,
                width: '100%',
                height: '85px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    // background: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '35px',
                }}>
                    <CrownShape width={35} height={35} fillColor={'#FFF'} style={{
                        transform: 'rotate(-15deg)'
                    }}/>
                </div>
                <p style={{...headlineStyle, color: '#FFF', fontSize: '30px', marginLeft: '3px'}}>Premium</p>
            </div>
            <IntersectingWaveLayerShape width={'100%'} fillColor={headerColor}/>
        </div>
    )
}

const PayWallGiftsPopup = ({handleClose}) => {
    const [headerIndex, setHeaderIndex] = useState(0);

    const nextHeader = () => {
        setHeaderIndex(headerIndex === 0 ? 1 : 0)
    }

    return (
        <div style={containerStyle} onClick={nextHeader}>
            {
                headerIndex === 0 ? (
                    <GiftHeader/>
                ) : (
                    <PremiumHeader/>
                )
            }

            <PurchaseLineItem unitAmount={1} price={100} style={{marginTop: '28px'}} isPreSelected={false}/>
            <PurchaseLineItem unitAmount={3} price={250} style={{marginTop: '15px'}} isPreSelected={false}/>
            <PurchaseLineItem unitAmount={6} price={450} style={{marginTop: '15px'}} isPreSelected={true}
                              discountValue={25}/>

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
    width: 'calc(100% / 2 + 10px)',
}

const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
}

const headlineStyle = {
    fontSize: '34px',
    fontWeight: 700,
    color: '#FFF',
    letterSpacing: '1px',
    marginLeft: '5px',
};

const subtextStyle = {
    fontFamily: '"Linotte", sans-serif',
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