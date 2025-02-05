import BanShape from "../../Shapes/BanShape";
import SupportShape from "../../Shapes/SupportShape";

const BanPage = ({handleClose}) => {
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
                <BanShape width={70} height={70} fillColor={'#b4b6bc'} styles={{
                    marginBottom: '20px',
                }}/>
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#000',
                }}>Sorry</p>
                <p style={{
                    fontSize: '18px',
                    maxWidth: '70%',
                    color: '#000',
                }}>Your profile has been banned.<br/> If you have questions or would like to appeal, please contact our
                    support team.</p>
            </div>
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

export default BanPage;