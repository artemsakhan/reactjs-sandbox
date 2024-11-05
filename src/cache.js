import ApiGateway from "./api";

let cacheData = [];
let cachePromise = null;

const queryMatchCandidates = (limit) => {
    console.log('query', limit);

    // If cached data is available, return it
    if (cacheData.length > 0) {
        return Promise.resolve(cacheData).finally(() => cacheData = []);
    }

    // If a prefetch is in progress, wait for it and return the cached data
    if (cachePromise) {
        console.log('fetch waiting for cachePromise');
        return cachePromise;
    }

    // If no data or prefetch, perform a direct fetch
    return ApiGateway.fetchMatchCandidates(limit)
};

const prefetchMatchCandidates = (limit) => {
    console.log('prefetch', cachePromise);

    // If prefetch is already in progress, do nothing
    if (cachePromise) {
        return cachePromise;
    }

    // Start prefetch and cache the results
    cachePromise = new Promise((resolve) => {
        ApiGateway.fetchMatchCandidates(limit).then((data => {
            cacheData = data;
            console.log('prefetch resolved', cacheData);
            resolve(true);
            cachePromise = null;
        }))
    });

    return cachePromise;
};

const CachedApiGateway = {
    queryMatchCandidates,
    prefetchMatchCandidates,
};

export default CachedApiGateway;