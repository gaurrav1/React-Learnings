import { useState } from "react"

export default function NameAge() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)


    function increase() {
        setAge( currentAge => currentAge + 1)
    }

    function decrease() {
        setAge( currentAge => currentAge - 1)
    }


    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <button type="number" onClick={decrease} > - </button>
            <span>{age}</span>
            <button type="number" onClick={increase} > + </button>

            <br />
            <br />
            <span>This is {name} and I'm {age} years old...</span>
            
        </>
    )
}