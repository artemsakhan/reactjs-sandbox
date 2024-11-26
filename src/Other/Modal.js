import {motion} from "framer-motion";
import React from "react";

const Backdrop = ({children, onClick}) => {
    return (
        <motion.div
            onClick={onClick}
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={backdropStyles}
        >
            {children}
        </motion.div>
    );
};

const Modal = ({children, handleClose}) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal orange-gradient"
                initial={{opacity: 1}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.2}}
                style={modalStyle}
            >
                {children}
            </motion.div>
        </Backdrop>
    )
}

const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgb(0 0 0 / 60%)",
    zIndex: 999,
};

const modalStyle = {
    position: "absolute",
    width: '100%',
    height: '100%',
    zIndex: 1000,
    padding: "0px",
};

export default Modal;