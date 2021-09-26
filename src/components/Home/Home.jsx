import React, {useState} from "react";
import Button from '../Button'
import Result from '../Result'
import {getConverter} from '../../services/converter'

const Home = () => {
    const [valueConvert, setValueConvert] = useState(0)
    const [valueInput, setValueInput] = useState('0')
    const [chance, setChance] = useState(0)

    const converter = () => {
      getConverter(valueInput).then(valueNew=>{
        setValueConvert(valueNew)
        setChance((prev)=>prev+1)
      })
    }

    return (
      <div className='container'>
        <div className='content'>
          <h1>Convertidor de Soles a Dolares</h1>
          <input 
            data-testid="converterInput" 
            type="number" 
            placeholder="Ingresar Texto"
            value={valueInput}
            onChange={(e)=>setValueInput(e.target.value)}
          />
          <Button 
            handleClick={converter}
            disabled={valueInput==='0' || valueInput===''}
          />
          <Result valueConverter={valueConvert} chance={chance} />
        </div>
      </div>
    )

};

export default Home;