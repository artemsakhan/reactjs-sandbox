import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import '@fortawesome/fontawesome-free/css/all.min.css';

const ControlButtons = ({ handleLike, handlePass }) => {
    return (
        <div style={styles} className='cardControlButtons'>
            <motion.div
                style={{
                    background: 'white',
                    marginLeft: '11px',
                    ...buttonStyle,
                }}
                onClick={handlePass}
                whileTap={{ scale: 0.9 }}
            >
                <i className="fa-solid fa-xmark"></i>
            </motion.div>
            <motion.div
                style={{
                    background: 'rgb(241, 255, 10)',
                    marginRight: '11px',
                    ...buttonStyle,
                }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLike}
            >
                <i className="fa-solid fa-check"></i>
            </motion.div>
        </div>
    );
}

// Container styles
const styles = {
    position: 'relative',
    height: '70px',
    width: '100%',
    background: '#272e3a',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomLeftRadius: '35px', // Rounded top-left corner
    borderBottomRightRadius: '35px', // Rounded top-right corner
    // border: '1px solid #d3c9c966',
    borderTop: 'none',
    marginTop: '10px',
};

// Button styles with reset
const buttonStyle = {
    width: '45%',
    height: '60px',
    color: 'black', // Set text color
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
    // marginTop: '10px',
};

export default ControlButtons;
