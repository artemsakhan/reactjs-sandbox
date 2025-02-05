import LottieAnimation from "../../Other/LottieAnimation";
import loadingAnimationData from "../../Assets/clock_wait.json";
import SupportShape from "../../Shapes/SupportShape";
import React from "react";

const BeingModeratedPage = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            background: '#FFF',
            zIndex: 2,
        }}>
            <div style={{
                width: '100%',
                height: '40%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <LottieAnimation
                    width={120}
                    height={120}
                    animationData={loadingAnimationData}
                    shouldAnimate={true}
                    loop={true}
                    speed={0.8}
                />
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#000',
                }}>Hang tight</p>
                <p style={{
                    fontSize: '18px',
                    maxWidth: '60%',
                    color: '#000',
                }}>We're reviewing your profile and will notify you once it's done.</p>
            </div>
            <p style={{
                // @TODO REMOVE ABSOLUTE, USE SOMETHING ELSER
                position: 'absolute',
                bottom: '90px',
                color: 'rgb(97 97 97)',
                fontSize: '13px',
            }}>Taking too long? Contact us.</p>
            <div style={{
                position: 'absolute',
                bottom: '20px',
                width: 'calc(100% - 60px)',
                height: '60px',
                color: '#FFF',
                border: 'none',
                borderRadius: '45px',
                background: '#000',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
                textAlign: 'center',
                appearance: 'none',
                fontWeight: 500,
                marginBottom: '10px',
            }}>
                <span>Support</span>
                <SupportShape width={22} height={22} fillColor={'#FFF'} styles={{
                    marginTop: '3px',
                    marginLeft: '10px',
                }}/>
            </div>
        </div>
    )
}

export default BeingModeratedPage;