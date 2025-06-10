import React from "react";
import UIConfig from "../../../UIConfig";
import {motion} from "framer-motion";
import PageShape from "../../../Shapes/PageShape";
import SearchShape from "../../../Shapes/SearchShape";
import SadSmileShape from "../../../Shapes/SadSmileShape";
import PhotoShape from "../../../Shapes/PhotoShape";
import CloseShape from "../../../Shapes/CloseShape";
import GhostShape from "../../../Shapes/GhostShape";
import LockShape from "../../../Shapes/LockShape";
import HeartRoundShape from "../../../Shapes/HeartRoundShape";
import CheckShape from "../../../Shapes/CheckShape";
import SadShape from "../../../Shapes/SadShape";
import HeartSimpleShape from "../../../Shapes/HeartSimpleShape";
import HeartIcon from "../../../Shapes/HeartIcon";
import HeartExploadingLottie from "../../../Other/HeartExploadingLottie";
import RocketShape from "../../../Shapes/RocketShape";

const NoLikesPage = () => {
    return (
        <>
            <div style={{
                width: '94px',
                height: '94px',
                borderRadius: '60px',
                background: '#fff',
                position: 'relative',
                marginBottom: '15px',
            }}>
                <HeartRoundShape width={100} height={100} fillColor={'rgb(202 204 211)'} style={{
                    marginTop: '0px',
                    marginLeft: '-2px',
                }}/>
                <div style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: 'rgb(202 204 211)',
                    left: '-25px',
                    top: '92px',
                }}>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '10px',
                    background: 'rgb(202 204 211)',
                    left: '-30px',
                    top: '32px',
                }}>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: 'rgb(202 204 211)',
                    right: '-25px',
                    top: '12px',
                }}>
                </div>
            </div>
            <h2 style={{
                margin: '10px 0px 14px',
                color: '#000',
            }}></h2>
        </>
    )
}

const InsufficientData = () => {
    return (
        <>
            <div style={{
                width: '94px',
                height: '94px',
                borderRadius: '60px',
                background: '#2f333d',
                position: 'relative',
                marginBottom: '15px',
            }}>
                <PhotoShape width={100} height={100} fillColor={'#686f85'} styles={{
                    marginTop: '-5px',
                    marginLeft: '-2px'
                }}/>
                <div style={{
                    position: 'absolute',
                    width: '30px',
                    height: '30px',
                    borderRadius: '18px',
                    background: '#d9e0ec',
                    bottom: '5px',
                    left: '33px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CloseShape width={25} height={25} fillColor={'#2f333d'} strokeWidth={3} style={{
                        transform: 'rotate(45deg)'
                    }}/>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: '#2f333d',
                    left: '-25px',
                    top: '92px',
                }}>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    borderRadius: '10px',
                    background: '#2f333d',
                    left: '-30px',
                    top: '32px',
                }}>
                </div>
                <div style={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: '#2f333d',
                    right: '-25px',
                    top: '12px',
                }}>
                </div>
            </div>
            <h2 style={{
                margin: '10px 0px 14px',
            }}>No photos</h2>
            <p style={{
                margin: 0,
                maxWidth: '65%',
                color: '#a6a7ab',
            }}> Please add some photos<br/> to help others get to know you better.</p>
            <motion.div style={{
                borderRadius: '20px',
                border: `1px solid ${UIConfig.Colors.Primary}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '40px',
            }}>
                    <span style={{
                        fontSize: '15px',
                        padding: '11px 18px',
                        fontWeight: 'bold',
                        color: UIConfig.Colors.Primary,
                        fontFamily: UIConfig.Fonts.Primary,
                    }}>
                        Add a photo
                    </span>
            </motion.div>
        </>
    )
}

const NoResults = () => {
    const canExtendSearch = true

    return (
      <>
          <div style={{
              width: '98px',
              height: '98px',
              borderRadius: '60px',
              background: '#2f333d',
              position: 'relative',
              marginBottom: '15px',
              border: '3px solid #fff',
              // overflow: 'hidden',
          }}>
              <img
                src="https://lyranova.s3.eu-central-1.amazonaws.com/9qje02W/anmvl.6365458b6f4ae.800x600.webp"
                   alt=""
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                }}
              />

              <HeartSimpleShape width={14} height={14} fill={'rgb(255 255 255 / 50%)'} style={{
                  position: 'absolute',
                  borderRadius: '5px',
                  left: '-16px',
                  top: '85px',
                  transform: 'rotate(-16deg)',
              }}/>
              <HeartSimpleShape width={30} height={30} fill={'rgb(255 255 255 / 50%)'} style={{
                  position: 'absolute',
                  borderRadius: '10px',
                  left: '-40px',
                  top: '32px',
                  transform: 'rotate(-26deg)',
              }}/>
              <HeartSimpleShape width={20} height={20} fill={'rgb(255 255 255 / 50%)'} style={{
                  position: 'absolute',
                  borderRadius: '5px',
                  right: '-25px',
                  top: '0px',
                  transform: 'rotate(16deg)',
              }}/>
              <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#FFF',
                  position: 'absolute',
                  top: '67px',
                  left: '64px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
              }}>
                  <RocketShape width={21} height={21} fill={'#911e85'}/>

              </div>
          </div>

          <h2 style={{
              margin: '10px 0px 14px',
          }}>Твої лайки <br/>у перших рядах</h2>
          {/*<p style={{*/}
          {/*    margin: 0,*/}
          {/*    maxWidth: '70%',*/}
          {/*    color: '#a6a7ab',*/}
          {/*}}>Seems like you're ahead<br/> of the crowd! Try increasing your search filters age range. </p>*/}
          <p style={{
              margin: 0,
              maxWidth: '70%',
              color: '#fff',
              fontSize: '14px',
          }}>
              Обирай <b>Premium</b> і твоя симпатія не залишиться непоміченою.
          </p>

          <motion.div style={{
              borderRadius: '20px',
              // border: `1px solid ${UIConfig.Colors.Primary}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px',
              background: "#fff",
          }}>
                    <span style={{
                        fontSize: '15px',
                        padding: '11px 18px',
                        fontWeight: 'bold',
                        color: 'rgb(145 30 133)',
                        fontFamily: UIConfig.Fonts.Primary,
                    }}>
                        Go Premium
                    </span>
          </motion.div>
      </>
    )
}

const CardPlaceholder = ({children, zIndex = 1}) => {
    let canExtendSearch = true;
    return (
      <div
        style={{
            ...cardStyles,
            zIndex,
        }}
      >
          <div style={contentStyle}>
              <div style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
              }}>
                  {children || (
                    <div style={{
                        color: '#FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width: '100%',
                            height: '100%',
                        borderRadius: '35px',
                        backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(123 134 255) 0%, rgb(221 106 210) 90%)',
                        }}>
                            <NoResults/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const contentStyle = {
    width: 'calc(100% - 25px)',
    height: 'calc(100% - 25px)',
    background: UIConfig.Colors.BackgroundMedium,
    borderRadius: '35px',
    position: "relative",
    marginTop: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}

const cardStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    touchAction: "none",
    borderRadius: '35px',
    overflow: 'hidden',
    zIndex: 1,
}

export default CardPlaceholder;