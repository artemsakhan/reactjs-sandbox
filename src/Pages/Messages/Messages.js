import Banner from "./Components/Banner";
import ChatsContent from "./Components/ChatsContent";
import {AnimatePresence} from "framer-motion";
import Modal from "../../Other/Modal";
import PayWallGiftsPopup from "./PayWallGiftsPopup/PayWall";
import React, {useState} from "react";
import LikesMePopup from "./LikesMePopup/LikesMe";

const MessagesPage = () => {
    const [payWallOpen, setPayWallOpen] = useState(false);
    const [likesMeOpen, setLikesMeOpen] = useState(false);

    const closePayWall = () => setPayWallOpen(false);
    const openPayWall = () => setPayWallOpen(true);

    const closeLikesMe = () => setLikesMeOpen(false);
    const openLikesMe = () => {
        console.log('open likes me');
        setLikesMeOpen(true);
    };

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
            </AnimatePresence>
            <Banner openPayWall={openPayWall}/>
            <ChatsContent openLikesMe={openLikesMe}/>
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