const SevenShape = ({width, height, fillColor, style}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style={style}>
            <path
                d="M31.999 2c-16.568 0-30 13.432-30 30s13.432 30 30 30C48.568 62 62 48.568 62 32S48.568 2 31.999 2zM43 20.514c-1.651 1.727-3.33 4.205-5.036 7.436a44.95 44.95 0 0 0-3.903 10.303c-.895 3.637-1.335 6.887-1.321 9.748h-5.641c.098-4.484.969-9.059 2.613-13.721c1.643-4.662 3.84-8.83 6.586-12.504H22.999V16H43v4.514z"
                fill={fillColor}></path>
        </svg>
    )
}

export default SevenShape;