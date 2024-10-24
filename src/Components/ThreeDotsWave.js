import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
    display: "block",
    width: "10px",
    height: "10px",
    backgroundColor: "black",
    borderRadius: "50%"
};

const LoadingContainer = {
    width: "100px",
    height: "60px",
    display: "flex",
    justifyContent: "space-around"
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: "100%"
    }
};

const DotTransition = {
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut"
};

const ThreeDotsWave = ({ style }) => {
    return (
        <div
            style={style}
        >
            <motion.div
                style={LoadingContainer}
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                    transition={DotTransition}
                />
            </motion.div>
        </div>
    );
}

const Wrapper = ({ style }) => {
    return (
        <ThreeDotsWave style={style}/>
    )
};

export default Wrapper;