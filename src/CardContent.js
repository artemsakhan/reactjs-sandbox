import {useState} from "react";
import GiftButton from "./GiftButton";
import ImageProgressBar from "./ImageProgressBar";
import CardHeader from "./CardHeader";

const CardContent = ({ matchCandidate }) => {
    const { images } = matchCandidate;

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

        const { clientX, currentTarget } = event;
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

    return (
        <div style={sliderStyles}>
            <ImageProgressBar
                activeIndex={currentIndex}
            />
            <div style={imageContainerStyle} onClick={handleClick}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={imageStyle}
                />
                <GiftButton/>
            </div>
            <CardHeader
                activeIndex={currentIndex}
                matchCandidate={matchCandidate}
            />
        </div>
    );
};

const sliderStyles = {
    display: 'flex',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 80px)',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '35px',
    borderBottom: 'none',
    borderBottomLeftRadius: '0px',
    flexDirection: 'column',
}
const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 'calc(100% - 80px)',
    overflow: 'hidden',
    width: '100%',
    borderBottomRightRadius: '35px',
    position: 'relative',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

export default CardContent;
