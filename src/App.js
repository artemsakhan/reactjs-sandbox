import React, {useState} from 'react';
import './index.css';
import {dummyData} from "./dummy";
import EmptyCard from "./Card/EmptyCard";
import Card from "./Card/Card";
import {AnimatePresence} from "framer-motion";
import NewMatchPopup from "./Popups/NewMatchPopup";
import Modal from "./Modal/Modal";
import SendGiftPopup from "./Popups/SendGiftPopup";
import Tabbar from "./Tabbar";
import UIConfig from "./UIConfig";

const App = () => {
    const [matchCandidates, setMatchCandidates] = useState(dummyData.MatchCandidates);
    const [newMatchOpen, setNewMatchOpen] = useState(false);
    const [sendGiftOpen, setSendGiftOpen] = useState(false);

    const closeNewMatch = () => setNewMatchOpen(false);
    const openNewMatch = () => setNewMatchOpen(true);
    const closeSendGift = () => setSendGiftOpen(false);
    const openSendGift = (userId = null) => setSendGiftOpen(true);

    const handleLike = (id) => {
        setMatchCandidates((prevCandidates) => prevCandidates.filter(card => card.id !== id));
        openNewMatch(true);
    };

    const handlePass = (id) => {
        setMatchCandidates((prevCandidates) => prevCandidates.filter(card => card.id !== id));
    }
    return (
        <div className="App" style={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            background: UIConfig.Colors.BackgroundDark,
        }}>
            <div className="container" style={{
                width: '100%',
                height: 'calc(100% - 80px)',
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
                    {newMatchOpen && (
                        <Modal handleClose={closeNewMatch}>
                            <NewMatchPopup handleClose={closeNewMatch}/>
                        </Modal>
                    )}
                    {sendGiftOpen && (
                        <Modal handleClose={closeSendGift}>
                            <SendGiftPopup handleClose={closeSendGift}/>
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
                            handleSendGift={openSendGift}
                        />
                    ))
                ) : (
                    <EmptyCard/>
                )}
            </div>
            <Tabbar/>
        </div>
    );
};

export default App;