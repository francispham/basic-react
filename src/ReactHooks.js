import React, { createContext } from 'react';
import Toggle from './Toggle';
import Counter from './Counter';

import useTitleInput from './hooks/useTitleInput';

export const UserContext = createContext();

const ReactHooks = () => {
    const [name, setName] = useTitleInput('');

    return (
        <UserContext.Provider
            value={{
                user: true,
            }}
        >
            <div className="main-wrapper">
                <h1>Introduce React Hooks</h1>
                <Counter />
                <br />
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
                    />&nbsp;
                    <button>Submit</button>
                
                </form>
            </div>
        </UserContext.Provider>
    );
}

const formSubmit = (value, setValue) => {
    console.log('Tittle is ' + value + '!');
    setValue(''); //This will Clear the Input after Form is Submitted
}


// Custom Hook:


export default ReactHooks;