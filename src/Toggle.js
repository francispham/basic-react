import React, { useState, useRef, useContext } from 'react';
import { UserContext } from './ReactHooks';

const Toggle = () => {
    const [isToggle, setToggle] = useState(false);

    const userInfo = useContext(UserContext);
    console.log('userInfo: ', userInfo);
    
    const ref = useRef()
    console.log('ref: ', ref.current);
    if(!userInfo.user) return null;

    return (
        <div ref={ref}>
            {
                isToggle && 
                <button onClick={() => ref.current.classList.add('new-class-from-ref')}>
                HELLO
                </button>
            }
            &nbsp;
            <button onClick={()=> setToggle(!isToggle)}>Toggle</button>
        </div>
    );
};

export default Toggle;

/* Original Class Component:

import React, { Component } from 'react';

export default class Refactor extends Component {
    state = {
        isToggle: false
    };

    toggle = () => {
        this.setState(state => {
            return { isToggle: !state.isToggle };
        });
    };

    render() {
        return (
            <div>
                {this.state.isToggle && <h2>HELLO</h2>}
                <button onClick={this.toggle}>Toggle</button>
            </div>
        )
    }
};
*/