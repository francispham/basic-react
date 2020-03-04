import React, { useState } from 'react';

const Toggle = () => {
    const [isToggle, setToggle] = useState(false);

    return (
        <div>
            {isToggle && <h2>HELLO</h2>}
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