import React, {useState} from "react";
import GiftButton from "./GiftButton";
import ThreeDots from "./ThreeDots";
import Bio from "./Bio";
import LabelStack from "./LabelStack";
import UIConfig from "../../../../UIConfig";
import ContentLoader from "react-content-loader";

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

const Content = ({ matchCandidate, openSendGiftPopup }) => {
    const {
        profile: {
            photos,
            bodyType,
            height,
            aboutMe,
        },
    } = matchCandidate;

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const handleClick = (event) => {
        const { clientX, currentTarget } = event;
        const targetWidth = currentTarget.offsetWidth;

        if (clientX < targetWidth / 2) {
            prevImage();
        } else {
            nextImage();
        }
    };

    let contentBottom = <LabelStack
        bodyType={bodyType}
        height={height}
    />

    if (photos.length > 1) {
        if (aboutMe && currentIndex === 1) {
            contentBottom = <AboutMeText text={aboutMe}/>
        }
    } else if (photos.length === 0) {
        if (aboutMe) {
            contentBottom = <AboutMeText text={aboutMe}/>
        }
    }

    return (
        <div style={sliderStyles}>
            <div style={imageContainerStyle} onClick={handleClick}>
                <ImageLoader style={{
                    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
                    position: 'absolute',
                    height: 'calc(100% - 60px)',
                }}/>
                {photos.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{
                            ...imageStyle,
                            display: i === currentIndex ? 'block' : 'none',
                            height: 'calc(100% - 60px)',
                            position: 'absolute',
                        }}
                    />
                ))}
            </div>
            <ThreeDots
                activeIndex={currentIndex}
                imagesCount={photos.length}
            />
            <Bio
                matchCandidate={matchCandidate}
                currentSection={currentIndex}
                totalSections={photos.length}
            />
            {contentBottom}
            <GiftButton openSendGiftPopup={openSendGiftPopup}/>
        </div>
    );
};

const AboutMeText = ({text}) => (
    <div className="item" style={aboutMeContainer}>
        <div className="cardHeaderAboutMe" style={aboutMeTextStyle}>
            {text}
        </div>
    </div>
)

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

const aboutMeTextStyle = {
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

export default Content;
