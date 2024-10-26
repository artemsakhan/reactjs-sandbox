import React, {useState} from "react";
import GiftButton from "./GiftButton";
import ImageProgressBar from "./ImageProgressBar";
import CardHeader from "./CardHeader";
import CardLabelStack from "./CardLabelStack";
import UIConfig from "../../UIConfig";

const CardContent = ({matchCandidate, handleSendGift}) => {
    const {images, aboutMe} = matchCandidate;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {

        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleClick = (event) => {
        // window.Telegram.WebApp.HapticFeedback.impactOccurred('soft')

        const {clientX, currentTarget} = event;
        const targetWidth = currentTarget.offsetWidth;

        // Clicked on the left side of the image
        if (clientX < targetWidth / 2) {
            prevImage();
        }
        // Clicked on the right side of the image
        else {
            nextImage();
        }
    };

    var contentBottom = null

    if (true) {//(aboutMe.length > 50 && currentIndex > 0) {
        contentBottom = <div className="item" style={aboutMeContainer}>
            <div className="cardHeaderAboutMe" style={aboutMeText}>
                {aboutMe}
            </div>
        </div>
    } else {
        contentBottom = <CardLabelStack
            occupation={matchCandidate.occupation}
            height={matchCandidate.height}
        />
    }

    return (
        <div style={sliderStyles}>
            <ImageProgressBar
                activeIndex={currentIndex}
                imagesCount={images.length}
            />
            <div style={imageContainerStyle} onClick={handleClick}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={imageStyle}
                />
            </div>
            <CardHeader
                matchCandidate={matchCandidate}
                currentSection={currentIndex}
                totalSections={images.length}
            />
            {contentBottom}
            <GiftButton handleSendGift={handleSendGift}/>
        </div>
    );
};

const sliderStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 70px)',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: UIConfig.Card.Content.borderRadius,
}
const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100% - 70px)',
    width: '100%',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
};

const aboutMeContainer = {
    width: '100%',
    position: 'absolute',
    bottom: '70px',
    paddingTop: '25px',
    left: '0px',
    background: 'linear-gradient(transparent 10%, rgba(0, 0, 0, 0.3) 80%)',
}

const aboutMeText = {
    ...UIConfig.Typography.Card.AboutMe,
    width: 'calc(100% - 100px)',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    textAlign: 'left',
    margin: '13px',
}

export default CardContent;
