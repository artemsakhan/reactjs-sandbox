import {motion, useMotionValue} from "framer-motion";
import React from "react";

const EmptyCard = ({ cardStyles, cardContentStyles }) => {
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
                <p>No cards</p>
            </div>
        </motion.div>
    );
};

export default EmptyCard;