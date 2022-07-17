// Code EyesOnMe Component Here
import React from 'react';

function eyesOnMe () {
    function updateFocus(){
        console.log("Good!")
    }
    function updateBlur(){
        console.log("Hey! Eyes on me!")
    }
    return <button onFocus={updateFocus} onBlur={updateBlur}>Eyes on me</button>


    }

export default eyesOnMe;