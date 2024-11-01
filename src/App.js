import React, {useState} from 'react';
import './index.css';
import Tabbar from "./Tabbar";
import UIConfig from "./UIConfig";
import MatchesPage from "./Pages/MatchesPage";
import MessagesPage from "./Pages/MessagesPage";

const App = () => {
    const [pageIndex, setPageIndex] = useState(1);

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
            <Tabbar onSwitchPage={setPageIndex}/>
        </div>
    );
};


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