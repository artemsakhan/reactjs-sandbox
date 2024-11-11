import React, {useEffect, useState} from 'react';
import Tabbar from "./Tabbar";
import UIConfig from "./UIConfig";
import MatchesPage from "./Pages/Discovery/Discovery";
import MessagesPage from "./Pages/Messages/Messages";
import {Centrifuge} from "centrifuge";

const App = () => {
    const [pageIndex, setPageIndex] = useState(1);

    useEffect(bodyScrollControl, [])

    useEffect(() => {
        const centrifuge = new Centrifuge('wss://rtm.kyivdate.app/connection/websocket');

        centrifuge.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzEyNTYzMzQsImlhdCI6MTczMTI1MjczNCwicm9sZXMiOltdLCJzdWIiOiI2OSIsInVzZXJfaWQiOiI2OSJ9.bzAYwa5bt50QOWr0vqMES_P7vJD9PxJGnnMeVTxw9IQ');

        centrifuge.on('connect', context => {
            console.log('Connected to Centrifugo:', context);
        });

        centrifuge.on('disconnect', context => {
            console.log('Disconnected:', context);
        });

        const subscription = centrifuge.newSubscription('user#69');

        subscription.subscribe();
        subscription.on('publication', (message) => {
            console.log('Received message:', message);
        });

        centrifuge.connect();

        return () => {
            // Clean up on component unmount
            centrifuge.disconnect();
        };
    }, []);

    return (
        <div className="App" style={containerStyle}>
            <div className="AppContent" style={contentStyle}>
                {
                    pageIndex === 1 && (
                        <MatchesPage/>
                    )
                }
                {
                    pageIndex === 2 && (
                        <MessagesPage/>
                    )
                }
            </div>
            <Tabbar onSwitchPage={setPageIndex} theme={pageIndex === 1 ? 'dark' : 'white'}/>
        </div>
    );
};

const bodyScrollControl = () => {
    // Disable scrolling in the entire app
    document.body.style.overflow = 'hidden';

    // Disable scrolling on touch devices
    const preventScroll = (e) => {
        e.preventDefault();
    };

    window.addEventListener('touchmove', preventScroll, {passive: false});

    return () => {
        // Re-enable scrolling when the component unmounts
        document.body.style.overflow = '';
        window.removeEventListener('touchmove', preventScroll);
    };
}

const containerStyle = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: UIConfig.Colors.BackgroundDark,
};

const contentStyle = {
    width: '100%',
    height: 'calc(100% - 80px)',
    overflow: "hidden",
    position: "relative",
};

export default App;