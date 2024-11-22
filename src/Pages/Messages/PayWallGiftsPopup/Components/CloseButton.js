import {motion} from "framer-motion";
import React from "react";
import CloseShape from "../../../../Shapes/CloseShape";

const CloseButton = ({handleClose}) => {
    return (
        <motion.div
            whileTap={{scale: 0.8}}
            onTap={handleClose}
            style={containerStyle}
        >
            <motion.div>
                <CloseShape fillColor={'#FFF'} width={35} height={35} strokeWidth={1}/>
            </motion.div>
        </motion.div>
    )
}

const buttonStyle = {
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

const containerStyle = {
    position: 'absolute',
    right: '10px',
    top: '10px',
};

export default CloseButton;