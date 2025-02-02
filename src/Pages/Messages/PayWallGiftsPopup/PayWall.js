import CloseButton from "./Components/CloseButton";
import React, {useState} from "react";
import PurchaseLineItem from "./Components/PurchaseLineItem";
import UIConfig from "../../../UIConfig";
import CheckShape from "../../../Shapes/CheckShape";
import CrownShape from "../../../Shapes/CrownShape";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";
import BannerBackground from "../Components/BannerBackground";

const GiftHeader = ({}) => {
    return (
        <div style={headerStyle}>
            <div style={{
                marginTop: '60px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '35px',
                }}>
                    <DiamondFillShape width={32} height={32} fillColor={'#FFF'} style={{
                        marginTop: '20px',
                        transform: 'rotate(-15deg)'
                    }}/>
                </div>
                <h1 style={{color: '#FFF', marginLeft: '0px', marginBottom: '6px'}}>Gifts</h1>
            </div>
        </div>
    )
}

const PremiumHeader = ({}) => {
    return (
        <div style={headerStyle}>
            <div style={{
                marginTop: '60px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '35px',
                }}>
                    <CrownShape width={35} height={35} fillColor={'#FFF'} style={{
                        transform: 'rotate(-15deg)',
                        marginTop: '15px',
                    }}/>
                </div>
                <h1 style={{color: '#FFF', marginLeft: '0px', marginBottom: '6px',}}>Premium</h1>
            </div>
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
            <BannerBackground
                width={window.innerWidth}
                height={220}
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: 0,
                    right: 0,
                    opacity: 0.2,
                }}
            />
            {
                headerIndex === 0 ? (
                    <GiftHeader/>
                ) : (
                    <PremiumHeader/>
                )
            }
            <h2 style={{
                color: '#FFF',
                padding: 0,
                margin: 0,
                fontWeight: 'bold',
            }}>Choose your option</h2>


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
    fontSize: '30px',
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