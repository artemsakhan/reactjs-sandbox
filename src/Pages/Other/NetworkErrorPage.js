import CloudExclamationShape from "../../Shapes/CloudExclamationShape";
import ReloadShape from "../../Shapes/ReloadShape";

const NetworkErrorPage = ({}) => {
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
                <CloudExclamationShape width={100} height={100} fillColor2={'#000'} styles={{
                    marginBottom: '13px',
                }}/>
                <p style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    margin: 0,
                    color: '#000',
                }}>502</p>
                <p style={{
                    fontSize: '18px',
                    maxWidth: '60%',
                    color: '#000',
                }}>Something went wrong, try reloading the page</p>
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
                <span>Reload</span>
                <ReloadShape width={20} height={20} fillColor={'#FFF'} styles={{
                    marginTop: '4px',
                    marginLeft: '7px',
                }}/>
            </div>
        </div>
    )
}

export default NetworkErrorPage;