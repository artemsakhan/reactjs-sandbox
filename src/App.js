import React, {useState, useEffect} from 'react';
import './index.css';
import {dummyData} from "./dummy";
import EmptyCard from "./EmptyCard";
import Card from "./Card";

const App = () => {
    const [matchCandidates, setMatchCandidates] = useState(dummyData.MatchCandidates);

    const handleLike = (id) => {
        setMatchCandidates((prevCandidates) => prevCandidates.filter(card => card.id !== id));
    };

    const handlePass = (id) => {
        setMatchCandidates((prevCandidates) => prevCandidates.filter(card => card.id !== id));
    }

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
                {matchCandidates.length > 0 ? (
                    matchCandidates.map((candidate, index) => (
                        <Card
                            key={index}
                            matchCandidate={candidate}
                            handleLike={handleLike}
                            handlePass={handlePass}
                        />
                    ))
                ) : (
                    <EmptyCard/>
                )}
            </div>
            <div style={{
                width: '100%',
            }}>
                <p>Tab bar 4</p>
            </div>
        </div>
    );
};

export default App;