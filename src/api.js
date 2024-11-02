import { dummyData } from "./dummy";

const fetchMatchCandidates = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(dummyData.MatchCandidates);
        }, 1000);
    });
};

const ApiGateway = {
    fetchMatchCandidates,
};

export default ApiGateway;