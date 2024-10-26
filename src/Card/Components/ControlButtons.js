import React from "react";
import {motion} from "framer-motion"; // Import Framer Motion
import '@fortawesome/fontawesome-free/css/all.min.css';
import UIConfig from "../../UIConfig";

const ControlButtons = ({handleLike, handlePass}) => {
    return (
        <div style={styles} className='cardControlButtons'>
            <motion.div
                style={{
                    marginLeft: '11px',
                    ...buttonStyle,
                    ...UIConfig.Card.PassButton,
                }}
                onClick={handlePass}
                whileTap={{scale: 0.9}}
            >
                <i className="fa-solid fa-xmark"></i>
            </motion.div>
            <motion.div
                style={{
                    marginRight: '11px',
                    ...buttonStyle,
                }}
                whileTap={{scale: 0.9}}
                onClick={handleLike}
            >
                <i className="fa-solid fa-check"></i>
            </motion.div>
        </div>
    );
}

const styles = {
    position: 'relative',
    height: '70px',
    width: '100%',
    background: UIConfig.Card.Content.background,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomLeftRadius: UIConfig.Card.Content.borderRadius,
    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
    borderTop: 'none',
    marginTop: '10px',
};

const buttonStyle = {
    ...UIConfig.Card.LikeButton,
    width: '45%',
    height: '60px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
};

export default ControlButtons;
