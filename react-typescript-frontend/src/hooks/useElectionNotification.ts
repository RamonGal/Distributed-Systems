// create a custom hook to handle the election notification, and return a notificationprops object
import { useEffect } from 'react';
const useElectionNotification = (sendWSMessage: Function, user_id: number, img_src: string) => {
    const msgDict = {
        "type": "election",
        "user_id": user_id,
        "message": {
            "img_src": img_src
        }
    }
    useEffect(() => {
        sendWSMessage(msgDict);

    }, []);
};

export default useElectionNotification;
