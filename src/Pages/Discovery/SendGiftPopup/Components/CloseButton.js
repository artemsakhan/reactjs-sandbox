import {motion} from "framer-motion";
import React from "react";

const CloseRoundButton = ({onClick}) => {
    return (
        <motion.div
            whileTap={{scale: 0.8}}
            onTap={onClick}
            className="sendGiftCloseButton"
            style={closeButtonContainerStyle}
        >
            <motion.div>
                <i className="fa-solid fa-xmark" style={closeButtonStyle}/>
            </motion.div>
        </motion.div>
    )
}

const closeButtonContainerStyle = {
    position: 'absolute',
    top: '15px',
    right: '10px',
    borderRadius: '35px',
}

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

export default CloseRoundButton;