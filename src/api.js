import { dummyData } from "./dummy";

var offset = 0;

const fetchMatchCandidates = (limit) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('fetch candidates', offset, limit)
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
};

export default ApiGateway;
