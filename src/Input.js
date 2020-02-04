import React from 'react';

function Input({help, textValue}) {
    return (
        <label>
            Type Here!
            <input onChange={help} type="text" value={textValue}></input>
        </label>
    )
}

export default Input;