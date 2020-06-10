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

    // Variables
    let [light, setLight] = useState(true);
    let [temp, setTemp] = useState(22);

    // Functions
    const onLight = () => {
        setLight(true);
    }

    const offLight = () => {
        setLight(false);
    }

    const increaseTemp = () => {
        setTemp(++temp);
    }

    const decreaseTemp = () => {
        setTemp(--temp);
    }

    return (
        
        <div>
            <div>
                <h1>Assignment</h1>
                <div>
                    <h2>Light is: { light ? 'On' : 'Off' }</h2>  
                    <button onClick={ onLight }>On</button>  
                    <button onClick={ offLight }>Off</button>        
                </div>
                
                <div>
                    <h2>Temperature is: { temp } &deg;C</h2>  
                    <button onClick={ increaseTemp }>Increase</button>  
                    <button onClick={ decreaseTemp }>Decrease</button>        
                </div>
            </div>

            <hr />  

            <div className={ "room " + (isLit ? 'lit' : 'dark') }>
                <h1>Class Work</h1>

                <h2>Room is { isLit ? 'Lit' : 'Not Lit' }</h2>
                <button onClick={ updateLit }>Toggle Light</button>

                <h2>Counter: { counter }</h2>
                <button onClick={ updateCounter }>Increase Counter</button>
            </div>
        </div>
    )
}
