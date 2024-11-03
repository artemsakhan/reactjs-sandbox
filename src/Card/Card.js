import React, {useEffect, useRef} from 'react';
import {motion, useAnimationControls, useMotionValue} from 'framer-motion';
import '../index.css';
import CardContent from "./Components/CardContent";
import ControlButtons from "./Components/ControlButtons";
import CardFeature from "./Components/CardFeature";
import UIConfig from "../UIConfig";

const Card = (props) => {
    const { matchCandidate, handleLike, handlePass, handleSendGift } = props;

    const animControls = useAnimationControls();
    const x = useMotionValue(0);

    const cardRef = useRef(null); // Ref for card element

    useEffect(bodyScrollControl, []);

    const swipeRight = (id, type = null) => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

        const duration = type === 'slow' ? 0.6 : 0.4;
        cardRef.current.classList.add('swiping');

        animControls.start({
            x: 500,
            rotate: 20,
            transition: { duration: duration },
            transitionEnd: { display: 'none' },
        }).then(() => {
            cardRef.current.classList.remove('swiping');
            handleLike(id);
        });
    };

    const swipeLeft = (id, type = null) => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

        const duration = type === 'slow' ? 0.6 : 0.4;
        cardRef.current.classList.add('swiping');

        animControls.start({
            x: -500,
            rotate: -20,
            transition: { duration: duration },
            transitionEnd: { display: 'none' },
        }).then(() => {
            cardRef.current.classList.remove('swiping');
            handlePass(id);
        });
    };

    const snapBack = () => {
        animControls.start({ x: 0, transition: { duration: 0.3 } });
    };

    return (
        <motion.div
            ref={cardRef}
            drag={true}
            style={{
                x: x,
                ...containerStyle
            }}
            animate={animControls}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragSnapToOrigin
            onDragEnd={(event, info) => {
                if (Math.abs(info.offset.x) > 150) {
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

                    if (info.offset.x > 0) {
                        swipeRight(matchCandidate.id);
                    } else {
                        swipeLeft(matchCandidate.id);
                    }
                } else {
                    snapBack();
                }
            }}
        >
            <div className="cardContent" style={contentStyle}>
                <CardContent
                    matchCandidate={matchCandidate}
                    handleSendGift={handleSendGift}
                />
                {matchCandidate.isActive ? <CardFeature text="Active"/> : null}
                <ControlButtons
                    handleLike={() => swipeRight(matchCandidate.id, 'slow')}
                    handlePass={() => swipeLeft(matchCandidate.id, 'slow')}
                />
            </div>
        </motion.div>
    );
};


const bodyScrollControl = () => {
    // Disable scrolling in the entire app
    document.body.style.overflow = 'hidden';

    // Disable scrolling on touch devices
    const preventScroll = (e) => {
        e.preventDefault();
    };

    window.addEventListener('touchmove', preventScroll, {passive: false});

    return () => {
        // Re-enable scrolling when the component unmounts
        document.body.style.overflow = '';
        window.removeEventListener('touchmove', preventScroll);
    };
}

const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    touchAction: "none",
    background: 'transparent',
    overflow: 'hidden',
};

const contentStyle = {
    width: 'calc(100% - 25px)',
    height: 'calc(100% - 25px)',
    background: UIConfig.Card.Content.background,
    borderRadius: UIConfig.Card.Content.borderRadius,
    position: "relative",
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export default Card;
