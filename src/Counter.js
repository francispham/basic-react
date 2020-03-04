import React, { useReducer } from 'react';

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
        case 'add 10':
            return {
                count: state.count + action.value
            };
        case 'add':
            return {
                count: state.count + 1
            };
        case 'minus':
            return {
                count: state.count - 1
            };
        case 'reset':
            return {
                count: initialState.count
            };
        default:
            throw new Error();
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({ type: 'add 10', value: 10 })}>+10</button>&nbsp;
            <button onClick={() => dispatch({ type: 'add'})}>+</button>&nbsp;
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>&nbsp;
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
};

export default Counter;