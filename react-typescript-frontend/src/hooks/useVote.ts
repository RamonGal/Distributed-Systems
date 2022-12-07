
// based on the vote props send a websocket message to the server
import { useEffect } from 'react';

const useVote = (sendWSMessage: Function, id: number, vote_bool:boolean) => {
    const voteMsgDict = {
        "type": "vote",
        "user_id": id,
        "message": {
            "vote_bool": vote_bool
        }
    }
    useEffect(() => {
        sendWSMessage(voteMsgDict)
    }, []);
};

export default useVote;