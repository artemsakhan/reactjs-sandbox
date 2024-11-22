import ContentLoader from "react-content-loader";
import React from "react";

const ChatListSkeleton = ({}) => {
    return (
        <div style={containerStyle}>
            <ContentLoader
                speed={1}
                width={'100%'}
                height={390} // Total height for 3 rows with offsets
                backgroundColor="#f3f3f3"
                foregroundColor="#d9d9d9"
            >
                {/* First row */}
                <circle cx="53" cy="45" r="37"/>
                {/* Rounded image (65x65) */}
                <rect x="102" y="33" rx="4" ry="4" width="100px" height="12"/>
                {/* First line of text */}
                <rect x="102" y="53" rx="4" ry="4" width="135px" height="12"/>
                {/* Second line of text */}

                {/* Second row */}
                <circle cx="53" cy="130" r="37"/>
                <rect x="102" y="115" rx="4" ry="4" width="100px" height="12"/>
                <rect x="102" y="135" rx="4" ry="4" width="135px" height="12"/>

                {/* Third row */}
                <circle cx="53" cy="212" r="37"/>
                <rect x="102" y="197" rx="4" ry="4" width="100px" height="12"/>
                <rect x="102" y="217" rx="4" ry="4" width="135px" height="12"/>

                {/* Third row */}
                <circle cx="53" cy="293" r="37"/>
                <rect x="102" y="278" rx="4" ry="4" width="100px" height="12"/>
                <rect x="102" y="298" rx="4" ry="4" width="135px" height="12"/>


            </ContentLoader>


        </div>
    )
}

const containerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    background: 'rgb(245 245 245 / 100%)',
}
export default ChatListSkeleton;