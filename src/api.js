import { dummyData } from "./dummy";

let cacheData = [];
let cachePromise = null;

const fetchMatchCandidates = (limit) => {
    console.log('fetch', limit);

    // If cached data is available, return it
    if (cacheData.length > 0) {
        console.log('fetch resolve from cache', limit);
        const data = cacheData.slice(0, limit);
        cacheData = cacheData.slice(limit); // Remove fetched items from cache
        return Promise.resolve(data);
    }

    // If a prefetch is in progress, wait for it and return the cached data
    if (cachePromise) {
        console.log('fetch waiting for cachePromise');
        return cachePromise.then(() => {
            const data = cacheData.slice(0, limit);
            cacheData = cacheData.slice(limit); // Remove fetched items from cache
            return data;
        });
    }

    // If no data or prefetch, perform a direct fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = dummyData.MatchCandidates.slice(0, limit);
            console.log('fetch resolved new data');
            resolve(data);
        }, 1000);
    });
};

const prefetchMatchCandidates = (limit) => {
    console.log('prefetch', cachePromise);

    // If prefetch is already in progress, do nothing
    if (cachePromise) {
        return cachePromise;
    }

    // Start prefetch and cache the results
    cachePromise = new Promise((resolve) => {
        setTimeout(() => {
            cacheData = dummyData.MatchCandidates.slice(0, limit);
            console.log('prefetch resolved');
            resolve(true);
            cachePromise = null;
        }, 1000);
    });

    return cachePromise;
};

const likeMatchCandidate = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 140)
    })
};

const passMatchCandidate = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 140)
    })
};


const ApiGateway = {
    fetchMatchCandidates,
    likeMatchCandidate,
    passMatchCandidate,
    prefetchMatchCandidates,
};

export default ApiGateway;
