import { useEffect, useState } from 'react';

// show alert when timer is up, with title, message and timer animation
const useTimerAlert = (title:string, message:string) => {
    const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
        // After 3 seconds set the show value to false
        setShow(false)
        }, 3000)

        return () => {
        clearTimeout(timeId)
        }
    }, []);

    // If show is false the component will return null and stop here
    if (!show) {
        return null;
    }

    // If show is true this will be returned
    return (
                
    )
}

export default useTimerAlert;