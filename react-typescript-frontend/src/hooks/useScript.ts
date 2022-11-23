import { useEffect } from 'react';

const useScript = (url:string) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = true;
        document.body.appendChild(script);
    }, []);
};

export default useScript;