import React, {useEffect, useState} from "react";
import GiftButton from "./GiftButton";
import ThreeDots from "./ThreeDots";
import CardHeader from "./CardHeader";
import CardLabelStack from "./CardLabelStack";
import UIConfig from "../../UIConfig";
import 'react-loading-skeleton/dist/skeleton.css';
import axios from "axios";
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

const CardContent = ({matchCandidate, handleSendGift}) => {
    const {
        images,
        aboutMe,
    } = matchCandidate;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [loadedPhotos, setLoadedPhotos] = useState(Array(images.length).fill(null));
    const [loadingStates, setLoadingStates] = useState(Array(images.length).fill(true));

    useEffect(() => {
        images.forEach((image, index) => {
            axios
                .get(image, { responseType: 'blob' })
                .then((response) => {
                    const imageUrl = URL.createObjectURL(response.data);
                    setLoadedPhotos((prevState) => {
                        const newPhotos = [...prevState];
                        newPhotos[index] = imageUrl;
                        return newPhotos;
                    });
                    setLoadingStates((prevState) => {
                        const newStates = [...prevState];
                        newStates[index] = false;
                        return newStates;
                    });
                })
                .catch((error) => {
                    window.Telegram.WebApp.showAlert(error);
                    setLoadingStates((prevState) => {
                        const newStates = [...prevState];
                        newStates[index] = false;
                        return newStates;
                    });
                });
        });
    }, [images]);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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

    var contentBottom = null;

    if (aboutMe !== '' && currentIndex === 0) {
        contentBottom = (
            <div className="item" style={aboutMeContainer}>
                <div className="cardHeaderAboutMe" style={aboutMeText}>
                    {aboutMe}
                </div>
            </div>
        );
    } else {
        contentBottom = (
            <CardLabelStack
                occupation={matchCandidate.occupation}
                height={matchCandidate.height}
            />
        );
    }

    return (
        <div style={sliderStyles}>
            <ThreeDots
                activeIndex={currentIndex}
                imagesCount={images.length}
            />
            <div style={imageContainerStyle} onClick={handleClick}>
                <ImageLoader style={{
                    borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
                    position: 'absolute',
                    height: 'calc(100% - 60px)',
                }} />
                <img
                    src={loadedPhotos[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                        ...imageStyle,
                        display: loadingStates[currentIndex] ? 'none' : 'block',
                        height: 'calc(100% - 60px)',
                        position: 'absolute',
                    }}
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
