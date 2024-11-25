import React, {useEffect, useState} from "react";

import {Toast, useToastControls} from "../../hooks/useToastControls";
import YouGotLikeNotification from "./Components/YouGotLikeNotification";
import YouGotMessageNotification from "./Components/YouGotMessageNotification";
import YouGotGiftNotification from "./Components/YouGotGiftNotification";


function ProfilePage() {
    const [_state, setState] = useState({});
    const { show, close, closeAll } = useToastControls();

    return (
        <div style={{
            marginTop: '140px',
        }}>
            <ul>
                <li>
                    <button style={buttonStyle} onClick={() => show("toast-first")}>Show Like Toast</button>
                    <button style={buttonStyle} onClick={() => close("toast-first")}>
                        Remove
                    </button>
                    <Toast uniqueId="toast-first">
                        <YouGotLikeNotification handleClose={() => close('toast-first')}/>
                    </Toast>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => show("toast-2nd")}>Show Message Toast</button>
                    <button style={buttonStyle} onClick={() => close("toast-2nd")}>
                        Remove
                    </button>
                    <Toast uniqueId="toast-2nd">
                        <YouGotMessageNotification handleClose={() => close('toast-2nd')}/>
                    </Toast>
                </li>
                <li>
                    <button style={buttonStyle} onClick={() => show("toast-3rd")}>Show Gift Toast</button>
                    <button style={buttonStyle} onClick={() => close("toast-3rd")}>
                        Remove
                    </button>
                    <Toast uniqueId="toast-3rd">
                        <YouGotGiftNotification handleClose={() => close('toast-3rd')}/>
                    </Toast>
                </li>

            </ul>
        </div>
    );
}

const buttonStyle = {
    background: '#FFF',
    color: "#000",
    padding: '15px',
};

export default ProfilePage;
