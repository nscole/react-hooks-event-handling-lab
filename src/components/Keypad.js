// Code Keypad Component Here
import React from 'react';

function keypad () {
    function ChangeEvent(){
        console.log("Entering password...")
    }
    return <input onChange={ChangeEvent} type="password" />
}

export default keypad;