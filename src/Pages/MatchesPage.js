import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import NewMatchPopup from "../Popups/NewMatchPopup";
import SendGiftPopup from "../Popups/SendGiftPopup";
import Card from "../Card/Card";
import EmptyCard from "../Card/EmptyCard";
import React, { useEffect, useState } from "react";
import ApiGateway from "../api";
import ContentLoader from "react-content-loader";
import CachedApiGateway from "../cache";

const ActionLike = 1;
const ActionPass = 2;

const fetchLimit = 10;

const Modals = ({ newMatchOpen, sendGiftOpen, closeSendGift, closeNewMatch }) => {
    return (
        <AnimatePresence initial={false} mode={'wait'} onExitComplete={() => null}>
            {newMatchOpen && (
                <Modal handleClose={closeNewMatch}>
                    <NewMatchPopup handleClose={closeNewMatch} />
                </Modal>
            )}
            {sendGiftOpen && (
                <Modal handleClose={closeSendGift}>
                    <SendGiftPopup handleClose={closeSendGift} />
                </Modal>
            )}
        </AnimatePresence>
    );
};

const CardSkeleton = () => {
    return (
        <EmptyCard zIndex={2}>
            <ContentLoader
                speed={1}
                width={'100%'}
                height={'100%'}
                backgroundColor="#1f222d"
                foregroundColor="#2b2f3b"
            >
                <rect x="0" y="0" rx="30" ry="30" width="100%" height="75%" />
                <rect x="20" y="79%" rx="4" ry="4" width="30%" height="2%" />
                <rect x="20" y="83%" rx="4" ry="4" width="40%" height="2%" />
                <rect x="3%" y="88%" rx="30" ry="30" width="44%" height="10%" />
                <rect x="53%" y="88%" rx="30" ry="30" width="44%" height="10%" />
            </ContentLoader>
        </EmptyCard>
    );
};

const MatchesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [matchCandidates, setMatchCandidates] = useState([]);
    const [newMatchOpen, setNewMatchOpen] = useState(false);
    const [sendGiftOpen, setSendGiftOpen] = useState(false);

    const closeNewMatch = () => setNewMatchOpen(false);
    const openNewMatch = () => setNewMatchOpen(true);
    const closeSendGift = () => setSendGiftOpen(false);
    const openSendGift = (userId = null) => setSendGiftOpen(true);

    useEffect(() => {
        CachedApiGateway.queryMatchCandidates(fetchLimit)
            .then((data) => {
                setMatchCandidates(data);
                setTimeout(() => setIsLoading(false), 1000);
            })
            .catch((error) => {
                if (!error.toString().includes("duplicated call")) {
                    console.error(error)
                }
            })

        return () => {};
    }, []);

    const removeCard = async (id, action) => {
        switch (action) {
            case ActionLike:
                ApiGateway.likeMatchCandidate(id).catch((error) => {
                    console.error("Error liking match candidate:", error);
                });
                break;
            case ActionPass:
                ApiGateway.passMatchCandidate(id).catch((error) => {
                    console.error("Error passing match candidate:", error);
                });
                break;
            default:
                // do nothing
        }

        setMatchCandidates((prevItems) => {
            if (prevItems.length === 2) {
                CachedApiGateway.queryMatchCandidates(fetchLimit)
                    .then((data) => {
                        if (data.length === 0) {
                            setIsEmpty(true);
                        } else {
                            setMatchCandidates((prevItems) => {
                                return [...data, ...prevItems]
                            })
                        }
                    })
                    .catch(error => console.error(error))
            }

            if (prevItems.length === 5) {
                CachedApiGateway.prefetchMatchCandidates(fetchLimit)
                    .catch((error) => console.error("Error pre-fetching match candidate:", error));
            }

            return prevItems.filter((c) => c.id !== id)
        });
    };

    // Layout only 2 cards at once
    const subCandidates = matchCandidates.slice(-2)

    return (
        <>
            <Modals
                sendGiftOpen={sendGiftOpen}
                newMatchOpen={newMatchOpen}
                closeNewMatch={closeNewMatch}
                closeSendGift={closeSendGift}
            />
            {(isLoading || matchCandidates.length === 0) && !isEmpty && <CardSkeleton />}
            {subCandidates.map((candidate, i) => (
                    <Card
                        key={candidate.id}
                        matchCandidate={candidate}
                        isFrontCard={(subCandidates.length-1) === i}
                        handleLike={() => removeCard(candidate.id, ActionLike)}
                        handlePass={() => removeCard(candidate.id, ActionPass)}
                        handleSendGift={() => null}
                    />
                ))}

            {isEmpty && <EmptyCard />}
        </>
    );
};

export default MatchesPage;
