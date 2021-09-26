import React from 'react'

function Button ({handleClick, disabled}) {
    return (
        <button 
            data-testid="converterButton" 
            onClick={handleClick}
            disabled={disabled}
        >
            Convertir
        </button>
    )

}

export default Button