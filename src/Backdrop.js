import {motion} from "framer-motion";


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

export default Backdrop;

const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: 999,
};