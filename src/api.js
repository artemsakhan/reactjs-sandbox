import { dummyData } from "./dummy";

var offset = 0;

const fetchMatchCandidates = (limit) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fetch', offset, limit)
            if (offset >= dummyData.MatchCandidates.length) {
                resolve([])
            } else {
                const dataChunk = dummyData.MatchCandidates.slice(offset, offset + limit);
                offset += limit;
                resolve(dataChunk);
            }
        }, 1000)
    })
}

const sendGift = (hid) => {
    console.log('send gift query', hid)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 180);
    })
}

const likeMatchCandidate = (hid) => {
    console.log('like query', hid)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 140)
    })
};

const passMatchCandidate = (hid) => {
    console.log('pass query', hid)
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
    sendGift,
};

export default ApiGateway;
