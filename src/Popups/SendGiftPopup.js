import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import GiftShape from "../Shapes/GiftShape";
import TextArea from "../Components/TextArea";
import UIConfig from "../UIConfig";
import ThreeDotsWave from "../Components/ThreeDotsWave";

const SendGiftPopup = ({handleClose}) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendGift = () => {
        // @Todo handle
    }

    useEffect(() => {
        // Trigger the animation after the component has mounted
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 400); // Match this with your animation delay

        // Cleanup timer if component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (<div
        className="sendGiftContainer"
        style={styles.container}
    >
        <div className="sendGiftLogo" style={styles.sendGiftLogoContainer}>
            <img
                style={styles.giftLogoImage}
                src={window.location.origin + '/reactjs-sandbox/gift_logo.png'}
                alt=""
            />
        </div>
        <div className="sendGiftText" style={styles.sendGiftTextContainer}>
            <p style={styles.subtextStyle}>
                A random gift will be sent to Jessica!
            </p>
        </div>
        <div className="sendGiftTextArea" style={styles.sendGiftTextArea}>
            <TextArea placeholder={'Write a gift message'}/>
        </div>
        <div
            className="sendGiftGreetingButton"
            style={styles.actionButtonContainer}
        >
            <motion.div
                whileTap={{scale: 0.9}}
                style={{
                    width: '80%',
                }}
                onClick={sendGift}
            >
                {isLoading ? (
                    <motion.div style={{...styles.sendGiftButton, justifyContent: 'center'}}>
                        <ThreeDotsWave style={{
                            width: "50px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}/>
                    </motion.div>
                ) : (
                    <motion.div
                        style={styles.sendGiftButton}
                    >
                        <span style={{marginLeft: '20px', fontSize: '17px'}}>Send a Gift</span>
                        <GiftShape
                            width={'30px'}
                            height={'30px'}
                            fill={'#000'}
                            style={{
                                marginRight: '15px',
                            }}
                        />
                    </motion.div>
                )}
            </motion.div>
        </div>
        <div
            className="sendGiftGreetingButton"
            style={styles.actionButtonContainer}
        >
            <motion.div
                whileTap={{scale: 0.9}}
                style={{
                    width: '80%',
                }}
                onTap={handleClose}
            >
                <motion.div
                    style={styles.keepSwipingButton}
                >
                    <span style={{marginLeft: '20px', fontSize: '17px'}}>Keep swiping</span>
                    <i className="fa-solid fa-caret-down" style={{marginRight: '20px'}}></i>
                </motion.div>
            </motion.div>
        </div>

        <motion.div
            whileTap={{scale: 0.8}}
            onTap={handleClose}
            className="sendGiftCloseButton"
            style={styles.closeButtonContainer}
        >
            <motion.div>
                <i className="fa-solid fa-xmark" style={styles.closeButton}/>
            </motion.div>
        </motion.div>
    </div>);
};

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: UIConfig.Colors.Background.Light
    },
    sendGiftTextContainer: {
        width: '80%',
    },
    sendGiftLogoContainer: {
        width: '100%',
        height: '20%',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    giftLogoImage: {
        width: '130px',
        height: '130px',
    },
    sendGiftTextArea: {
        width: '100%',
        height: '65px',
    },
    headlineStyle: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: '40px',
        fontWeight: 700,
        color: 'rgb(39, 46, 58)',
        marginBottom: '0px',
        letterSpacing: '1px',
    },
    subtextStyle: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: '15px',
        letterSpacing: '0.1px',
        color: '#000',
        marginTop: '10px',
        lineHeight: '16px',
    },
    sendGiftButton: {
        width: '100%',
        height: '50px',
        color: 'black',
        border: 'none',
        borderRadius: '45px',
        background: UIConfig.Colors.Primary.Main,
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        outline: 'none',
        textAlign: 'center',
        appearance: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px', // Optional shadow
        fontWeight: 500,
    },
    keepSwipingButton: {
        width: '100%',
        height: '50px',
        color: '#000',
        background: UIConfig.Colors.Background.Medium,
        fontSize: '17px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontWeight: 500,
        borderRadius: '25px',
    },
    closeButton: {
        width: '45px',
        height: '45px',
        color: '#FFF',
        border: 'none',
        borderRadius: '23px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        textAlign: 'center',
        appearance: 'none',
        cursor: 'pointer',
        background: 'rgb(220 220 220)',
        fontSize: '24px',
    },
    closeButtonContainer: {
        position: 'absolute', right: '20px', top: '10px',
    },
    actionButtonContainer: {
        marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
};

export default SendGiftPopup;
