import React from 'react';

function ClearButton({clearInput}) {
    return (
        <button onClick={clearInput}>
            Reset
        </button>
    )
}

export default ClearButton;