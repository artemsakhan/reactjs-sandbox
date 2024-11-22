import CloseButton from "./Components/CloseButton";
import PersonsList from "./Components/PersonsList";

const data = [
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/ob9dd.624abe7577647.800x600.webp',
        name: 'Olesia',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/3e23b.624abe1af4d18.800x600.webp',
        name: 'Katerina',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/yr7g4.624abf3505902.800x600.webp',
        name: 'Olga',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/b0y0d.624abf5ef198c.800x600.webp',
        name: 'Gleb',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/mdqdb.624abf8c876ed.800x600.webp',
        name: 'Vladislav',
        age: '28',
    },

];

const LikesMePopup = ({handleClose}) => {
    return (
        <div style={containerStyle}>
            <CloseButton handleClose={handleClose}/>
            <PersonsList persons={data} style={{ marginTop: '60px'}}/>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    background: '#FFF',
    zIndex: 2,
};

export default LikesMePopup;