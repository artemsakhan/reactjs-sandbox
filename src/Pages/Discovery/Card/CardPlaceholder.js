import React from "react";
import UIConfig from "../../../UIConfig";

const CardPlaceholder = ({children, zIndex = 1}) => {
    return (
        <div
            style={{
                ...cardStyles,
                zIndex,
            }}
        >
            <div style={contentStyle}>
                <div style={{ width: '100%', height: '100%', position: 'relative'}}>
                    {children}
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