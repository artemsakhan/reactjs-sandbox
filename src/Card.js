import React, {useRef} from 'react';
import { motion, useMotionValue, useAnimationControls } from 'framer-motion';
import './index.css';
import CardContent from "./CardContent";
import ControlButtons from "./ControlButtons";
import CardLabelStack from "./CardLabelStack";
import CardFeature from "./CardFeature";

const likeOverlayColor = '#ff0000'
const passOverlayColor = '#2cd868';

// Card component
const Card = ({ card, onSwipe }) => {
    const animControls = useAnimationControls();
    const x = useMotionValue(0);

    const onDrag = (event, info) => {
        event.preventDefault();
        event.stopPropagation();

        const offsetX = Math.min(Math.abs(info.offset.x), 500);
        const opacity = (offsetX / 500) * 0.5;

        const color = info.offset.x > 0 ? passOverlayColor : likeOverlayColor;

        if (overlayRef.current) {
            overlayRef.current.style.opacity = opacity;
            overlayRef.current.style.background = color;
        }
    };

    const onDragEnd = (event, info) => {

        if (Math.abs(info.offset.x) > 150) {
            window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid')

            const direction = info.offset.x < 0 ? -1 : 1;
            animControls.start({
                x: direction * 500,
                rotate: direction * 20,
                transition: { duration: 0.4 },
                transitionEnd: { display: 'none' },
            }).then(() => onSwipe(card.id))
        } else {
            if (overlayRef.current) {
                overlayRef.current.style.opacity = 0;
            }

            animControls.start({ x: 0, transition: { duration: 0.3 } });
        }
    };

    const overlayRef = useRef(null);

    return (
        <motion.div
            drag={true}
            style={{
                x: x,
                ...styles.containerStyle
            }}
            animate={animControls}
            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
            dragSnapToOrigin
            onDrag={onDrag}
            onDragEnd={onDragEnd}
        >
            <div className="card-content" style={styles.contentStyle}>
                <div ref={overlayRef} style={styles.overlayStyles}/>
                <CardContent card={card}/>
                <CardFeature/>
                {/*<CardLabelStack/>*/}
                <ControlButtons/>
            </div>
        </motion.div>
    );
};

const styles = {
    overlayStyles: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        background: 'transparent',
        opacity: 0, // This will be controlled via the ref
        pointerEvents: 'none',
        zIndex: '1',
        borderRadius: '35px',
    },
    containerStyle: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        touchAction: "none",
        borderRadius: '35px',
        overflow: 'hidden',
    },
    contentStyle: {
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
    },
}
export default Card;