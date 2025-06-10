import {AnimatePresence} from "framer-motion";
import Modal from "../../Other/Modal";
import Card from "./Card/Card";
import React, {useEffect, useRef, useState} from "react";
import ApiGateway from "../../api";
import CardPlaceholder from "./Card/CardPlaceholder";
import MatchedPopup from "./MatchedPopup/MatchedPopup";
import SendGiftPopup from "./SendGiftPopup/SendGiftPopup";
import useMatchCandidates from "../../hooks/useMatchCandidates";
import CardSkeleton from "./Card/CardSkeleton";

const fetchLimit = 10;

const DiscoveryPage = () => {
    const {
        isLoading,
        isEmpty,
        matchCandidates,
        removeCandidate,
    } = useMatchCandidates(fetchLimit);

    const cardRefs = useRef([]);

    const [matchedCandidate, setMatchedCandidate] = useState(null);
    const [giftedCandidate, setGiftedCandidate] = useState(null);

    const closeNewMatch = () => setMatchedCandidate(null);
    const closeSendGift = (swipeRight) => {
        setGiftedCandidate(null)

        if (swipeRight) {
            setTimeout(() => handleSwipeRightOnFrontCard(), 400);
        }
    };

    const handleLike = (candidate) => {
        const {likesMe, profile: {hid}} = candidate;

        ApiGateway.likeMatchCandidate(hid).catch((error) => {
            console.error("Error liking match candidate:", error);
        });

        removeCandidate(hid);

        if (likesMe) {
            setMatchedCandidate(candidate);
        }
    };

    const handlePass = (candidate) => {
        const {profile: {hid}} = candidate;

        ApiGateway.passMatchCandidate(hid).catch((error) => {
            console.error("Error passing match candidate:", error);
        });

        removeCandidate(hid);
    };

    // Call swipeRight on the front card (last in subCandidates)
    const handleSwipeRightOnFrontCard = () => {
        if (subCandidates.length > 0) {
            const frontCardRef = cardRefs.current[subCandidates.length - 1];
            if (frontCardRef) {
                frontCardRef.swipeRight('slow');
            }
        }
    };

    useEffect(() => {
        window.Telegram.WebApp.setHeaderColor('#131313')
    }, []);

    // Layout only 2 cards at once
    const subCandidates = matchCandidates.slice(-3);

    return (
        <>
            <AnimatePresence initial={false} mode={'wait'} onExitComplete={() => null}>
                {matchedCandidate !== null && (
                    <Modal handleClose={closeNewMatch}>
                        <MatchedPopup handleClose={closeNewMatch}/>
                    </Modal>
                )}
                {giftedCandidate !== null && (
                    <Modal handleClose={closeSendGift}>
                        <SendGiftPopup
                            handleClose={closeSendGift}
                            handleSend={() => ApiGateway.sendGift(giftedCandidate.profile.hid)}
                        />
                    </Modal>
                )}
            </AnimatePresence>
            {(isLoading || matchCandidates.length === 0) && !isEmpty && <CardSkeleton/>}
            {subCandidates.map((candidate, i) => (
                <Card
                    ref={(el) => (cardRefs.current[i] = el)}
                    key={candidate.profile.hid}
                    matchCandidate={candidate}
                    isFrontCard={(subCandidates.length - 1) === i}
                    handleLike={handleLike}
                    handlePass={handlePass}
                    openSendGiftPopup={() => setGiftedCandidate(candidate)}
                />
            ))}
            {/*{isEmpty && <CardPlaceholder/>}*/}
        </>
    );
};

export default DiscoveryPage;
