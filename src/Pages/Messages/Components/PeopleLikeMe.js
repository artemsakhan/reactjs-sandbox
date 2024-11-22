import HeartSimpleShape from "../../../Shapes/HeartSimpleShape";
import {motion} from "framer-motion";
import ArrowRightShape from "../../../Shapes/ArrowRightShape";
import UIConfig from "../../../UIConfig";

export const PeopleLikeMe = ({openLikesMe}) => {
    return (
        <motion.div
            style={containerStyle}
            onTap={openLikesMe}
            whileTap={{ opacity: 0.8}}
        >
            <div style={iconContainerStyle}>
                <div style={iconBackgroundStyle}>
                    <HeartSimpleShape
                        with={30}
                        height={30}
                        fill={UIConfig.Colors.Primary}
                    />
                </div>
            </div>
            <div style={textContainerStyle}>
                <p style={textStyle}>You have 1 like</p>
            </div>
            <div style={buttonContainerStyle}>
                <ArrowRightShape width={15} height={15}/>
            </div>
        </motion.div>
    )
}

const containerStyle = {
    width: '100%',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
};

const iconBackgroundStyle = {
    width: '65px',
    height: '65px',
    marginLeft: '5px',
    borderRadius: '35px',
    background: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const iconContainerStyle = {
    width: '100px',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const buttonContainerStyle = {
    width: '40px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const textStyle = {
}

const textContainerStyle = {
    width: 'calc(100% - 140px)',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}
export default PeopleLikeMe;