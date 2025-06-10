import React from "react";
import {motion} from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UIConfig from "../../../../UIConfig";
import CheckShape from "../../../../Shapes/CheckShape";
import CloseShape from "../../../../Shapes/CloseShape";
import StarShape from "../../../../Shapes/StarShape";
import StarShape2 from "../../../../Shapes/StarShape2";

const ActionButtons = ({handleLike, handlePass, handleGift}) => {
  return (
    <div style={styles} className="cardControlButtons">
      <motion.div
        style={{
          marginLeft: "8px",
          ...buttonStyle,
          ...UIConfig.Card.PassButton,
        }}
        onClick={handlePass}
        whileTap={{scale: 0.9}}
      >
        <CloseShape width={35} height={35} strokeWidth={1} fillColor={'#fff'}/>
      </motion.div>
      <motion.div
        style={{
          ...buttonStyle,
          background: UIConfig.Colors.Primary,
          // background: 'linear-gradient(to bottom, #ffecb3, #f1ff0b)',
          border: 'none',
          // borderRadius: '16px',
          // padding: '12px 24px',
          color: '#000',
          fontSize: '18px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
          // background: UIConfig.Colors.Primary,
          // background: '#F2994A',  /* fallback for old browsers */
          // background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
          // background: 'linear-gradient(to right, #f1ff0a, #F2994A)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }}
        onClick={handleGift}
        whileTap={{scale: 0.9}}
      >
        <StarShape2 width={30} height={30} fill={'#000'}/>
      </motion.div>

      <motion.div
        style={{
          marginRight: "8px",
          ...buttonStyle,
        }}
        onClick={handleLike}
        whileTap={{scale: 0.9}}
      >
        <CheckShape strokeWidth={2} fill={'#FFF'}/>
      </motion.div>
    </div>
  );
};

const styles = {
  position: 'relative',
  height: '65px',
  width: '100%',
  background: UIConfig.Card.Content.background,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  borderBottomLeftRadius: UIConfig.Card.Content.borderRadius,
  borderBottomRightRadius: UIConfig.Card.Content.borderRadius,
  borderTop: 'none',
  marginTop: '8px',
  marginBottom: '2px',
};

const buttonStyle = {
  background: UIConfig.Colors.BackgroundMediumDisabled,
  borderRadius: '35px',
  color: "#fff",
  fontSize: '24px',
  height: '55px',
  width: '29%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px',
  outline: 'none',
  textAlign: 'center',
  appearance: 'none',
};

export default ActionButtons;
