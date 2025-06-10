import React, {useEffect, useState} from "react";
import UIConfig from "../../../UIConfig";
import LottieAnimation from "../../../Other/LottieAnimation";
import TextArea from "./Components/TextArea";
import loadingAnimationData from "../../../Assets/stars_background.json";
import DiamondFillShape from "../../../Shapes/DiamondFillShape";


const SendGiftPopup = ({handleClose, handleSend}) => {
  useEffect(() => {
    window.Telegram.WebApp.setHeaderColor('#161622');

  }, [])

  return (
    <div style={{
      width: '100%',
      height: 'calc(100% - 0px)',
      top: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      backgroundImage: UIConfig.Colors.BackgroundDark,
    }}>
      <div style={{
        width: 'calc(100% - 30px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: -60,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          opacity: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 0, // Keep it behind the text but still visible
          pointerEvents: 'none',
        }}>
          <LottieAnimation
            width={300}
            height={300}
            speed={0.5}
            animationData={loadingAnimationData}
            shouldAnimate={true}
            loop={true}
            styles={{
              pointerEvents: 'none',
            }}
          />
        </div>
        <div style={{
          marginTop: '25px',
          position: 'relative',
        }}>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '70px',
              objectFit: 'cover',
              zIndex: 2,
            }}
            src="https://lyranova.s3.eu-central-1.amazonaws.com/x2dN0V7/e6ha1.632ba1feb83ce.120x120.webp"
          />
          <div style={{
            position: 'absolute',
            width: 50,
            height: 50,
            background: 'yellow',
            top: 60,
            right: -13,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <DiamondFillShape width={33} height={33} fillColor={'#000'} style={{
              transform: 'rotate(10deg)',
              marginTop: 2
            }}/>
          </div>
        </div>
        <div style={{
          color: '#fff',
          maxWidth: '80%'
        }}>
          {/* EN TRANSLATION */}
          {/*<p style={{*/}
          {/*  fontSize: '24px',*/}
          {/*  fontWeight: 600,*/}
          {/*  marginBottom: 0,*/}
          {/*}}>Send a gift</p>*/}
          {/*<p style={{*/}
          {/*  margin: '15px 0px 17px'*/}
          {/*}}>Send <b>Olesia</b> a gift to rise to the top<br/> and boost your chance of match ×3.</p>*/}

          <p style={{
            fontSize: '24px',
            fontWeight: 600,
            marginBottom: 0,
          }}>Відправ подарунок</p>
          <p style={{
            margin: '15px 0px 17px'
          }}>З подарунком для <b>Олесі</b> ти в топі<br/> і шанс на пару збільшується втричі.</p>

          {/*<p style={{*/}
          {/*  fontSize: '24px',*/}
          {/*  fontWeight: 600,*/}
          {/*  marginBottom: 0,*/}
          {/*}}>Отправь подарок</p>*/}
          {/*<p style={{*/}
          {/*  margin: '15px 0px 17px'*/}
          {/*}}>С подарком для <b>Олеся</b> ты в топе<br/> и сразу привлечешь её внимание.</p>*/}
        </div>
        <div style={{
          width: '100%',
          marginBottom: '15px',
        }}>
          {/*<TextArea placeholder={'Drop a sweet compliment here...'}/>*/}
          {/*<TextArea placeholder={'Додай своє повідомлення...'}/>*/}
          <TextArea placeholder={'Добавь свое сообщение...'}/>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 0,
          background: '#000',
          borderTop: '1px solid #eee'
        }}
      >
        <div style={{
          // position: 'absolute',
          // bottom: 19,
          width: 'calc(100% - 20px)',
          borderRadius: '12px',
          // background: UIConfig.Colors.Primary,
          background: '#FFF',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 600,
        }}>
          Send
        </div>
      </div>

    </div>);
};


export default SendGiftPopup;
