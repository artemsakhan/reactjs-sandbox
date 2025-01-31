import React, {useState} from "react";
import CrownShape from "../../Shapes/CrownShape";
import {AnimatePresence, motion} from "framer-motion";
import UIConfig from "../../UIConfig";
import DiamondFillShape from "../../Shapes/DiamondFillShape";
import TonCoinShape from "../../Shapes/TonCoinShape";
import ArrowRightShape from "../../Shapes/ArrowRightShape";
import Modal from "../../Other/Modal";
import TonPage from "./TonPage/TonPage";
import SettingsShape from "../../Shapes/SettingsShape";

const Header = ({}) => {
    return (
        <div style={{
            height: '40%',
            width: '100%',
            background: '#2c2c2c',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px'
            }}>
                <SettingsShape width={30} height={30} fillColor={'#FFF'}/>
            </div>

            <div style={{
                width: '120px',  // Fix: Ensure proper width
                height: '120px', // Fix: Ensure proper height
                borderRadius: '60px', // Proper rounded corners
                overflow: 'hidden', // Ensures image does not overflow the div
                display: 'flex', // Optional: Centers the image if needed
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}>
                <img
                    src="https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.120x120.webp"
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                    }}
                />
            </div>
            <motion.div style={{
                marginTop: '-15px',
                background: '#FFF',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2,
            }}>
                    <span style={{
                        fontSize: '13px',
                        padding: '10px 18px',
                        fontWeight: 'bold',
                        color: '#000',
                        fontFamily: UIConfig.Fonts.Primary,
                    }}>Edit Profile</span>
            </motion.div>
        </div>
    )
}

const PremiumFeature = () => {
    return (
        <div style={{
            background: '#f5f5f6',
            borderRadius: '20px',
            width: '100%',
            height: '80px',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
        }}>
            <div style={{
                width: '54px',
                height: '54px',
                background: '#242222',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '35px',
                marginLeft: '13px'
            }}>
                <CrownShape width={35} height={35} fillColor={UIConfig.Colors.Primary} style={{
                    // transform: 'rotate(-15deg)'
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
                    fontSize: '18px',
                }}>Premium</p>
                <div style={{
                    fontSize: '14px',
                    marginTop: '2px',
                    color: '#000',
                }}>
                    Active until <b>Jan 25</b>
                </div>
            </div>
            <motion.div style={{
                position: 'absolute',
                right: '17px',
                top: '22px',
                background: '#000',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                        <span style={{
                            fontSize: '15px',
                            padding: '10px 18px',
                            fontWeight: 'bold',
                            color: '#FFF',
                            fontFamily: UIConfig.Fonts.Primary,
                        }}
                              onClick={() => {
                              }}
                        >
                            Extend
                        </span>
            </motion.div>
        </div>
    )
}

const GiftFeature2 = ({}) => {
    return (
        <div style={{
            background: '#f5f5f6',
            borderRadius: '20px',
            width: '100%',
            height: '80px',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
        }}>
            <div style={{
                width: '54px',
                height: '54px',
                background: '#242222',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '35px',
                marginLeft: '13px'
            }}>
                <DiamondFillShape width={35} height={35} fillColor={'#FFF'} style={{
                    marginTop: '2px',
                    transform: 'rotate(-15deg)'
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
                    fontSize: '18px',
                }}>Gifts</p>
                <div style={{
                    fontSize: '14px',
                    marginTop: '2px',
                    color: '#000',
                }}>
                    Balance:&nbsp;<b>5</b>
                </div>
            </div>
            <motion.div style={{
                position: 'absolute',
                right: '17px',
                top: '22px',
                background: '#000',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                        <span style={{
                            fontSize: '15px',
                            padding: '10px 18px',
                            fontWeight: 'bold',
                            color: '#FFF',
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

const Content = ({openTonPage}) => {
    return (
        <div style={{
            borderTopLeftRadius: '35px',
            borderTopRightRadius: '35px',
            background: "#FFF",
            width: '100%',
            height: '60%',
            zIndex: 1,
        }}>
            <div style={{
                width: 'calc(100% - 30px)',
                marginLeft: '15px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <TonPageBanner onClick={openTonPage}/>
                <PremiumFeature/>
                <GiftFeature2/>
            </div>
        </div>
    )
}

const TonPageBanner = ({onClick}) => {
    return (
        <div
            onClick={onClick}
            style={{
                background: '#2c2c2c',
                borderRadius: '20px',
                width: '100%',
                height: '90px',
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                position: 'relative',
            }}>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '54px',
                    height: '54px',
                    background: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '35px',
                    marginLeft: '15px'
                }}>
                    <TonCoinShape width={40} height={40} fillColor1={'#FFF'} fillColor2={'#2c2c2c'} style={{}}/>
                </div>
                <div style={{
                    marginLeft: '13px',
                }}>
                    <p style={{
                        textAlign: 'left',
                        padding: 0,
                        margin: 0,
                        fontWeight: 'bold',
                        color: '#FFF',
                        fontSize: '19px',
                    }}>Bonuses</p>
                    <div style={{
                        fontSize: '15px',
                        marginTop: '4px',
                        color: '#FFF',
                    }}>
                        Earn TON Coin
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div style={{
                    width: '25px',
                    height: '25px',
                    background: '#ec3636',
                    borderRadius: '17px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFF',
                    marginRight: '5px',
                    fontWeight: 'bold',
                    fontSize: '13px',
                }}>
                    1
                </div>
                <ArrowRightShape width={17} height={17} fillColor={'#eee'} style={{
                    marginRight: '13px',
                }}/>
            </div>
        </div>
    )
}

function ProfilePage() {
    const [tonPageOpen, setTonPageOpen] = useState(false);

    const closeTonPage = () => setTonPageOpen(false);
    const openTonPage = () => setTonPageOpen(true);


    return (
        <div style={containerStyle}>
            <AnimatePresence initial={false} mode={'wait'} onExitComplete={() => null}>
                {tonPageOpen && (
                    <Modal handleClose={closeTonPage}>
                        <TonPage handleClose={closeTonPage}/>
                    </Modal>
                )}
            </AnimatePresence>
            <Header/>
            <Content openTonPage={openTonPage}/>
        </div>
    );
}

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    background: '#2c2c2c',
};

export default ProfilePage;
