import {motion} from "framer-motion";
import UIConfig from "../../../../UIConfig";
import React from "react";

const OkayButton = ({onClick}) => {
    return (
        <motion.div
            whileTap={{scale: 0.9}}
            style={buttonStyle}
            onClick={onClick}
        >
            <span style={{fontSize: '17px'}}>Okay</span>
        </motion.div>
    );
};


const buttonStyle = {
    position: 'absolute',
    bottom: '15px',
    width: 'calc(100% - 60px)',
    height: '50px',
    color: '#FFF',
    border: 'none',
    borderRadius: '45px',
    background: '#000',
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    fontWeight: 500,
    marginBottom: '10px',
};

export default OkayButton;