import CloseButton from "./Components/CloseButton";
import PersonsList from "./Components/PersonsList";
import PremiumButton from "./Components/PremiumButton";
import React from "react";
import NetworkErrorPage from "../../Other/NetworkErrorPage";
import VerifiedPage from "../../Other/VerifiedPage";
import VerificationFailedPage from "../../Other/VerificationFailedPage";

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

const LikesMeContent = ({handleClose}) => {
    return (
        <>
            <CloseButton handleClose={handleClose}/>
            <PersonsList persons={data} style={{marginTop: '60px'}}/>
            <PremiumButton/>
        </>
    )
}

const LikesMePopup = ({handleClose}) => {
    return (
        <VerificationFailedPage/>
    )
}

export default LikesMePopup;