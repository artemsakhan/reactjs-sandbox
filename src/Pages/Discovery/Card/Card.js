    import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {motion, useAnimationControls, useMotionValue} from 'framer-motion';
import Content from "./Components/Content";
import ActionButtons from "./Components/ActionButtons";
import Label from "./Components/Label";
import UIConfig from "../../../UIConfig";
import TimeShape from "../../../Shapes/TimeShape";
import LabelNewShape from "../../../Shapes/LabelNewShape";
import LabelActiveShape from "../../../Shapes/LabelActiveShape";

const Card = forwardRef((props, ref) => {
    const {
        matchCandidate,
        handleLike,
        handlePass,
        openSendGiftPopup,
        isFrontCard,
    } = props;

    const animControls = useAnimationControls();
    const x = useMotionValue(0);

    const cardRef = useRef(null); // Ref for card element

    const swipeRight = (candidate, type = null) => {
        const duration = type === 'slow' ? 0.6 : 0.4;
        cardRef.current.classList.add('swiping');

        animControls.start({
            x: 500,
            rotate: 20,
            transition: {duration: duration},
            transitionEnd: {display: 'none'},
        }).then(() => {
            cardRef.current.classList.remove('swiping');
            handleLike(candidate);
        });
    };

    const swipeLeft = (candidate, type = null) => {
        window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

        const duration = type === 'slow' ? 0.6 : 0.4;
        cardRef.current.classList.add('swiping');

        animControls.start({
            x: -500,
            rotate: -20,
            transition: {duration: duration},
            transitionEnd: {display: 'none'},
        }).then(() => {
            cardRef.current.classList.remove('swiping');
            handlePass(candidate);
        });
    };

    useImperativeHandle(ref, () => ({
        swipeRight: (type) => swipeRight(matchCandidate, type),
        swipeLeft: (type) => swipeLeft(matchCandidate, type),
    }));

    const snapBack = () => {
        animControls.start({x: 0, transition: {duration: 0.3}});
    };

    return (
        <motion.div
            ref={cardRef}
            drag={isFrontCard}
            style={{
                x: x,
                ...containerStyle
            }}
            animate={animControls}
            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
            dragSnapToOrigin
            onDragEnd={(event, info) => {
                if (Math.abs(info.offset.x) > 150) {
                    window.Telegram.WebApp.HapticFeedback.impactOccurred('rigid');

                    if (info.offset.x > 0) {
                        swipeRight(matchCandidate);
                    } else {
                        swipeLeft(matchCandidate);
                    }
                } else {
                    snapBack();
                }
            }}
        >
            <div className="cardContent" style={contentStyle}>
                <div style={{
                    position: 'absolute',
                    top: '44px',
                    left: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                }}>
                    {/* Active now */}
                    <div style={{
                        height: '35px',
                        background: '#feebd8',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '19px',
                        marginBottom: '5px',
                        zIndex: 1,
                    }}>
                        <LabelActiveShape
                            width={23}
                            height={23}
                            fillColor={'#e54d09'}
                            styles={{
                                marginLeft: '4px',
                            }}
                        />
                        <span style={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: '#e54d09',
                            marginLeft: '3px',
                            marginRight: '8px',
                            letterSpacing: '0.3px'
                        }}>Active now</span>
                    </div>

                    {/* New label */}
                    <div style={{
                        height: '35px',
                        background: 'rgb(246 228 235)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '19px',
                        zIndex: 1,
                    }}>
                        <LabelNewShape
                            width={20}
                            height={20}
                            fillColor={'rgb(182 53 104)'}
                            styles={{
                                marginLeft: '5px',
                                transform: 'rotate(-15deg)'
                            }}
                        />
                        <span style={{
                            fontFamily: '"Inter", sans-serif',
                            fontWeight: 500,
                            fontSize: '14px',
                            color: 'rgb(182 53 104)',
                            marginLeft: '4px',
                            marginRight: '8px',
                            letterSpacing: '0.3px'
                        }}>Just joined</span>
                    </div>
                </div>
                <Content
                    matchCandidate={matchCandidate}
                    openSendGiftPopup={openSendGiftPopup}
                />
                {matchCandidate.isActive ? <Label text="Active"/> : null}
                <ActionButtons
                    handleLike={() => isFrontCard && swipeRight(matchCandidate, 'slow')}
                    handlePass={() => isFrontCard && swipeLeft(matchCandidate, 'slow')}
                />
            </div>
        </motion.div>
    );
});

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
