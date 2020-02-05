import React from 'react';

function Input({updateText, textValue}) {
    return (
        <label>
            Type Here!
            <input onChange={updateText} type="text" value={textValue}></input>
        </label>
    )
}

export default Input;