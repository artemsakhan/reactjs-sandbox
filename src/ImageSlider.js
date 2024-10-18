import {useState} from "react";
import GiftButton from "./GiftButton";
import ImageProgressBar from "./ImageProgressBar";
import CardName from "./CardName";

const ImageSlider = ({ card: { images, name, age, aboutMe} }) => {
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
            </div>
            <CardName
                name={name}
                age={age}
                aboutMe={aboutMe}
            />
            <GiftButton/>
        </div>
    );
};

const sliderStyles = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: 'calc(100% - 130px)',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: '35px',
    borderBottom: 'none',
    borderBottomLeftRadius: '0px',
}
const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
};

const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

export default ImageSlider;
