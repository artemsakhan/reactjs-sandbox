import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import ChatShape from "./Shapes/ChatShape";
import HeartShape from "./Shapes/HeartShape";

const NewMatchPopup = ({handleClose}) => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Trigger the animation after the component has mounted
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 600); // Match this with your animation delay

        // Cleanup timer if component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className="newMatchContainer"
            style={styles.container}
        >
            <div className="newMatchPhotos" style={styles.photoContainer}>
                <motion.div
                    initial={{ x: '-100vw', rotate: -30 }}
                    animate={isAnimated ? { x: '-40%', rotate: -15 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 40, duration: 1.5 }}
                    style={styles.animatedPhoto}
                >
                    <img
                        style={styles.photoItem}
                        src="https://kyivdate.app/photos/MXBLOrA/3e23b.624abe1af4d18.800x600.webp"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    initial={{ x: '100vw', rotate: 30 }}
                    animate={isAnimated ? { x: '40%', rotate: 10 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 40, duration: 1.5 }}
                    style={{
                        top: '40%',
                        transform: 'translateY(-30%)',
                        ...styles.animatedPhoto,
                    }}
                >
                    <img
                        style={styles.photoItem}
                        src="https://kyivdate.app/photos/MXBLOrA/ob9dd.624abe7577647.800x600.webp"
                        alt=""
                    />
                </motion.div>

                <motion.div
                    style={{
                        zIndex: 3,
                        ...styles.heartIcon,
                    }}
                    initial={{ opacity: 0 }}
                    animate={isAnimated ? { opacity: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 40, duration: 2 }}
                >
                    <HeartShape width={'35px'} height={'35px'} fill={'darkred'}/>
                </motion.div>
            </div>

            <motion.div
                className="newMatchText"
                style={{
                    marginTop: '10px',
                }}
                // initial={{opacity: 0}}
                // animate={{opacity: 1}} // Fade in
                // exit={{opacity: 0}} // Fade out
                // transition={{type: 'spring', stiffness: 50, damping: 10, duration: 2, delay: 0.6}}
            >
                <p style={styles.headlineStyle}>You matched!</p>
                <p style={{...styles.subtextStyle}}>
                    Reach out and start chatting.<br/>
                    Jessica is interested too!
                </p>
            </motion.div>

            <motion.div
                className="newMatchGreetingButton"
                style={{marginTop: '5px',}}
                whileTap={{scale: 0.8}}
            >
                <motion.div
                    style={{
                        ...styles.greetingButton,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        touchAction: 'none',
                    }}
                    // initial={{rotate: -30, opacity: 1, scale: 0}} // Start from scale 0
                    // animate={{rotate: 0, opacity: 1, scale: 1}} // Scale to 1
                    // transition={{type: 'spring', stiffness: 50, damping: 10, duration: 2, delay: 0.6}}
                >
                    <ChatShape width={'35px'} height={'35px'} fill={'#FFF'}/>
                </motion.div>
            </motion.div>

            <motion.div
                whileTap={{scale: 0.8}}
                onTap={handleClose}
                className="newMatchCloseButton"
                style={styles.closeButtonContainer}
            >
                <motion.div
                    // initial={{rotate: -20, opacity: 1, scale: 0}} // Start from scale 0
                    // animate={{rotate: 0, opacity: 1, scale: 1}} // Scale to 1
                    // exit={{scale: 0}} // Scale down on exit
                    // transition={{type: 'spring', stiffness: 50, damping: 10, duration: 2, delay: 0.6}}
                    style={{
                        background: 'rgb(241, 255, 10)',
                        ...styles.closeButton,
                    }}
                    whileTap={{scale: 0.9}}
                >
                    <i className="fa-solid fa-xmark" style={styles.closeIcon}/>
                </motion.div>
            </motion.div>
        </div>
    );
};

const styles = {
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        background: '#fff',
    },
    photoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        position: 'relative',
        marginTop: '30px',
    },
    animatedPhoto: {
        position: 'absolute',
    },
    photoItem: {
        width: '150px',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '15px',
        boxShadow: '2px -2px 10px rgba(0, 0, 0, 0.2)',
    },
    headlineStyle: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: '2.3rem',
        fontWeight: 700,
        color: '#1C274C',
        marginBottom: '0px',
    },
    subtextStyle: {
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
        fontSize: '14px',
        color: '#6E7D97',
        marginTop: '5px',
        lineHeight: '16px',
    },
    heartIcon: {
        background: '#FFF',
        width: '50px',
        height: '50px',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    greetingButton: {
        width: '70px',
        height: '70px',
        color: 'white',
        border: 'none',
        borderRadius: '45px',
        background: 'rgb(39 46 58 / 20%)',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        textAlign: 'center',
        appearance: 'none',
    },
    closeButton: {
        background: 'rgb(39 46 58 / 20%)',
        width: '45px',
        height: '45px',
        color: '#fff',
        border: 'none',
        borderRadius: '23px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        textAlign: 'center',
        appearance: 'none',
        cursor: 'pointer',
    },
    closeIcon: {
        color: '#FFF',
        fontSize: '17px',
    },
    closeButtonContainer: {
        position: 'absolute',
        left: '15px',
        top: '10px',
    },
};

export default NewMatchPopup;
