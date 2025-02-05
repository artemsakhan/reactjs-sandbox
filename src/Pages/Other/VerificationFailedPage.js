import ErrorShape from "../../Shapes/ErrorShape";
import PhotoShape from "../../Shapes/PhotoShape";

const VerificationFailedPage = ({}) => {
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
                <ErrorShape width={70} height={70} fillColor={'#b4b6bc'} styles={{
                    marginBottom: '20px',
                }}/>
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#000',
                }}>Oops</p>
                <p style={{
                    fontSize: '18px',
                    maxWidth: '60%',
                    color: '#000',
                }}>Your profile photos didn’t pass our review. Try different ones</p>
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
                <PhotoShape width={27} height={27} fillColor={'#FFF'} styles={{
                    marginTop: '2px',
                }}/>
                <span style={{
                    marginLeft: '8px',
                }}>Re-Upload</span>
            </div>
        </div>
    )
}

export default VerificationFailedPage;