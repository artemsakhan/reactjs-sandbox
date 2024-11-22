import UIConfig from "../../../UIConfig";
import PeopleLikeMe from "./PeopleLikeMe";
import DialogsList from "./DialogsList";
import DialogItem from "./DialogItem";
import {isLocalUrl} from "framer/utils/environment";
import React, {useEffect, useState} from "react";
import ChatListSkeleton from "./ChatListSkeleton";
import {AnimatePresence} from "framer-motion";
import Modal from "../../../Other/Modal";
import MatchedPopup from "../../Discovery/MatchedPopup/MatchedPopup";
import SendGiftPopup from "../../Discovery/SendGiftPopup/SendGiftPopup";
import ApiGateway from "../../../api";
import PayWallGiftsPopup from "../PayWallGiftsPopup/PayWall";

const dialogs = [
    {
        id: 1,
        name: 'Olesia',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/b0y0d.624abf5ef198c.120x120.webp',
        isUnread: false,
        isNewMatch: false,
        isPendingGift: true,
        isActive: true,
        lastMessageText: 'Hey buddy',
    },
    {
        id: 2,
        name: 'Katya',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/ob9dd.624abe7577647.120x120.webp',
        isUnread: false,
        isNewMatch: true,
        lastMessageText: 'Hey buddy',
    },
    {
        id: 3,
        name: 'Valeria',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/yr7g4.624abf3505902.120x120.webp',
        isUnread: true,
        isNewMatch: false,
        lastMessageText: 'Hey buddy',
    },
    {
        id: 4,
        name: 'Olesia',
        imgUrl: 'https://kyivdate.app/photos/MXBLOrA/b0y0d.624abf5ef198c.120x120.webp',
        isUnread: false,
        isNewMatch: false,
        lastMessageText: 'Hey buddy',
    },

];

const ChatsContent = ({openLikesMe}) => {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Chats</h2>
            <PeopleLikeMe openLikesMe={openLikesMe}/>
            <DialogsList>
                {dialogs.map((v, i) => (
                    <DialogItem
                        key={i}
                        item={v}
                    />
                ))}
            </DialogsList>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    height: 'calc(100% - 110px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    background: UIConfig.Colors.BackgroundWhite,
    borderTopLeftRadius: UIConfig.Card.Content.borderRadius,
    borderTopRightRadius: UIConfig.Card.Content.borderRadius,
}

const headerStyle = {
    textAlign: 'left',
    marginLeft: '25px',
    marginBottom: '15px',
};

export default ChatsContent;