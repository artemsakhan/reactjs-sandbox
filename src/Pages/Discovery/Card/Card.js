    import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {motion, useAnimationControls, useMotionValue} from 'framer-motion';
import Content from "./Components/Content";
import ActionButtons from "./Components/ActionButtons";
import Label from "./Components/Label";
import UIConfig from "../../../UIConfig";
import TimeShape from "../../../Shapes/TimeShape";
import LabelNewShape from "../../../Shapes/LabelNewShape";
import LabelActiveShape from "../../../Shapes/LabelActiveShape";
    import {SwipeAnimation} from "./Components/SwipeAnimation";
    import HeartSimpleOutlineShape from "../../../Shapes/HeartSimpleOutlineShape";

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
            {/*{isFrontCard && <SwipeAnimation x={x} />}*/}
            <div className="cardContent" style={contentStyle}>
                <div style={{
                    position: 'absolute',
                    top: '13px',
                    left: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        // height: '25px',
                        // background: '#feebd8',
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        // borderRadius: '19px',
                        // marginBottom: '5px',
                        zIndex: 1,
                    }}>

                                    <span style={{
                                        // fontFamily: "'Roboto', sans-serif"
                                        backgroundColor: UIConfig.Colors.Primary,
                                        color: '#000',
                                        fontFamily: '"SF Pro Rounded", "SF Pro Text", "San Francisco", system-ui, sans-serif',
                                        fontSize: '13px',
                                        // fontWeight: '600',
                                        padding: '7px 12px',
                                        borderRadius: '7px',
                                        borderTopLeftRadius: '20px',
                                        borderBottomRightRadius: '20px',
                                        lineHeight: 1,
                                        // display: 'flex',
                                        // justifyContent: 'center',
                                        // alignItems: 'center',
                                    }}>
                                        {/*<HeartSimpleOutlineShape width={13} height={13} style={{marginRight: '4px'}} fillColor={'#FFF'}/>*/}
                                        Just joined
                                    </span>
                    </div>

                    {/* New label */}
                    {/*<div style={{*/}
                    {/*    height: '35px',*/}
                    {/*    background: 'rgb(246 228 235)',*/}
                    {/*    display: 'flex',*/}
                    {/*    justifyContent: 'center',*/}
                    {/*    alignItems: 'center',*/}
                    {/*    borderRadius: '19px',*/}
                    {/*    zIndex: 1,*/}
                    {/*}}>*/}
                    {/*    <LabelNewShape*/}
                    {/*        width={20}*/}
                    {/*        height={20}*/}
                    {/*        fillColor={'rgb(182 53 104)'}*/}
                    {/*        styles={{*/}
                    {/*            marginLeft: '5px',*/}
                    {/*            transform: 'rotate(-15deg)'*/}
                    {/*        }}*/}
                    {/*    />*/}
                    {/*    <span style={{*/}
                    {/*        fontFamily: '"Inter", sans-serif',*/}
                    {/*        fontWeight: 500,*/}
                    {/*        fontSize: '14px',*/}
                    {/*        color: 'rgb(182 53 104)',*/}
                    {/*        marginLeft: '4px',*/}
                    {/*        marginRight: '8px',*/}
                    {/*        letterSpacing: '0.3px'*/}
                    {/*    }}>Just joined</span>*/}
                    {/*</div>*/}
                </div>
                <Content
                    matchCandidate={matchCandidate}
                    openSendGiftPopup={openSendGiftPopup}
                />
                {matchCandidate.isActive ? <Label text="Active"/> : null}
                <ActionButtons
                    handleLike={() => isFrontCard && swipeRight(matchCandidate, 'slow')}
                    handlePass={() => isFrontCard && swipeLeft(matchCandidate, 'slow')}
                    handleGift={openSendGiftPopup}
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
