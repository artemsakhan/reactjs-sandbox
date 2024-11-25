import HeartSimpleOutlineShape from "../../../../Shapes/HeartSimpleOutlineShape";

const Person = ({person}) => {
    const {
        imgUrl,
        name,
        age,
    } = person;

    return (
        <div style={{...containerStyle}}>
            <img src={imgUrl} alt="" style={imgStyle}/>
            <div style={nameStyle}>
                {name}, {age}
            </div>
            <div style={likeButtonStyle}>
                <HeartSimpleOutlineShape width={22} height={22} fillColor={'#FFF'}/>
            </div>
        </div>
    )
}

const likeButtonStyle = {
    position: 'absolute',
    top: '14px',
    left: '14px',
    background: 'rgb(0 0 0 / 25%)',
    borderRadius: '25px',
    width: '35px',
    height: '35px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const nameStyle = {
    textAlign: 'center',
    width: '100%',
    color: '#FFF',
    fontSize: '16px',
    fontWeight: '600',
    position: 'absolute',
    bottom: '0px',
    padding: '10px 0px',
    background: 'rgb(0 0 0 / 25%)',
}

const containerStyle = {
    height: "220px",
    width: 'calc(50% - 10px)',
    boxSizing: "border-box",
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '35px',
}

const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

export default Person;