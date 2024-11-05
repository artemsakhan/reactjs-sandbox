import {motion} from "framer-motion";
import ChatShape from "../../../../Shapes/ChatShape";
import React from "react";
import UIConfig from "../../../../UIConfig";

const SendMessageButton = () => (
    <div
        className="greetingButton"
        style={containerStyle}
    >
        <motion.div whileTap={{scale: 0.9}} style={{width: '100%'}}>
            <motion.div
                style={buttonStyle}
            >
                <span style={{fontSize: '17px'}}>Say Hi</span>
                <ChatShape fill={'#000'} width={20} height={20} style={{marginLeft: '10px'}}/>
            </motion.div>
        </motion.div>
    </div>
)

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
    color: '#000',
    background: UIConfig.Colors.Primary,
};

export default SendMessageButton;