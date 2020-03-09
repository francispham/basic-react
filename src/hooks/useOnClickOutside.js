import { useEffect } from 'react';

function useOnClickOutside(ref) {
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                console.log(ref.current);
            }
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        
        // this returned function is 'cleanup' for Event Listener: 
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, []);
};

export { useOnClickOutside };