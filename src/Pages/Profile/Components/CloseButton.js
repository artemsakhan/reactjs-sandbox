import {motion} from "framer-motion";
import React from "react";
import CloseShape from "../../../Shapes/CloseShape";
import UIConfig from "../../../UIConfig";

const CloseButton = ({handleClose}) => {
    return (
        <motion.div
            whileTap={{scale: 0.8}}
            onTap={handleClose}
            style={containerStyle}
        >
            <CloseShape fillColor={UIConfig.Colors.BackgroundLight} width={35} height={35} strokeWidth={1}/>
        </motion.div>
    )
}

const containerStyle = {
    width: '36px',
    height: '36px',
    // borderRadius: '50%',
    // background: '#F4F4F4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
};

export default CloseButton;