import React, { useState, useEffect } from 'react';
import { useSpring, animated } from "react-spring";

import DishForm from './DishForm';

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

    // Use React Spring:
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    console.log('Props: ', props);

    return (
        <div className="main-wrapper">
            <animated.h1 style={props}>Delicious Dishes</animated.h1>
            <Trigger />
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
            {dishes && dishes.map(dish => (
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
        </div>
    );
};

const Trigger = () => {
    const [isToggle, setToggle] = useState(false);
    return (
        <div>
            {isToggle ? (
                <div>
                    No Trigger useEffect in DishesList Component!
                    <DishForm setToggle={setToggle} />
                </div>
            ): (
                <button onClick={() => setToggle(!isToggle)}>Open Modal</button>
            )}
        </div>
    );
};

export default DishesList;