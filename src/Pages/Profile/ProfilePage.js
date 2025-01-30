import React, {useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import TonCoinShape from "../../Shapes/TonCoinShape";
import ArrowRightShape from "../../Shapes/ArrowRightShape";
import DiamondSimpleShape from "../../Shapes/DiamondSimpleShape";
import FriendsShape from "../../Shapes/FriendsShape";
import UIConfig from "../../UIConfig";
import HeartRoundShape from "../../Shapes/HeartRoundShape";
import SevenShape from "../../Shapes/SevenShape";
import LottieAnimation from "../../Other/LottieAnimation";
import loadingAnimationData from "../../Assets/stars_background.json";
import IncomeShape from "../../Shapes/IncomeShape";
import CashOutShape from "../../Shapes/CashoutShape";
import Modal from "../../Other/Modal";
import UnlockBonusesPopup from "./UnlockBonusesPopup/UnlockBonusesPopup";
import GetMatchedPopup from "./GetMatchedPopup/GetMatchedPopup"

const Header = ({}) => {
    return (
        <div style={{
            width: '100%',
            height: '45%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative', // Ensures absolute children are positioned inside this
            overflow: 'hidden',  // Prevents overflow issues
        }}>
            {/* Background Animation Layer */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                opacity: 0.4,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 0, // Keep it behind the text but still visible
            }}>
                <LottieAnimation
                    width={300}
                    height={300}
                    speed={0.5}
                    animationData={loadingAnimationData}
                    shouldAnimate={true}
                    loop={true}
                />
            </div>

            {/* Foreground Content */}
            <div style={{zIndex: 1}}>
                <p style={{padding: '0px 0', margin: 0, fontWeight: 'bold', fontSize: '19px'}}>TON</p>
                <p style={{padding: '0px 0', margin: 0, fontWeight: 'bold', fontSize: '28px'}}>0.40</p>
                <p style={{
                    padding: '1px 0',
                    margin: 0,
                    color: 'rgb(110 110 110)',
                    fontSize: '13px'
                }}>≈&nbsp;4.5&nbsp;USD</p>
            </div>

            {/* Button */}
            <motion.div style={{
                background: '#000',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15px',
                zIndex: 1, // Ensure it's above the animation
            }}>
                <span style={{
                    fontSize: '13px',
                    padding: '10px 18px',
                    fontWeight: 'bold',
                    color: '#FFF',
                    fontFamily: UIConfig.Fonts.Primary,
                }}>Connect a wallet</span>
            </motion.div>
        </div>
    );
}

const TabBar = ({activeTabIndex, setActiveTabIndex}) => {
    return (
        <ul style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'calc(100% - 60px)',
            listStyleType: 'none',
            margin: 0,
            padding: '2px',
            background: '#efefec',
            borderRadius: '8px',
        }}>
            <li style={{
                width: '50%',
                padding: '10px 10px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: activeTabIndex === 0 ? '#dcdcdc' : '#efefec',
            }} onClick={() => setActiveTabIndex(0)}>Challenges
            </li>
            <li style={{
                width: '50%',
                fontSize: '12px',
                fontWeight: '500',
                padding: '10px 10px',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: activeTabIndex === 1 ? '#dcdcdc' : '#efefec',
            }} onClick={() => setActiveTabIndex(1)}>History
            </li>
        </ul>
    );
};

const GiftBonusesInfo = ({openPopup}) => {
    return (
        <div style={{
            marginTop: '20px',
            width: 'calc(100% - 60px)',
            background: '#efefec',
            height: '70px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        }} onClick={openPopup}>
            <div style={{
                marginLeft: '11px',
                display: 'flex',
                flexDirection: 'row',
            }}>
                <TonCoinShape width={40} height={40} fillColor1={'#000'} fillColor2={'#fff'}/>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '20px',
                    marginLeft: '-14px',
                    background: 'orange',
                }}>
                    <DiamondSimpleShape width={40} height={40} fillColor={'#FFF'} style={{
                        marginTop: '-7px',
                    }}/>
                </div>
            </div>
            <div style={{
                maxWidth: '55%',
                textAlign: 'left',
                marginLeft: '11px',
            }}>
            <span style={{
                fontSize: '14px',
                textAlign: 'left',
            }}>Unlock challenges by incoming activity</span>
            </div>
            <div style={{
                position: 'absolute',
                right: '15px',
                top: '22px',
            }}>
                <ArrowRightShape height={11} width={11} fillColor={'#dcdcdc'}/>
            </div>
        </div>
    )
}

const InviteFriendChallenge = ({}) => {
    return (
        <div style={{
            marginTop: '16px',
            width: 'calc(100% - 60px)',
            // background: '#efefec',
            height: '50px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        }}>
            <FriendsShape width={40} height={40} fillColor={'#000'} style={{marginLeft: '5px'}}/>
            <div style={{
                maxWidth: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: '12px',
            }}>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px 2px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                    }}>Invite a friend</p>
                </div>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px',
                        fontSize: '13px',
                        fontFamily: UIConfig.Fonts.Primary,
                        color: 'rgb(110, 110, 110)',
                        textAlign: 'left',
                    }}>0.05 TON</p>
                </div>
                <motion.div style={{
                    position: 'absolute',
                    right: '5px',
                    top: '9px',
                    background: '#000',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{
                        fontSize: '13px',
                        padding: '10px 18px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        fontFamily: UIConfig.Fonts.Primary,
                    }}>Copy link</span>
                </motion.div>
            </div>
        </div>
    )
}

const ConnectionsChallenge = ({onClick}) => {
    return (
        <div style={{
            marginTop: '16px',
            width: 'calc(100% - 60px)',
            height: '50px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        }}>
            <HeartRoundShape width={40} height={40} fillColor={'#000'} style={{marginLeft: '5px'}}/>
            <div style={{
                maxWidth: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: '12px',
            }}>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px 2px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                    }}>Get matched</p>
                </div>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px',
                        fontSize: '13px',
                        fontFamily: UIConfig.Fonts.Primary,
                        color: 'rgb(110, 110, 110)',
                        textAlign: 'left',
                    }}>0/10, 0.015 TON</p>
                </div>
                <motion.div style={{
                    position: 'absolute',
                    right: '5px',
                    top: '9px',
                    background: '#000',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{
                        fontSize: '13px',
                        padding: '10px 18px',
                        fontWeight: 'bold',
                        color: UIConfig.Colors.Primary,
                        fontFamily: UIConfig.Fonts.Primary,
                    }}
                          onClick={onClick}
                    >Claim</span>
                </motion.div>
            </div>
        </div>
    )
}

const BeActiveChallenge = ({}) => {
    return (
        <div style={{
            marginTop: '16px',
            width: 'calc(100% - 60px)',
            height: '50px',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            position: 'relative',
        }}>
            <SevenShape width={40} height={40} fillColor={'#000'} style={{marginLeft: '5px'}}/>
            <div style={{
                maxWidth: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: '12px',
            }}>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px 2px',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                    }}>7 days check-in</p>
                </div>
                <div>
                    <p style={{
                        margin: 0,
                        padding: '3px 0px',
                        fontSize: '13px',
                        fontFamily: UIConfig.Fonts.Primary,
                        color: 'rgb(110, 110, 110)',
                        textAlign: 'left',
                    }}>0/7, 0.015 TON</p>
                </div>
                <motion.div style={{
                    position: 'absolute',
                    right: '5px',
                    top: '9px',
                    background: 'rgb(220 220 220)',
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <span style={{
                        fontSize: '13px',
                        padding: '10px 18px',
                        fontWeight: 'bold',
                        color: '#FFF',
                        fontFamily: UIConfig.Fonts.Primary,
                    }}>Locked</span>
                </motion.div>
            </div>
        </div>
    )
}

const TransactionsHistory = ({}) => {
    return (
        <div style={{
            marginTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: 'calc(100% - 62px)',
            marginLeft: '5px',
            marginRight: '6px',
        }}>
            <p style={{
                textAlign: 'left',
                fontSize: '13px',
                color: 'rgb(106 100 100 / 93%)'
            }}>Dec 17, 2025</p>
            <div style={{
                display: 'flex',
                marginTop: '10px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative',
            }}>
                <IncomeShape width={35} height={35} fillColor="rgb(93 169 93)" style={{
                    marginRight: '10px',
                    marginTop: '-10px',
                }}/>
                <div style={{
                    width: '65%',
                    textAlign: 'left',
                }}>
                    <p style={{
                        padding: '0px 0 2px',
                        margin: '0px',
                    }}><b>Invite a friend</b> challenge</p>
                </div>
                <div style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#369f36',
                }}>
                    <span style={{fontWeight: 'bold'}}>
                    +0.015
                    </span>&nbsp;TON
                </div>
            </div>
            <div style={{
                display: 'flex',
                marginTop: '14px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative',
            }}>
                <CashOutShape width={35} height={35} fillColor={'#e76060'} style={{
                    marginRight: '10px',
                    marginTop: '0px',
                }}/>
                <div style={{
                    width: '65%',
                    textAlign: 'left',
                }}>
                    <p style={{
                        padding: '0px 0 2px',
                        margin: '0px',
                    }}><b>Payout</b> request</p>
                </div>
                <div style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#e76060',
                }}>
                    <span style={{fontWeight: 'bold'}}>
                    -0.015
                    </span>&nbsp;TON
                </div>
            </div>

        </div>
    )
}

function ProfilePage() {
    const [unlockBonusesOpen, setUnlockBonusesOpen] = useState(false);
    const [getMatchedOpen, setGetMatchedOpen] = useState(false);

    const closeUnlockBonuses = () => setUnlockBonusesOpen(false);
    const openUnlockBonuses = () => setUnlockBonusesOpen(true);

    const closeGetMatched = () => setGetMatchedOpen(false);
    const openGetMatched = () => setGetMatchedOpen(true);


    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const setNextTab = (id) => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

        setActiveTabIndex(id)
    }

    return (
        <div style={containerStyle}>
            <AnimatePresence initial={false} mode={'wait'} onExitComplete={() => null}>
                {unlockBonusesOpen && (
                    <Modal handleClose={closeUnlockBonuses}>
                        <UnlockBonusesPopup handleClose={closeUnlockBonuses}/>
                    </Modal>
                )}
                {getMatchedOpen && (
                    <Modal handleClose={closeGetMatched}>
                        <GetMatchedPopup handleClose={closeGetMatched}/>
                    </Modal>
                )}

            </AnimatePresence>
            <Header/>
            <TabBar activeTabIndex={activeTabIndex} setActiveTabIndex={setNextTab}/>
            {activeTabIndex === 0 ? (
                <>
                    <GiftBonusesInfo openPopup={openUnlockBonuses}/>
                    <InviteFriendChallenge/>
                    <ConnectionsChallenge onClick={openGetMatched}/>
                    <BeActiveChallenge/>
                </>
            ) : (
                <TransactionsHistory/>
            )}
        </div>
    );
}


const containerStyle = {
    background: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
};

export default ProfilePage;
