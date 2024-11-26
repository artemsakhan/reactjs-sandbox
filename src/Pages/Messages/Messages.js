import Banner from "./Components/Banner";
import ChatsContent from "./Components/ChatsContent";
import {AnimatePresence} from "framer-motion";
import Modal from "../../Other/Modal";
import PayWallGiftsPopup from "./PayWallGiftsPopup/PayWall";
import React, {useState} from "react";
import LikesMePopup from "./LikesMePopup/LikesMe";
import ClaimGiftPopup from "./ClaimGiftPopup/ClaimGift";

const MessagesPage = () => {
    const [payWallOpen, setPayWallOpen] = useState(false);
    const [likesMeOpen, setLikesMeOpen] = useState(false);
    const [claimGiftOpen, setClaimGiftOpen] = useState(false);

    const closePayWall = () => setPayWallOpen(false);
    const openPayWall = () => setPayWallOpen(true);

    const closeLikesMe = () => setLikesMeOpen(false);
    const openLikesMe = () => setLikesMeOpen(true);

    const closeClaimGift = () => setClaimGiftOpen(false);
    const openClaimGift = () => setClaimGiftOpen(true);

    return (
        <div style={containerStyle}>
            <AnimatePresence initial={false} mode={'wait'} onExitComplete={() => null}>
                {payWallOpen && (
                    <Modal handleClose={closePayWall}>
                        <PayWallGiftsPopup handleClose={closePayWall}/>
                    </Modal>
                )}
                {likesMeOpen && (
                    <Modal handleClose={closeLikesMe}>
                        <LikesMePopup handleClose={closeLikesMe}/>
                    </Modal>
                )}
                {claimGiftOpen && (
                    <Modal handleClose={closeClaimGift}>
                        <ClaimGiftPopup handleClose={closeClaimGift}/>
                    </Modal>
                )}
            </AnimatePresence>
            <Banner openPayWall={openPayWall}/>
            <ChatsContent
                openLikesMe={openLikesMe}
                openClaimGift={openClaimGift}
            />
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