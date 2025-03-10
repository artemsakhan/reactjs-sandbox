const BulbShape = ({width, height, fillColor, style}) => {
    return (
        <svg style={style} width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 2C12.5523 2 13 2.44772 13 3V4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4V3C11 2.44772 11.4477 2 12 2Z"
                  fill="#000000"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L18.7071 6.70711C18.3166 7.09763 17.6834 7.09763 17.2929 6.70711C16.9024 6.31658 16.9024 5.68342 17.2929 5.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z"
                  fill="#000000"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M19 12C19 11.4477 19.4477 11 20 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20C19.4477 13 19 12.5523 19 12Z"
                  fill="#000000"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2 12C2 11.4477 2.44772 11 3 11H4C4.55228 11 5 11.4477 5 12C5 12.5523 4.55228 13 4 13H3C2.44772 13 2 12.5523 2 12Z"
                  fill="#000000"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711C6.31658 7.09763 5.68342 7.09763 5.29289 6.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                  fill="#000000"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 6C8.68629 6 6 8.68629 6 12C6 13.6332 6.65387 15.1157 7.71186 16.1966C7.97971 16.4703 8.1241 16.7217 8.16867 16.9444L8.69776 19.5886C8.97833 20.9908 10.2095 22 11.6395 22H12.3605C13.7905 22 15.0217 20.9908 15.3022 19.5886L15.8313 16.9444C15.8759 16.7217 16.0203 16.4703 16.2881 16.1966C17.3461 15.1157 18 13.6332 18 12C18 8.68629 15.3137 6 12 6ZM11 16C10.4477 16 10 16.4477 10 17C10 17.5523 10.4477 18 11 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H11Z"
                  fill="#000000"/>
        </svg>
    )
}

export default BulbShape;