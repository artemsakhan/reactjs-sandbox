const AbCutout = ({width, height, fillColor, style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill={fillColor} width={width} height={height}
             style={style}>
            <path
                d="M480 240A240 240 0 0 1 240 0 240 240 0 0 1 0 240a240 240 0 0 1 240 240 240 240 0 0 1 240-240Z"></path>
        </svg>
    )
}

export default AbCutout;