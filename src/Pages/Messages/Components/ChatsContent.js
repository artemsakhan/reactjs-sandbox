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
        imgUrl: 'https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.120x120.webp',
        isUnread: false,
        isNewMatch: false,
        isPendingGift: true,
        isActive: true,
        lastMessageText: 'Hey buddy',
    },
    {
        id: 2,
        name: 'Katya',
        imgUrl: 'https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.120x120.webp',
        isUnread: false,
        isNewMatch: true,
        lastMessageText: 'Hey buddy',
    },

];

const ChatsContent = ({openLikesMe, openClaimGift}) => {
    return (
        <div style={containerStyle}>
            <h2 style={headerStyle}>Chats</h2>
            <PeopleLikeMe openLikesMe={openLikesMe}/>
            <DialogsList>
                {dialogs.map((v, i) => (
                    <DialogItem
                        key={i}
                        item={v}
                        openClaimGift={openClaimGift}
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