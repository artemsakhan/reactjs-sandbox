import Backdrop from "./Backdrop";
import {motion} from "framer-motion";
import React from "react";


const Modal = ({children, handleClose}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                initial={{opacity: 0}} // Start with opacity 0
                animate={{opacity: 1}} // Animate to opacity 1
                exit={{opacity: 0}} // Animate to opacity 0 on exit
                transition={{duration: 0.2}} // Adjust duration as needed
                style={styles.modalStyle}
            >
                {children}
            </motion.div>
        </Backdrop>
    )
}

const styles = {
    modalStyle: {
        position: "absolute", // Change to absolute
        width: '100%',
        height: '100%',
        zIndex: 1000,
        padding: "0px",
    },
}

export default Modal;