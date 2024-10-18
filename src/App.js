import React, {useState, useEffect, useRef} from 'react';
import { motion, useMotionValue, useTransform, useAnimationControls } from 'framer-motion';
import './index.css';
import ImageSlider from "./ImageSlider";
import {dummyData} from "./dummy";
import ControlButtons from "./ControlButtons";
import CardInfo from "./CardInfo";
import EmptyCard from "./EmptyCard";
import CardLabelStack from "./CardLabelStack";
import CardLabels from "./CardLabels";

const likeOverlayColor = '#ff0000'
const passOverlayColor = '#2cd868';

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

const overlayStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    background: 'transparent',
    opacity: 0, // This will be controlled via the ref
    pointerEvents: 'none',
    zIndex: '1',
    borderRadius: '35px',
}

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
                ...cardStyles
            }}
            animate={animControls}
            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
            dragSnapToOrigin
            onDrag={onDrag}
            onDragEnd={onDragEnd}
        >
            <div className="card-content" style={cardContentStyles}>
                <div ref={overlayRef} style={overlayStyles}/>
                <ImageSlider card={card}/>
                {/*<CardInfo aboutMe={card.aboutMe}/>*/}
                <CardLabels/>
                <CardLabelStack/>
                <ControlButtons/>
            </div>
        </motion.div>
    );
};


const App = () => {
    const [cards, setCards] = useState(dummyData.MatchCandidates);

    const handleSwipe = (id) => {
        console.log('remove id', id)
        setCards((prevCards) => prevCards.filter(card => card.id !== id)); // Remove the card with the specified id
    };

    useEffect(() => {
        // Disable scrolling in the entire app
        document.body.style.overflow = 'hidden';

        // Disable scrolling on touch devices
        const preventScroll = (e) => {
            e.preventDefault();
        };

        window.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            // Re-enable scrolling when the component unmounts
            document.body.style.overflow = '';
            window.removeEventListener('touchmove', preventScroll);
        };
    }, []);

    return (
        <div className="App" style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
        }}>
            <div className="container" style={{
                width: '100%',
                height: 'calc(100% - 50px)',
                overflow:"hidden",
                position: "relative",
            }}>
                {cards.length > 0 ? (
                    cards.map((card, index) => (
                        <Card
                            key={index}
                            card={card}
                            onSwipe={handleSwipe}
                        />
                    ))
                ) : (
                    <EmptyCard
                        cardStyles={cardStyles}
                        cardContentStyles={cardContentStyles}
                    />
                )}
            </div>
            <div style={{
                width: '100%',
            }}>
                <p>Tab bar 1</p>
            </div>
        </div>
    );
};

export default App;