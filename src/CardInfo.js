
const CardInfo = ({ aboutMe }) => {
    return (
        <div style={styles  }>
            <p style={{
                paddingLeft: '15px',
                fontSize: '15px',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2, // Limits the text to 2 lines
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
            }}>{aboutMe}</p>
        </div>
    )
}

const styles = {
    width: '100%',
    color: 'white',
    textAlign: 'left',
    height: '60px',
};
export default CardInfo;