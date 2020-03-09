import React, { useRef } from 'react';

import { useBodyScrollLock } from './hooks/bodyScrollLock';
import { useOnClickOutside } from './hooks/useOnClickOutside';

const DishForm = () => {
    const ref = useRef();

    useOnClickOutside(ref);

    useBodyScrollLock();
    return (
        <div className="dish-card" ref={ref}>
            <form>
                <div className="form-row">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" />
                </div>
            </form>
        </div>
    );
};

export default DishForm;