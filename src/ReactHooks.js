import React from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';

const ReactHooks = () => {
    const [name, setName] = useTitleInput('');

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
    console.log('Tittle is ' + value + '!');
    setValue(''); //This will Clear the Input after Form is Submitted
}


// Custom Hook:


export default ReactHooks;