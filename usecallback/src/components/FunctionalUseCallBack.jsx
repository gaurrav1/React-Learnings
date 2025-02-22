import { useCallback, useEffect, useState } from "react"

function FunctionalUseCallBack() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    // function printName() {
    //     console.log(`Name: ${name}`);
    // }

    // useEffect(() => {
    //     console.log("In Effect");
    //     printName();
    // }, [printName]);
    // The above line will cause an infinite loop because printName is a new function every time the component re-renders.
    // To fix this, we can use the useCallback hook to memoize the function.

    const printName = useCallback(
        () => {
            console.log(`Name: ${name}`);
        },
        [name] 
    )
    useEffect(() => {
        console.log("In Effect");
        printName();
    }, [printName]);

  return (
    <>
        <label>
            Name: <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <br />
        <label>
            Age: <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </label>
    </>
  )
}

export default FunctionalUseCallBack