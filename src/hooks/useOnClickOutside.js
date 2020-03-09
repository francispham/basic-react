import { useEffect } from 'react';

function useOnClickOutside(ref) {
    useEffect(() => {
        console.log(ref.current);
    }, []);
};

export { useOnClickOutside };