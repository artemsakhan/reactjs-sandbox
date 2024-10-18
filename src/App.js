import React, {useState, useEffect} from 'react';
import './index.css';
import {dummyData} from "./dummy";
import EmptyCard from "./EmptyCard";
import Card from "./Card";

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
                    <EmptyCard/>
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