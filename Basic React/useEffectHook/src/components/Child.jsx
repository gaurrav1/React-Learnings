import { useEffect, useState } from "react"

export default function Child() {

    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    useEffect( () => {
        console.log("Component re-rendered");
    });

    useEffect( () => {
        console.log("Child Component Mounted")
        return () => {
            console.log("Child Component Unmounted")
        }
    }, []);

    useEffect( () => {
        console.log(`Your name is ${name}, and your age is ${age}.`)
    }, [name, age]);

    useEffect( () => {
        document.title = name;

        const timeout = setTimeout(() => {
            console.log(`My name is ${name}`)
          }, 1000)
      
          return () => {
            clearTimeout(timeout)
          }
          
    }, [name]);


    return (
        <>
            <h2>Child Component</h2>
            <h3>Name: {name} </h3>
            <input type="text" placeholder="Name" onChange={ (e) => setName(e.target.value) } />
            <br />
            <h3>Age: </h3>
            <button onClick={ () => { return(setAge(age - 1))}}> - </button>
            <span> { age } </span>
            <button onClick={ () => { return(setAge(age + 1))}}> + </button>
            <br /><br /><br />
            Your name is {name}, and your age is {age}.
        </>
    )
}