import React from 'react';

const CloseShape = ({width = 24, height = 24, strokeWidth = 2, fillColor = '#000000'}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g id="Menu / Close_SM">
            <path
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke={fillColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export default CloseShape;
