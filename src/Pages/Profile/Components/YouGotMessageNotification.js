import CloseButton from "./CloseButton";
import HeartSimpleShape from "../../../Shapes/HeartSimpleShape";
import ChatShape from "../../../Shapes/ChatShape";
import ChatSimpleShape from "../../../Shapes/ChatSimpleShape";

const YouGotMessageNotification = ({ handleClose }) => {
    return (
        <div style={containerStyle}>
            <div style={imgContainerStyle}>
                <img
                    style={imgStyle}
                    src="https://kyivdate.app/photos/MXBLOrA/3e23b.624abe1af4d18.120x120.webp"
                    alt="Like Notification"
                />
                <ChatSimpleShape
                    width={16}
                    height={16}
                    style={{
                        position: 'absolute',
                        bottom: '-4px',
                        right: '-4px',
                        background: '#FFF',
                        borderRadius: '50%',
                        padding: '4px',
                    }}
                />
            </div>
            <div style={textContainerStyle}>
                <div style={headlineStyle}>Anna</div>
                <p style={subtextStyle}>Sent you a message</p>
            </div>
            <div style={iconContainerStyle}>
                    <CloseButton handleClose={handleClose}/>
            </div>
        </div>
    );
};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80vw',
    maxWidth: '400px',
    background: '#FFF',
    borderRadius: '26px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    gap: '12px',
    border: '1px solid #ddd',
};

const imgStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '50%', // Circular image
};

const imgContainerStyle = {
    width: '55px',
    height: '55px',
    position: 'relative',
};

const textContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
};

const headlineStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#393737',
    margin: 0,
};

const subtextStyle = {
    fontSize: '14px',
    color: '#717070',
    margin: 0,
    marginTop: '4px',
};

const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export default YouGotMessageNotification;
