
const Images = () => {
    return (
        <div style={{
            width: '80px',
            height: '80px',
            position: 'relative',
            marginLeft: '20px',
        }}>
            <div style={{
                width: '65px',
                height: '65px',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                borderRadius: '30px',
                border: '2px solid #FFF',
                overflow: 'hidden',
            }}>
                <img
                    src="https://kyivdate.app/photos/MXBLOrA/d9rc7.624abfb7cbc27.120x120.webp"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    alt=""
                />
            </div>

            <div style={{
                width: '65px',
                height: '65px',
                objectFit: 'cover',
                position: 'absolute',
                top: 15,
                left: 15,
                borderRadius: '30px',
                border: '2px solid #FFF',
                overflow: 'hidden',
            }}>
                <img
                    src="https://kyivdate.app/photos/MXBLOrA/d9rc7.624abfb7cbc27.120x120.webp"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                    alt=""
                />
            </div>

        </div>
    )
}
export const PeopleLikeMe = ({}) => {
    return (
        <div style={containerStyle}>
            <Images/>
            <div style={{
                width: 'calc(100% - 100px',
                height: '100%',
                background: 'yellow',
            }}>

            </div>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: '80px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};

export default PeopleLikeMe;