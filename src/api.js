import { dummyData } from "./dummy";

let cacheData = [];
let cachePromise = null;

const fetchMatchCandidates = (limit) => {
    console.log('fetch', limit);
    return new Promise((resolve) => {
        if (cacheData.length > 0) {
            console.log('fetch resolve from cache', limit);
            resolve(cacheData);
            cacheData = [];
        } else if (cachePromise) {
            console.log('fetch waiting for cachePromise');
            cachePromise.then(() => {
                resolve(cacheData);
                cacheData = [];
                cachePromise = null;
            });
        } else {
            setTimeout(() => {
                resolve(dummyData.MatchCandidates.slice(0, limit));
            }, 1000);
        }
    });
};

const prefetchMatchCandidates = (limit) => {
    console.log('prefetch', limit);
    cachePromise = new Promise((resolve) => {
        setTimeout(() => {
            cacheData = dummyData.MatchCandidates.slice(0, limit);
            resolve(true);
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
