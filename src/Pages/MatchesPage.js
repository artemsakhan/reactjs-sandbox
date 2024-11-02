import {AnimatePresence} from "framer-motion";
import Modal from "../Modal/Modal";
import NewMatchPopup from "../Popups/NewMatchPopup";
import SendGiftPopup from "../Popups/SendGiftPopup";
import Card from "../Card/Card";
import EmptyCard from "../Card/EmptyCard";
import React, {useEffect, useState} from "react";
import ApiGateway from "../api";
import ContentLoader from "react-content-loader";
import { getBuffer, setBuffer, popFromBuffer, addToBuffer } from '../cache.js';

const MatchesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [matchCandidates, setMatchCandidates] = useState([]);
    const [newMatchOpen, setNewMatchOpen] = useState(false);
    const [sendGiftOpen, setSendGiftOpen] = useState(false);

    const closeNewMatch = () => setNewMatchOpen(false);
    const openNewMatch = () => setNewMatchOpen(true);
    const closeSendGift = () => setSendGiftOpen(false);
    const openSendGift = (userId = null) => setSendGiftOpen(true);

    useEffect(() => {
        ApiGateway.fetchMatchCandidates().then((data) => {
            setMatchCandidates(data);

            setTimeout(() => setIsLoading(false), 1000);
        });
    }, []);

    const handleLike = (id) => {
        setMatchCandidates((prevCandidates) =>
            prevCandidates.filter((candidate) => candidate.id !== id)
        );
    };

    const handlePass = (id) => {
        setMatchCandidates((prevCandidates) =>
            prevCandidates.filter((candidate) => candidate.id !== id)
        );
    };

    return (
        <>
            <AnimatePresence
                initial={false}
                mode={'wait'}
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
            {isLoading && (
                <EmptyCard zIndex={2}>
                    <ContentLoader
                        speed={1}
                        width={'100%'}
                        height={'100%'}
                        backgroundColor="#1f222d"
                        foregroundColor="#2b2f3b"
                    >
                        <rect x="0" y="0" rx="30" ry="30" width="100%" height="75%"/>
                        <rect x="20" y="79%" rx="4" ry="4" width="30%" height="2%"/>
                        <rect x="20" y="83%" rx="4" ry="4" width="40%" height="2%"/>
                        <rect x="3%" y="88%" rx="30" ry="30" width="44%" height="10%"/>
                        <rect x="53%" y="88%" rx="30" ry="30" width="44%" height="10%"/>
                    </ContentLoader>
                </EmptyCard>
            )}
            {matchCandidates.length > 0 ? (
                matchCandidates.map((candidate, index) => (
                    <Card
                        key={candidate.id}
                        matchCandidate={candidate}
                        handleLike={() => handleLike(candidate.id)}
                        handlePass={() => handlePass(candidate.id)}
                        handleSendGift={() => null}
                    />
                ))
            ) : (
                <EmptyCard/>
            )}
        </>
    );
};

export default MatchesPage;
