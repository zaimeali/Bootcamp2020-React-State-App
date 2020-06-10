import React, { useState } from 'react'

export const Room = () => {

    let [isLit, setLit] = useState(true);

    let [counter, setCounter] = useState(0);

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
        <div>
            <h2>Room is { isLit ? 'Lit' : 'Not Lit' }</h2>
            <button onClick={ updateLit }>Toggle Light</button>

            <hr />

            <h2>Counter: { counter }</h2>
            <button onClick={ updateCounter }>Increase Counter</button>
        </div>
    )
}
