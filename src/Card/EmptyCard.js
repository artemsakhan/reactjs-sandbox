import {motion, useMotionValue} from "framer-motion";
import React from "react";

const cardContentStyles = {
    width: 'calc(100% - 30px)',
    height: 'calc(100% - 30px)',
    background: '#272e3a',
    borderRadius: '35px',
    border: '1px solid #d3c9c966',
    position: "relative",
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const cardStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    touchAction: "none",
    borderRadius: '35px',
    overflow: 'hidden',
}

const EmptyCard = ({}) => {
    const motionValue = useMotionValue(0);

    return (
        <motion.div
            drag={true}
            style={{
                x: motionValue,
                ...cardStyles,
            }}
            dragListener={false}
        >
            <div style={{
                ...cardContentStyles,
                background: '#eee',
            }}>
            </div>
        </motion.div>
    );
};

export default EmptyCard;