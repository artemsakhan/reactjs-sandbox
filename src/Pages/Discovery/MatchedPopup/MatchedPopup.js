import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SendMessageButton from "./Components/SendMessageButton";
import KeepSwipingButton from "./Components/KeepSwipingButton";
import CloseButton from "./Components/CloseButton";
import HeartExploadingLottie from "../../../Other/HeartExploadingLottie";



const MatchedPopup = ({handleClose}) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="newMatchContainer"
            style={containerStyle}
        >
            <div className="newMatchPhotos" style={photoContainerStyle}>
                <motion.div
                    initial={{opacity: 1, scale: 0.9, rotate: -10, x: -60}}
                    animate={isAnimated ? {opacity: 1, scale: 1, rotate: -10, x: -60} : {}}
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 1, delay: 0}}
                    style={animatedPhotoStyle}
                >
                    <img
                        style={photoItemStyle}
                        src="https://kyivdate.app/photos/MXBLOrA/3e23b.624abe1af4d18.800x600.webp"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    initial={{opacity: 1, scale: 0.9, rotate: 10, x: 60}}
                    animate={isAnimated ? {opacity: 1, scale: 1, rotate: 10, x: 60} : {}}
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 0.4, delay: 0.1}}
                    style={{...animatedPhotoStyle, top: '30%'}}
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
                    transition={{type: 'spring', stiffness: 300, damping: 40, duration: 0.4}}
                >
                    <div style={{position: 'absolute', left: 'calc(50% - 60px)', top: 'calc(53% - 60px)'}}>
                        <HeartExploadingLottie
                            width={120}
                            height={120}
                            shouldAnimate={isAnimated}
                        />
                    </div>
                </motion.div>
            </div>


            <div className="newMatchText" style={{marginTop: '7px'}}>
                <p style={headlineStyle}>It's a match!</p>
                <p style={{...subtextStyle}}>
                    Go ahead and make your move<br/>
                    Jessica's waiting
                </p>
            </div>


            <div style={footerContainerStyle}>
                <SendMessageButton/>
                <KeepSwipingButton handleClose={handleClose}/>
            </div>

            <CloseButton handleClose={handleClose}/>
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
    backgroundImage: 'radial-gradient( circle farthest-corner at 10% 20%,  rgb(39 25 52) 0%, rgb(19, 27, 24) 90% )',
    zIndex: 2,
};

const photoContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '45%',
    position: 'relative',
};

const footerContainerStyle = {
    width: '100%',
    position: 'absolute',
    bottom: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
    marginTop: '60px',
    letterSpacing: '1px',
};
const subtextStyle = {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    fontSize: '17px',
    letterSpacing: '0.3px',
    color: '#fff',
    marginTop: '10px',
    marginBottom: '45px',
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


export default MatchedPopup;
