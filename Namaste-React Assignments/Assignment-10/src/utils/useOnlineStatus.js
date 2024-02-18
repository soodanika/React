import { useState } from "react";

const useOnlineStatus = () => {
    let [onlineStatus, setOnlineStatus] = useState(true)

    window.addEventListener("offline", () => {
        setOnlineStatus(false)
    })

    window.addEventListener("online", () => {
        setOnlineStatus(true)
    })

    return onlineStatus;

}

export default useOnlineStatus;