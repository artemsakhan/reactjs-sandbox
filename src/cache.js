let matchCandidatesBuffer = [];

export const getBuffer = () => {
    return matchCandidatesBuffer;
};

export const setBuffer = (buffer) => {
    matchCandidatesBuffer = buffer;
};

export const addToBuffer = (items) => {
    matchCandidatesBuffer = [...matchCandidatesBuffer, ...items];
};

export const popFromBuffer = () => {
    if (matchCandidatesBuffer.length === 0) return null;
    const [first, ...rest] = matchCandidatesBuffer;
    matchCandidatesBuffer = rest;
    return first;
};

export const clearBuffer = () => {
    matchCandidatesBuffer = [];
};
