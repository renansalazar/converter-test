import React from 'react'
import {formatearNumero} from '../../utils/formatedNumber'

function Result ({valueConverter, chance}) {

    return (<div data-testid="converterResult" className='containerResult'>
        {
            chance===0 ? 
                <p>Ingrese un valor y presione Convertir</p>
            :
                <p>{formatearNumero(valueConverter)}</p>
        }
    </div>
    )

}

export default Result