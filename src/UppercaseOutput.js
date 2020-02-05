import React from 'react';

function UppercaseOutput({textValue}) {
    return (
        <div>
            {textValue.toUpperCase()}
        </div>
    )
}

export default UppercaseOutput;