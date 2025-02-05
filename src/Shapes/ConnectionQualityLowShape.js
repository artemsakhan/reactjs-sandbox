const ConnectionQualityLowShape = ({width, height, fillColor, fillColor1, styles}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg"
             version="1.1" baseProfile="full"
             enableBackground="new 0 0 76.00 76.00" style={styles}>
            <path fill={fillColor} fillOpacity="1" strokeWidth="0.2" strokeLinejoin="round"
                  d="M 19,57L 19,51L 25,51L 25,57L 19,57 Z "/>
            <path fill={fillColor1} fillOpacity="0.403922" strokeWidth="0.2" strokeLinejoin="round"
                  d="M 57,19L 57,57L 51,57L 51,19L 57,19 Z M 49,27L 49,57L 43,57L 43,27L 49,27 Z M 41,35L 41,57L 35,57L 35,35L 41,35 Z M 33,44L 33,57L 27,57L 27,44L 33,44 Z "/>
        </svg>
    )
}

export default ConnectionQualityLowShape;