import Header from "./Components/Header";
import DialogsList from "./Components/DialogsList";

const MessagesPage = () => {
    return (
        <div style={containerStyle}>
            <Header/>
            <DialogsList/>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

export default MessagesPage;