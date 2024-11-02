import {motion, useMotionValue} from "framer-motion";
import React from "react";
import UIConfig from "../UIConfig";

const contentStyle = {
    width: 'calc(100% - 25px)',
    height: 'calc(100% - 25px)',
    background: UIConfig.Colors.BackgroundMedium,
    borderRadius: '35px',
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
    zIndex: 1,
}

const EmptyCard = ({children, zIndex = 1}) => {
    const motionValue = useMotionValue(0);

    return (
        <motion.div
            drag={true}
            style={{
                x: motionValue,
                ...cardStyles,
                zIndex,
            }}
            dragListener={false}
        >
            <div style={contentStyle}>
                <div style={{ width: '100%', height: '100%', position: 'relative'}}>
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

export default EmptyCard;