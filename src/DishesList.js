import React, { useState, useEffect } from 'react';

import { useTitleInput } from './hooks/useTitleInput';

const DishesList = () => {
    console.log('ran')
    const [name, setName] = useTitleInput('');
    const [dishes, setDishes] = useState([]);
    
    const fetchDishes = async () => {
        const res = await fetch(
            'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
        );
        const data = await res.json();
        setDishes(data);
    }

    useEffect(() => {
        fetchDishes();
    }, [name]); 
    // [] turns fetchDishes() into 'componentDidMount()'
    // [name] triggers fetchDishes() only if 'name' is changed!

    return (
        <div className="main-wrapper">
            <h1>Delicious Dishes</h1>
            <h3>{name}</h3>
            <form
                onSubmit={e => {
                    e.preventDefault();
                }}
            >
                <input
                    type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                />
                <button>Submit</button>
            </form>
            <br />
            {dishes.map(dish => (
                <article className="dish-card dish-card--withImage">
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                    <div className="ingredients">
                        {dish.ingredients.map(ingredient => (
                            <span>{ingredient}</span>
                        ))}
                    </div>
                </article>
            ))}
            <Trigger />
        </div>
    )
};

const Trigger = () => {
    const [isToggle, setToggle] = useState(false);
    return (
        <div>
            {
                isToggle &&
                <div>
                    No Trigger useEffect in DishesList Component!
                </div>
            }
            &nbsp;
            <button onClick={() => setToggle(!isToggle)}>No Trigger</button>
        </div>
    )
}

export default DishesList;