import React from "react";
import UIConfig from "../../../UIConfig";
import SadShape from "../../../Shapes/SadShape";
import {motion} from "framer-motion";

const CardPlaceholder = ({children, zIndex = 1}) => {
    let canExtendSearch = true;
    return (
        <div
            style={{
                ...cardStyles,
                zIndex,
            }}
        >
            <div style={contentStyle}>
                <div style={{width: '100%', height: '100%', position: 'relative'}}>
                    {children || (
                        <div style={{
                            color: '#FFF',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            height: '100%',
                        }}>
                            <SadShape width={80} height={80} fillColor={'#FFF'} style={{
                                opacity: 0.6
                            }}/>
                            <h2 style={{
                                margin: '10px 0px',
                            }}>Whoops</h2>

                            {
                                canExtendSearch ? (
                                    <>
                                        <p style={{
                                            margin: 0,
                                            maxWidth: '65%',
                                            color: '#a6a7ab',
                                        }}>Looks like no one’s here.<br/>Expand your search for more options.</p>
                                        <motion.div style={{
                                            background: UIConfig.Colors.Primary,
                                            borderRadius: '20px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '40px',
                                        }}>
                                            <span style={{
                                                fontSize: '15px',
                                                padding: '11px 18px',
                                                fontWeight: 'bold',
                                                color: '#000',
                                                fontFamily: UIConfig.Fonts.Primary,
                                            }}>
                                                Expand
                                            </span>
                                        </motion.div>
                                    </>

                                ) : (
                                    <p style={{
                                        margin: 0,
                                        maxWidth: '70%',
                                        color: '#a6a7ab',
                                    }}>Looks like no one’s here.<br/> Try coming back later.</p>
                                )
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const contentStyle = {
    width: 'calc(100% - 25px)',
    height: 'calc(100% - 25px)',
    background: UIConfig.Colors.BackgroundMedium,
    borderRadius: '35px',
    position: "relative",
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const cardStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    touchAction: "none",
    borderRadius: '35px',
    overflow: 'hidden',
    zIndex: 1,
}

export default CardPlaceholder;