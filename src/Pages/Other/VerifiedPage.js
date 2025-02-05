import ErrorShape from "../../Shapes/ErrorShape";

const VerifiedPage = () => {
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
                {/* @TODO ADD HERE SUCCESS VERIFICATION ANIMATION */}
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#000',
                }}>You're In</p>
                <p style={{
                    fontSize: '18px',
                    maxWidth: '60%',
                    color: '#000',
                }}>Verification complete! You're all set - enjoy exploring the app.</p>
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
                Explore
            </div>
        </div>
    )
}

export default VerifiedPage;