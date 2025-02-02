const AbDiamond = ({width, height, fillColor, style}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill={fillColor} width={width} height={height}
             style={style}>
            <path d="m60 240 132 176c24 32 72 32 96 0l132-176L288 64a60 60 0 0 0-96 0L60 240Z"></path>
        </svg>
    )
}

export default AbDiamond;