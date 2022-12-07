import useVote from "../hooks/useVote";
import { useState } from "react";

// a notification alert with timer 
export interface notificationProps {
    sendWebsocketMessage: Function,
    percent: number, 
    message: string, 
    title: string, 
    time?: number, 
    imgsrc?: string,
    imgalt?: string,
    vote?: boolean
    id: number
}

function NotificationWithTimer(props : notificationProps) {
    return (
        <div className="alert shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                    <h3 className="font-bold">{props.title}</h3>
                    <div className="text-xs">{props.message}</div>
                </div>
            </div>   
            <div className="flex items-center"> 
                {
                    props.time 
                    &&
                    <div className="flex-none">
                        <h3>{props.time}</h3>            
                        <progress className="progress progress-primary w-56" value={props.percent} max={props.percent}></progress>
                    </div>
                }
                {
                    props.imgsrc 
                    &&
                    <img src={props.imgsrc} alt={props.imgalt} className="rounded-full w-10 h-10" />
                }
                {
                    props.vote
                    &&
                    <div className="flex-none">
                        // on click, call useVote hook and pass the boolean value of the button
                        <button className="btn btn-outline btn-success" onClick={() => useVote(props.sendWebsocketMessage, props.id, false)}>No</button>
                        <button className="btn btn-outline btn-error" onClick={() => useVote(props.sendWebsocketMessage, props.id, true)}>Yes</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default NotificationWithTimer;

