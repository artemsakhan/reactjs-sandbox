import React, {useEffect, useState} from 'react';
import Tabbar from "./Tabbar";
import UIConfig from "./UIConfig";
import MatchesPage from "./Pages/Discovery/Discovery";
import MessagesPage from "./Pages/Messages/Messages";

const App = () => {
    const [pageIndex, setPageIndex] = useState(1);

    useEffect(bodyScrollControl, [])

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