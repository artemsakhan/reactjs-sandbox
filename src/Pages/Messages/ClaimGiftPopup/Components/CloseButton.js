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
            <div style={senderContainerStyle}>

            </div>
            <motion.div>
                <CloseShape fillColor={'#FFF'} width={35} height={35} strokeWidth={2}/>
            </motion.div>
        </motion.div>
    )
}

const containerStyle = {
    position: 'absolute',
    right: '16px',
    top: '16px',
};

const senderContainerStyle = {

}
export default CloseButton;