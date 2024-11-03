import React, {useEffect, useRef, useState} from "react";
import GiftButton from "./GiftButton";
import ThreeDots from "./ThreeDots";
import CardHeader from "./CardHeader";
import CardLabelStack from "./CardLabelStack";
import UIConfig from "../../UIConfig";
import ContentLoader from "react-content-loader";
import axios from "axios";

const ImageLoader = (props) => (
    <ContentLoader
        speed={1}
        width={'100%'}
        height={'100%'}
        backgroundColor="#1f222d"
        foregroundColor="#2b2f3b"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
)

const CardContent = ({ matchCandidate, handleSendGift }) => {
    const { images, aboutMe } = matchCandidate;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to the first image
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loop to the last image if at the first
    };

    const handleClick = (event) => {
        const { clientX, currentTarget } = event;
        const targetWidth = currentTarget.offsetWidth;

        if (clientX < targetWidth / 2) {
            prevImage(); // Navigate to previous image
        } else {
            nextImage(); // Navigate to next image
        }
    };

    const contentBottom = aboutMe !== '' && currentIndex === 0 ? (
        <div className="item" style={aboutMeContainer}>
            <div className="cardHeaderAboutMe" style={aboutMeText}>
                {aboutMe}
            </div>
        </div>
    ) : (
        <CardLabelStack
            occupation={matchCandidate.occupation}
            height={matchCandidate.height}
        />
    );

    const getVersionString = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}${minutes}`; // Combine hours and minutes
    };

    return (
        <div style={sliderStyles}>
            <div style={imageContainerStyle} onClick={handleClick}>
                <ImageLoader style={{
                    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
                    position: 'absolute',
                    height: 'calc(100% - 60px)',
                }}/>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={`${image}?v=${getVersionString()}`} // Use versioned URL
                        alt={`Slide ${index + 1}`}
                        style={{
                            ...imageStyle,
                            display: index === currentIndex ? 'block' : 'none', // Show current image, hide others
                            height: 'calc(100% - 60px)',
                            position: 'absolute',
                        }}
                    />
                ))}
            </div>
            <ThreeDots
                activeIndex={currentIndex}
                imagesCount={images.length}
            />
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
    height: 'calc(100% - 60px)',
    width: '100%',
    background: UIConfig.Card.Content.background,
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
    bottom: '60px',
    paddingTop: '25px',
    left: '0px',
    background: 'linear-gradient(transparent 10%, rgba(0, 0, 0, 0.3) 80%)',
    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
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
