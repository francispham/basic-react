import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        return function () {
            document.body.style.overflow = originalOverflow;
        }
        /* Similar: 
        return function cleanup() {
            document.body.style.overflow = '';
        }
        */
    }, []); // [] is to ensure useLayoutEffect() to run once!
};

export { useBodyScrollLock };