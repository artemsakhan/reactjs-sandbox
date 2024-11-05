import { motion } from 'framer-motion';
import React from "react";
import DiamondShape from "../../../../Shapes/DiamondShape";

const GiftButton = ({ openSendGiftPopup }) => {
    return (
        <motion.div
            style={{
                background: 'white',
                marginRight: '11px',
                ...buttonStyle,
            }}
            whileTap={{scale: 0.9}}
            onTap={openSendGiftPopup}
        >
            <DiamondShape/>
        </motion.div>
    )
}

const buttonStyle = {
    position: 'absolute',
    bottom: '74px',
    right: '5px',
    width: '70px',
    height: '70px',
    color: '#272e3a',
    border: 'none',
    borderRadius: '35px',
    fontSize: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
};

export default GiftButton;
