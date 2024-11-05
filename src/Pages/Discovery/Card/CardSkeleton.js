import CardPlaceholder from "./CardPlaceholder";
import ContentLoader from "react-content-loader";
import React from "react";

const CardSkeleton = () => (
    <CardPlaceholder zIndex={2}>
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
    </CardPlaceholder>
);

export default CardSkeleton;