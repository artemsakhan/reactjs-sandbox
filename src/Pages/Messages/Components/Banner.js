import UIConfig from "../../../UIConfig";
import {motion} from "framer-motion";
import React from "react";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";

const BannerBackground = ({style, width, height}) => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 1080 900' style={style}>
            {/*<rect fill='#FFD829' width='1080' height='900'/>*/}
            <g fillOpacity='.1'>
                <polygon fill='#444' points='90 150 0 300 180 300'/>
                <polygon points='90 150 180 0 0 0'/>
                <polygon fill='#AAA' points='270 150 360 0 180 0'/>
                <polygon fill='#DDD' points='450 150 360 300 540 300'/>
                <polygon fill='#999' points='450 150 540 0 360 0'/>
                <polygon points='630 150 540 300 720 300'/>
                <polygon fill='#DDD' points='630 150 720 0 540 0'/>
                <polygon fill='#444' points='810 150 720 300 900 300'/>
                <polygon fill='#FFF' points='810 150 900 0 720 0'/>
                <polygon fill='#DDD' points='990 150 900 300 1080 300'/>
                <polygon fill='#444' points='990 150 1080 0 900 0'/>
                <polygon fill='#DDD' points='90 450 0 600 180 600'/>
                <polygon points='90 450 180 300 0 300'/>
                <polygon fill='#666' points='270 450 180 600 360 600'/>
                <polygon fill='#AAA' points='270 450 360 300 180 300'/>
                <polygon fill='#DDD' points='450 450 360 600 540 600'/>
                <polygon fill='#999' points='450 450 540 300 360 300'/>
                <polygon fill='#999' points='630 450 540 600 720 600'/>
                <polygon fill='#FFF' points='630 450 720 300 540 300'/>
                <polygon points='810 450 720 600 900 600'/>
                <polygon fill='#DDD' points='810 450 900 300 720 300'/>
                <polygon fill='#AAA' points='990 450 900 600 1080 600'/>
                <polygon fill='#444' points='990 450 1080 300 900 300'/>
                <polygon fill='#222' points='90 750 0 900 180 900'/>
                <polygon points='270 750 180 900 360 900'/>
                <polygon fill='#DDD' points='270 750 360 600 180 600'/>
                <polygon points='450 750 540 600 360 600'/>
                <polygon points='630 750 540 900 720 900'/>
                <polygon fill='#444' points='630 750 720 600 540 600'/>
                <polygon fill='#AAA' points='810 750 720 900 900 900'/>
                <polygon fill='#666' points='810 750 900 600 720 600'/>
                <polygon fill='#999' points='990 750 900 900 1080 900'/>
                <polygon fill='#999' points='180 0 90 150 270 150'/>
                <polygon fill='#444' points='360 0 270 150 450 150'/>
                <polygon fill='#FFF' points='540 0 450 150 630 150'/>
                <polygon points='900 0 810 150 990 150'/>
                <polygon fill='#222' points='0 300 -90 450 90 450'/>
                <polygon fill='#FFF' points='0 300 90 150 -90 150'/>
                <polygon fill='#FFF' points='180 300 90 450 270 450'/>
                <polygon fill='#666' points='180 300 270 150 90 150'/>
                <polygon fill='#222' points='360 300 270 450 450 450'/>
                <polygon fill='#FFF' points='360 300 450 150 270 150'/>
                <polygon fill='#444' points='540 300 450 450 630 450'/>
                <polygon fill='#222' points='540 300 630 150 450 150'/>
                <polygon fill='#AAA' points='720 300 630 450 810 450'/>
                <polygon fill='#666' points='720 300 810 150 630 150'/>
                <polygon fill='#FFF' points='900 300 810 450 990 450'/>
                <polygon fill='#999' points='900 300 990 150 810 150'/>
                <polygon points='0 600 -90 750 90 750'/>
                <polygon fill='#666' points='0 600 90 450 -90 450'/>
                <polygon fill='#AAA' points='180 600 90 750 270 750'/>
                <polygon fill='#444' points='180 600 270 450 90 450'/>
                <polygon fill='#444' points='360 600 270 750 450 750'/>
                <polygon fill='#999' points='360 600 450 450 270 450'/>
                <polygon fill='#666' points='540 600 630 450 450 450'/>
                <polygon fill='#222' points='720 600 630 750 810 750'/>
                <polygon fill='#FFF' points='900 600 810 750 990 750'/>
                <polygon fill='#222' points='900 600 990 450 810 450'/>
                <polygon fill='#DDD' points='0 900 90 750 -90 750'/>
                <polygon fill='#444' points='180 900 270 750 90 750'/>
                <polygon fill='#FFF' points='360 900 450 750 270 750'/>
                <polygon fill='#AAA' points='540 900 630 750 450 750'/>
                <polygon fill='#FFF' points='720 900 810 750 630 750'/>
                <polygon fill='#222' points='900 900 990 750 810 750'/>
                <polygon fill='#222' points='1080 300 990 450 1170 450'/>
                <polygon fill='#FFF' points='1080 300 1170 150 990 150'/>
                <polygon points='1080 600 990 750 1170 750'/>
                <polygon fill='#666' points='1080 600 1170 450 990 450'/>
                <polygon fill='#DDD' points='1080 900 1170 750 990 750'/>
            </g>
        </svg>
    )
}

const GiftFeature = ({handleOpen}) => {
    return (
        <div style={{
            borderRadius: '20px',
            width: 'calc(100% - 18px)',
            height: '90px',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
        }}>
            <div style={{
                width: '65px',
                height: '65px',
                background: UIConfig.Colors.Primary,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '35px',
                marginLeft: '12px'
            }}>
                <DiamondFillShape width={38} height={38} fillColor={'#000'} style={{
                    marginTop: '4px',
                }}/>
            </div>
            <div style={{
                marginLeft: '13px',
            }}>
                <p style={{
                    textAlign: 'left',
                    padding: 0,
                    margin: 0,
                    fontWeight: 'bold',
                    fontSize: '19px',
                    color: '#FFF',
                }}>Gifts</p>
                <div style={{
                    fontSize: '15px',
                    marginTop: '4px',
                    color: '#FFF',
                }}>
                    Make your first move
                </div>
            </div>
            <motion.div onTap={handleOpen} style={{
                position: 'absolute', // @TODO AVOID USING ABS POS HERE
                right: '8px',
                top: '27px',
                background: UIConfig.Colors.Primary,
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                        <span style={{
                            fontSize: '15px',
                            padding: '10px 18px',
                            fontWeight: 'bold',
                            color: '#000',
                            fontFamily: UIConfig.Fonts.Primary,
                        }}
                              onClick={() => {
                              }}
                        >
                            Get more
                        </span>
            </motion.div>
        </div>
    )
}


const Banner = ({openPayWall}) => {
    return (
        <div style={containerStyle}>
            <BannerBackground
                width={250}
                height={180}
                style={{
                    position: 'absolute',
                    pointerEvents: 'none',
                    top: 0,
                    right: 0,
                    opacity: 0.5,
                }}
            />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <GiftFeature handleOpen={openPayWall}/>
            </div>
            {/*<h4 style={headlineTextStyle}>Skip the Wait</h4>*/}
            {/*<p style={subTextStyle}>Be Bold, Make the First Move</p>*/}
            {/*<motion.div*/}
            {/*    whileTap={{scale: 0.9}}*/}
            {/*    style={buyButtonStyle}*/}
            {/*    onClick={openPayWall}*/}
            {/*>*/}
            {/*    Get Gifts*/}
            {/*</motion.div>*/}
            {/*<div style={discountContainerStyle}>*/}
            {/*    <DiscountShape width={14} height={14} fillColor={'#FFF'}/>*/}
            {/*    <span style={smallTextStyle}>&nbsp;10% discount offer</span>*/}
            {/*</div>*/}

        </div>
    )
}

const buyButtonStyle = {
    color: UIConfig.Colors.Primary,
    textTransform: 'uppercase',
    fontSize: '14px',
    position: 'absolute',
    border: `1px solid ${UIConfig.Colors.Primary}`,
    padding: '10px 13px',
    right: '20px',
    top: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
const containerStyle = {
    width: '100%',
    height: '110px',
    position: 'relative',
    overflow: 'hidden',
};

const headlineTextStyle = {
    color: '#FFF',
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '14px',
    marginBottom: '5px',
}

const subTextStyle = {
    color: '#FFF',
    textAlign: 'left',
    fontSize: '14px',
    marginLeft: '20px',
    marginTop: '7px',
}

const smallTextStyle = {
    color: '#FFF',
    fontSize: '12px',
}

const discountContainerStyle = {
    position: 'absolute',
    bottom: '10px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '20px',
}
export default Banner;