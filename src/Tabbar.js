import UIConfig from "./UIConfig";
import SearchSquareShape from "./Shapes/SearchSquareShape";
import HeartSimpleShape from "./Shapes/HeartSimpleShape";
import UserSquareShape from "./Shapes/UserSquareShape";
import {useState} from "react";
import ChatShape from "./Shapes/ChatShape";

const iconSize = '24px';

const Tabbar = ({onSwitchPage, theme}) => {
    const [activeTab, setActiveTab] = useState(1);

    const isActiveTab = (id) => activeTab === id

    const switchPageTo = (id) => {
        setActiveTab(id)
        onSwitchPage(id)
    }

    const activeColor = theme === 'dark' ? UIConfig.Colors.Primary : '#000';
    const inactiveColor = theme === 'dark' ? UIConfig.TabBar.Icon.Background : 'rgb(191 184 201)';

    return (
        <div className="tabbar" style={{
            ...containerStyle,
            ...(theme === 'white' && {
                background: UIConfig.Colors.BackgroundWhite,
                borderTop: '1px solid rgb(224 224 224)',
            })
        }}>
            <div className="tabbarList" style={listStyle}>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(1)}>
                    <SearchSquareShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(1) ? activeColor : inactiveColor}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(1) ? {color: activeColor} : {color: inactiveColor})
                        }}
                    >
                        Search
                    </span>
                </div>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(2)}>
                    <ChatShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(2) ? activeColor : inactiveColor}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(2) ? {color: activeColor} : { color: inactiveColor})
                        }}
                    >
                        Messages
                    </span>
                </div>
                <div className="tabbarListItem" style={listItemStyle} onClick={() => switchPageTo(3)}>
                    <UserSquareShape
                        width={iconSize}
                        height={iconSize}
                        fill={isActiveTab(3) ? activeColor : inactiveColor}
                    />
                    <span
                        className="tabbarListItemText"
                        style={{
                            ...listItemTextStyle,
                            ...(isActiveTab(3) ? {color: activeColor} : { color: inactiveColor})
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