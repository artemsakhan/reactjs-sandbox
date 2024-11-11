import UIConfig from "../../../UIConfig";
import PeopleLikeMe from "./PeopleLikeMe";

const DialogsList = ({}) => {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Chats</h2>
            <PeopleLikeMe/>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 80px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: UIConfig.Colors.BackgroundWhite,
    borderTopLeftRadius: UIConfig.Card.Content.borderRadius,
}

const headerStyle = {
    textAlign: 'left',
    marginLeft: '25px',
};

export default DialogsList;