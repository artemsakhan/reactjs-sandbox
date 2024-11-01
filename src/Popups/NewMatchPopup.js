import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import HeartSimpleShape from "../Shapes/HeartSimpleShape";
import UIConfig from "../UIConfig";
import ChatShape from "../Shapes/ChatShape";

const NewMatchPopup = ({handleClose}) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component has mounted
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 400); // Match this with your animation delay

        // Cleanup timer if component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="newMatchContainer"
            style={containerStyle}
        >
            <div className="newMatchPhotos" style={photoContainerStyle}>
                <motion.div
                    initial={{x: '-100vw', rotate: -30}}
                    animate={isAnimated ? {x: '-40%', rotate: -7} : {}}
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 1.2}}
                    style={animatedPhotoStyle}
                >
                    <img
                        style={photoItemStyle}
                        src="https://kyivdate.app/photos/MXBLOrA/3e23b.624abe1af4d18.800x600.webp"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    initial={{x: '100vw', rotate: 30}}
                    animate={isAnimated ? {x: '40%', rotate: 10} : {}}
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 1.2}}
                    style={{
                        top: '40%',
                        transform: 'translateY(-30%)',
                        ...animatedPhotoStyle,
                    }}
                >
                    <img
                        style={photoItemStyle}
                        src="https://kyivdate.app/photos/MXBLOrA/ob9dd.624abe7577647.800x600.webp"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    style={heartIconStyle}
                    initial={{opacity: 0}}
                    animate={isAnimated ? {opacity: 1} : {}}
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 1}}
                >
                    <HeartSimpleShape width={'35px'} height={'35px'} fill={'rgb(39, 46, 58)'}
                                      style={{marginTop: '3px'}}/>
                </motion.div>
            </div>

            <div className="newMatchText" style={{marginTop: '7px'}}>
                <p style={headlineStyle}>It's a match!</p>
                <p style={{...subtextStyle}}>
                    Reach out and start chatting.<br/>
                    Jessica is interested too!
                </p>
            </div>

            <div
                className="newMatchGreetingButton"
                style={actionContainerStyle}
            >
                <motion.div whileTap={{scale: 0.9}} style={{
                    width: '80%',
                }}>
                    <motion.div
                        style={greetingButtonStyle}
                    >
                        <span style={{fontSize: '17px'}}>Go To Chat</span>
                        <ChatShape fill={'#000'} width={20} height={20} style={{ marginLeft: '10px'}}/>
                    </motion.div>
                </motion.div>
            </div>
            <div
                className="newMatchGreetingButton"
                style={actionContainerStyle}
            >
                <motion.div
                    whileTap={{scale: 0.9}}
                    style={{
                        width: '80%',
                    }}
                    onTap={handleClose}
                >
                    <motion.div
                        style={keepSwipingButtonStyle}
                    >
                        <span style={{fontSize: '17px'}}>Keep swiping</span>
                        <i className="fa-solid fa-caret-down" style={{marginLeft: '10px'}}></i>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                whileTap={{scale: 0.8}}
                onTap={handleClose}
                className="newMatchCloseButton"
                style={closeButtonContainerStyle}
            >
                <motion.div>
                    <i className="fa-solid fa-xmark" style={closeButtonStyle}/>
                </motion.div>
            </motion.div>
        </div>
    );
};

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: UIConfig.Colors.BackgroundDark,
};

const photoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50%',
    position: 'relative',
    marginTop: '10px',
};

const animatedPhotoStyle = {
    position: 'absolute',
};

const photoItemStyle = {
    width: '162px',
    height: '230px',
    objectFit: 'cover',
    borderRadius: '15px',
    boxShadow: '2px -2px 10px rgba(0, 0, 0, 0.2)',
};
const headlineStyle = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '40px',
    fontWeight: 700,
    color: '#FFF',
    marginBottom: '0px',
    letterSpacing: '1px',
};
const subtextStyle = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '15px',
    letterSpacing: '0.3px',
    color: '#fff',
    marginTop: '10px',
    lineHeight: '16px',
};

const heartIconStyle = {
    zIndex: 3,
    position: 'absolute',
    top: 'calc(60% - 30px)',
    left: 'calc(50% - 30px)',
    background: '#FFF',
    width: '60px',
    height: '60px',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const greetingButtonStyle = {
    width: '100%',
    height: '50px',
    color: 'black',
    border: 'none',
    borderRadius: '45px',
    background: UIConfig.Colors.Primary,
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px', // Optional shadow
    fontWeight: 500,
};

const keepSwipingButtonStyle = {
    width: '100%',
    height: '50px',
    color: '#000',
    background: '#FFF',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    borderRadius: '25px',
};

const closeButtonStyle = {
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
    fontSize: '24px',
};

const closeButtonContainerStyle = {
    position: 'absolute',
    right: '20px',
    top: '10px',
};

const actionContainerStyle = {
    marginTop: '10px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export default NewMatchPopup;
