import CloseButton from "./Components/CloseButton";
import PersonsList from "./Components/PersonsList";
import PremiumButton from "./Components/PremiumButton";

const data = [
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/pB4W0jr/pk6m2.62ab821f55e6e.800x600.webp',
        name: 'Olesia',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/pB4W0jr/pk6m2.62ab821f55e6e.800x600.webp',
        name: 'Katerina',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/pB4W0jr/pk6m2.62ab821f55e6e.800x600.webp',
        name: 'Olga',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/pB4W0jr/pk6m2.62ab821f55e6e.800x600.webp',
        name: 'Gleb',
        age: '28',
    },
    {
        hid: '111',
        imgUrl: 'https://kyivdate.app/photos/pB4W0jr/pk6m2.62ab821f55e6e.800x600.webp',
        name: 'Vladislav',
        age: '28',
    },

];

const LikesMePopup = ({handleClose}) => {
    return (
        <div style={containerStyle}>
            <CloseButton handleClose={handleClose}/>
            <PersonsList persons={data} style={{ marginTop: '60px'}}/>
            <PremiumButton/>
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