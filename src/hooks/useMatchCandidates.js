import { useState, useEffect, useCallback } from "react";
import CachedApiGateway from "../cache";

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
                }

                setTimeout(() => setIsLoading(false), 500);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [fetchLimit]);

    const removeCandidate = useCallback((hid) => {
        setMatchCandidates((prevItems) => {
            const twentyPercent = Math.ceil(fetchLimit * 0.2);
            const halfLength = Math.ceil(fetchLimit / 2);

            // Check if remaining items are at 20% of the fetch limit
            if (prevItems.length === twentyPercent) {
                CachedApiGateway.queryMatchCandidates(fetchLimit)
                    .then((data) => {
                        if (data.length === 0) {
                            setIsEmpty(true);
                        } else {
                            setMatchCandidates((prevItems) => [...data, ...prevItems]);
                        }
                    })
                    .catch((error) => console.error("Error querying match candidates:", error));
            }

            // If remaining items are at 50% of fetch limit, trigger a background prefetch
            if (prevItems.length === halfLength) {
                CachedApiGateway.prefetchMatchCandidates(fetchLimit)
                    .catch((error) => console.error("Error prefetching match candidates:", error));
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