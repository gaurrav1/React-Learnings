import { useState } from "react"

function slowGreet() {
    console.log("Slow greet called")
    return "Gauravvv"
}

export default function UseStateHook() {
    const [name, setName] = useState(slowGreet)
    const [count, setCount] = useState(1)
    const [person, setPerson] = useState({name: "Gauravv", age: 19})

    console.log("Name is", name)
    console.log("Count is ", count)

    function changeName() {
        setName("Gaurav")

        // console.log("Before +1: ", count)
        // // Only increamented with 1. Because at this function point, both will receive common value of count and will return same value.
        // setCount(count + 1)
        // console.log("After +1 and Before +1: ", count)
        // setCount(count + 1)
        // console.log("After +1: ", count)

        console.log("Before first: ", count)
        setCount( (currentCount) => {
            console.log(currentCount)
            return currentCount + 1;
        })

        console.log("After first and Before second: ", count)
        setCount( (currentCount) => {
            console.log(currentCount)
            return currentCount + 1;
        })
        console.log("After second: ", count)

        setPerson( currentPerson => {
        return {...currentPerson, name: "Gaurav"}
        })

    }
    return(
        <>
            <h1 onClick={changeName}>Hi {name} {count}</h1>
            <h2 onClick={changeName}> {person.name} : {person.age} </h2>
        </>
    )
}