import UIConfig from "../../../UIConfig";
import {motion} from "framer-motion";
import React from "react";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";
import BannerBackground from "./BannerBackground";

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
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: '110px',
    position: 'relative',
    overflow: 'hidden',
};

export default Banner;