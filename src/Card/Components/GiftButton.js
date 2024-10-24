import { motion } from 'framer-motion';
import React from "react";
import DiamondShape from "../../Shapes/DiamondShape";

const GiftButton = ({ handleSendGift }) => {
    return (
        <motion.div
            style={{
                background: 'white',
                marginRight: '11px',
                ...buttonStyle,
            }}
            whileTap={{scale: 0.9}}
            onTap={handleSendGift}
        >
            <DiamondShape/>
        </motion.div>
    )
}

// Button styles with reset
const buttonStyle = {
    position: 'absolute',
    bottom: '85px',
    right: '5px',
    width: '70px',
    height: '70px',
    color: '#272e3a', // Set text color
    border: 'none', // Remove border
    borderRadius: '35px', // Optional: rounded corners
    fontSize: '24px', // Size of the icon
    cursor: 'pointer', // Change cursor to pointer on hover
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0, // Remove default padding
    outline: 'none', // Remove outline on focus
    textAlign: 'center', // Center the text/icon
    appearance: 'none', // Remove default browser styling
};

export default GiftButton;
