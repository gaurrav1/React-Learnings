import React from 'react'
import { useState } from 'react'
import DisplayString from './DisplayString'

function FunctionalComponent({favouriteNumber}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

  return (
    <>
        <input value={name} onChange={ e => setName(e.target.value)} />
        <br /><br />
        <button onClick={() => setAge( currentAge => currentAge - 1)}> - </button>
        &nbsp;{age}&nbsp;
        <button onClick={() => setAge( currentAge => currentAge + 1)}> + </button>
        <br /><br />
        {favouriteNumber != null && `My favorite number is ${favouriteNumber}` }
        <br />
        {favouriteNumber > 5 ? `My favorite number is more than 5` : `My favorite number is less than 5`}
        <DisplayString name={name} age={age} />
    </>
  )
}

export default FunctionalComponent