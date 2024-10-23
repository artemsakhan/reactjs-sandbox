import React, {useState} from 'react';
import './index.css';
import {dummyData} from "./dummy";
import EmptyCard from "./Card/EmptyCard";
import Card from "./Card/Card";
import {AnimatePresence} from "framer-motion";
import NewMatchPopup from "./NewMatchPopup";
import Modal from "./Modal";

const App = () => {
    const [matchCandidates, setMatchCandidates] = useState(dummyData.MatchCandidates);
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const handleLike = (id) => {
        setMatchCandidates((prevCandidates) => prevCandidates.filter(card => card.id !== id));
        setModalOpen(true);
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
                overflow: "hidden",
                position: "relative",
            }}>
                <AnimatePresence
                    // Disable any initial animations on children that
                    // are present when the component is first rendered
                    initial={false}
                    // Only render one component at a time.
                    // The exiting component will finish its exit
                    // animation before entering component is rendered
                    mode={'wait'}
                    // Fires when all exiting nodes have completed animating out
                    onExitComplete={() => null}
                >
                    {modalOpen && (
                        <Modal modalOpen={modalOpen} handleClose={close}>
                            <NewMatchPopup handleClose={close}/>
                        </Modal>
                    )}
                </AnimatePresence>
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