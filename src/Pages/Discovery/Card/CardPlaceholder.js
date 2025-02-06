import React from "react";
import UIConfig from "../../../UIConfig";
import SadShape from "../../../Shapes/SadShape";
import {motion} from "framer-motion";
import PageShape from "../../../Shapes/PageShape";
import SearchShape from "../../../Shapes/SearchShape";
import SadSmileShape from "../../../Shapes/SadSmileShape";

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
                            <div style={{
                                width: '105px',
                                height: '105px',
                                borderRadius: '60px',
                                background: '#2f333d',
                                position: 'relative',
                            }}>
                                <PageShape width={100} height={100} fillColor={'#686f85'} style={{
                                    marginTop: '0px',
                                    transform: 'rotate(15deg)'
                                }}/>
                                <SearchShape width={60} height={60} fillColor={'#d9e0ec'} style={{
                                    position: 'absolute',
                                    left: '26px',
                                    top: '26px',
                                }}/>
                                <div style={{
                                    position: 'absolute',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '20px',
                                    background: '#686f85',
                                    top: '33px',
                                    left: '33px',
                                }}></div>
                                <SadSmileShape width={35} height={35} fillColor={'#b2b7c9'} style={{
                                    position: 'absolute',
                                    top: '33px',
                                    left: '33px',
                                }}/>
                                <div style={{
                                    position: 'absolute',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background: '#2f333d',
                                    left: '-25px',
                                    top: '92px',
                                }}>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '10px',
                                    background: '#2f333d',
                                    left: '-30px',
                                    top: '32px',
                                }}>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background: '#2f333d',
                                    right: '-25px',
                                    top: '12px',
                                }}>
                                </div>

                            </div>
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
                                            // background: UIConfig.Colors.Primary,
                                            borderRadius: '20px',
                                            border: `1px solid ${UIConfig.Colors.Primary}`,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginTop: '40px',
                                        }}>
                                            <span style={{
                                                fontSize: '15px',
                                                padding: '11px 18px',
                                                fontWeight: 'bold',
                                                color: UIConfig.Colors.Primary,
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