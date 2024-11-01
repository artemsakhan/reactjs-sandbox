import UIConfig from "./UIConfig";
import SearchSquareShape from "./Shapes/SearchSquareShape";
import HeartSimpleShape from "./Shapes/HeartSimpleShape";
import UserSquareShape from "./Shapes/UserSquareShape";
import {useState} from "react";
import ChatShape from "./Shapes/ChatShape";

const iconSize = '24px';

const Tabbar = ({onSwitchPage}) => {
    const [activeTab, setActiveTab] = useState(1);

    const isActiveTab = (id) => activeTab === id

    const switchPageTo = (id) => {
        setActiveTab(id)
        onSwitchPage(id)
    }

    return (
        <div className="tabbar" style={containerStyle}>
            <div className="tabbarList" style={listStyle}>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(1)}>
                    <SearchSquareShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(1) ? UIConfig.Colors.Primary : UIConfig.TabBar.Icon.Background}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(1) ? {color: UIConfig.Colors.Primary} : {})
                        }}
                    >
                        Search
                    </span>
                </div>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(2)}>
                    <ChatShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(2) ? UIConfig.Colors.Primary : UIConfig.TabBar.Icon.Background}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(2) ? {color: UIConfig.Colors.Primary} : {})
                        }}
                    >
                        Messages
                    </span>
                </div>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(3)}>
                    <UserSquareShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(3) ? UIConfig.Colors.Primary : UIConfig.TabBar.Icon.Background}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(3) ? {color: UIConfig.Colors.Primary} : {})
                        }}
                    >
                        Profile
                    </span>
                </div>

            </div>
        </div>
    )
}

const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    ...UIConfig.TabBar.Content,
}

const listStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '10px',
}

const listItemStyle = {
    width: '70px',
    height: '25px',
    outline: 'none',
    textAlign: 'center',
    appearance: 'none',
    ...UIConfig.TabBar.Icon,
}

const listItemTextStyle = {
    fontSize: '11px',
    display: 'block',
    userSelect: 'none',
}

export default Tabbar;