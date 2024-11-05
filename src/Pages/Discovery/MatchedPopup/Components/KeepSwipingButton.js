import {motion} from "framer-motion";
import React from "react";
import UIConfig from "../../../../UIConfig";

const KeepSwipingButton = ({ handleClose }) => {
    return (
        <div
            style={containerStyle}
        >
            <motion.div
                whileTap={{scale: 0.9}}
                onTap={handleClose}
                style={{width: '100%'}}
            >
                <motion.div
                    style={buttonStyle}
                >
                    <span style={{fontSize: '17px'}}>Keep swiping</span>
                    <i className="fa-solid fa-caret-down" style={{marginLeft: '10px'}}></i>
                </motion.div>
            </motion.div>
        </div>
    )
};

const containerStyle = {
    width: 'calc(100% - 65px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const buttonStyle = {
    width: '100%',
    height: '50px',
    border: 'none',
    borderRadius: '45px',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    fontWeight: 500,
    marginBottom: '10px',
    color: '#FFF',
    background: 'none',
};

export default KeepSwipingButton;
