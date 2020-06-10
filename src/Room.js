import React, { useState } from 'react'

import './Room.css';

export const Room = () => {

    let [isLit, setLit] = useState(true);

    let [counter, setCounter] = useState(0);

    // let [hello, setHello] = useState("Hello World");

    // console.log(useState(true));

    const updateLit = () => {
        console.log("Button Clicked");
        // isLit = !isLit;
        setLit(!isLit);
    }

    const updateCounter = () => {
        setCounter(++counter);
    }

    return (
        <div className={ "room " + (isLit ? 'lit' : 'dark') }>
            <h2>Room is { isLit ? 'Lit' : 'Not Lit' }</h2>
            <button onClick={ updateLit }>Toggle Light</button>

            <hr />

            <h2>Counter: { counter }</h2>
            <button onClick={ updateCounter }>Increase Counter</button>
        </div>
    )
}
