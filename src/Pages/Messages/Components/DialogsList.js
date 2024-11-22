import ChatListSkeleton from "./ChatListSkeleton";
import {useEffect, useState} from "react";

const DialogsList = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <div style={containerStyle}>
            <div>
                {children}
            </div>
            {isLoading && <ChatListSkeleton/>}
        </div>
    )
}

const containerStyle = {
    marginTop: '0px',
    position: 'relative',
}

export default DialogsList;