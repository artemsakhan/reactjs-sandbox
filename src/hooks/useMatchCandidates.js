import { useState, useEffect, useCallback } from "react";
import CachedApiGateway from "../cache";
import ApiGateway from "../api";

const useMatchCandidates = (fetchLimit) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [matchCandidates, setMatchCandidates] = useState([]);

    useEffect(() => {
        // Initial fetch for match candidates
        CachedApiGateway.queryMatchCandidates(fetchLimit)
            .then((data) => {
                if (data.length === 0) {
                    setIsLoading(false);
                    setIsEmpty(true);
                } else {
                    setMatchCandidates(data);
                    setTimeout(() => setIsLoading(false), 500);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [fetchLimit]);

    const removeCandidate = useCallback((hid) => {
        setMatchCandidates((prevItems) => {
            const twentyPercent = Math.ceil(fetchLimit * 0.3);

            // Check if remaining items are at 20% of the fetch limit
            if (prevItems.length === twentyPercent) {
                ApiGateway.fetchMatchCandidates(fetchLimit)
                    .then((data) => {
                        if (data.length === 0) {
                            setIsEmpty(true);
                        } else {
                            setMatchCandidates((prevItems) => [...data, ...prevItems]);
                        }
                    })
                    .catch((error) => console.error("Error querying match candidates:", error));
            }

            // Remove the candidate with the specified `hid`
            return prevItems.filter((c) => c.profile.hid !== hid);
        });
    }, [fetchLimit]);

    return {
        isLoading,
        isEmpty,
        matchCandidates,
        removeCandidate,
    };
};

export default useMatchCandidates;