const SadSmileShape = ({width, height, fillColor, style}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor} xmlns="http://www.w3.org/2000/svg"
             style={style}>
            <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke={fillColor}
                  strokeWidth="1.5" strokeLinecap="round"/>
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" stroke={fillColor}/>
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" stroke={fillColor}/>
        </svg>
    )
}

export default SadSmileShape;