import {motion} from "framer-motion";
import UIConfig from "../../../../UIConfig";
import React from "react";

const ClaimButton = ({onClick}) => {
    return (
        <motion.div
            whileTap={{scale: 0.9}}
            style={buttonStyle}
            onClick={onClick}
        >
            <span style={{fontSize: '17px'}}>Claim 0.014 TON</span>
        </motion.div>
    );
};


const buttonStyle = {
    position: 'absolute',
    bottom: '15px',
    width: 'calc(100% - 60px)',
    height: '50px',
    color: UIConfig.Colors.Primary,
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

export default ClaimButton;