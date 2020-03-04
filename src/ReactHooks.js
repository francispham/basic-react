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
            <form onSubmit={e => {
                e.preventDefault();
                formSubmit(name, setName);
            }}>
                <input 
                    type="text" 
                    onChange={e => setName(e.target.value)} 
                    value={name} 
                />
                <button>Submit</button>
            
            </form>
        </div>
    );
}

const formSubmit = (value, setValue) => {
    console.log('Email Sent to ' + value + '!');
    setValue(''); //This will Clear the Input after Form is Submitted
}

export default ReactHooks;