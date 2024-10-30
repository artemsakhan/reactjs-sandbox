import React from 'react';

const CheckShape = ({ width = 24, height = 24, fill = 'none', stroke = '#000000', strokeWidth = 2, style }) => {
    return (
        <svg
            width={`${width}px`}
            height={`${height}px`}
            viewBox="0 0 24 24"
            fill={fill}
            style={style}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 12.6111L8.92308 17.5L20 6.5"
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default CheckShape;
