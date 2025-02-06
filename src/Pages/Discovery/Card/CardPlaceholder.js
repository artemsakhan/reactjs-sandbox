import React from "react";
import UIConfig from "../../../UIConfig";
import {motion} from "framer-motion";
import PageShape from "../../../Shapes/PageShape";
import SearchShape from "../../../Shapes/SearchShape";
import SadSmileShape from "../../../Shapes/SadSmileShape";
import PhotoShape from "../../../Shapes/PhotoShape";
import CloseShape from "../../../Shapes/CloseShape";

const InsufficientData = () => {
    return (
        <>
            <div style={{
                width: '94px',
                height: '94px',
                borderRadius: '60px',
                background: '#2f333d',
                position: 'relative',
                marginBottom: '15px',
            }}>
                <PhotoShape width={100} height={100} fillColor={'#686f85'} styles={{
                    marginTop: '-5px',
                    marginLeft: '-2px'
                }}/>
                <div style={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    borderRadius: '18px',
                    background: '#d9e0ec',
                    bottom: '5px',
                    left: '33px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CloseShape width={25} height={25} fillColor={'#2f333d'} strokeWidth={3} style={{
                        transform: 'rotate(45deg)'
                    }}/>
                </div>
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
                margin: '10px 0px 14px',
            }}>No photos</h2>
            <p style={{
                margin: 0,
                maxWidth: '65%',
                color: '#a6a7ab',
            }}> Please add some photos<br/> to help others get to know you better.</p>
            <motion.div style={{
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
                        Add a photo
                    </span>
            </motion.div>
        </>
    )
}

const NoResults = () => {
    const canExtendSearch = true

    return (
        <>
            <div style={{
                width: '98px',
                height: '98px',
                borderRadius: '60px',
                background: '#2f333d',
                position: 'relative',
                marginBottom: '15px',
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
                margin: '10px 0px 14px',
            }}>Quiet here</h2>
            <p style={{
                margin: 0,
                maxWidth: '70%',
                color: '#a6a7ab',
            }}>Seems like you're ahead<br/> of the crowd! Try checking back later.  </p>
        </>
    )
}

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
                            <NoResults/>
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