import React, { useState } from 'react';
import Toggle from './Toggle';

const ReactHooks = () => {
    // const [value, setValue] = useState(initialState);
    const [name, setName] = useState('');

    return (
        <div className="main-wrapper">
            <h1>Introduce React Hooks</h1>
            <Toggle />
            <h3>{name}</h3>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
        </div>
    );
}

export default ReactHooks;