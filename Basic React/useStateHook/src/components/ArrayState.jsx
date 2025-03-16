import { useState } from "react"

export default function ArrayState() {

    const INITIAL_VALUES = ['A', 'B', 'C'];
    const [array, setArray] = useState(INITIAL_VALUES);
    const [inputVal, setInputVal] = useState("");

    function firstRemove() {
        setArray( currentArray => {
            return currentArray.slice(1);
        })
    }

    function removeC() {
        setArray( currentArray => {
            return currentArray.filter(element => element != 'C')
        })
    }

    function addingLetterToStart(element) {
        setArray( currentArray => {
            return [element, ...currentArray]
        })
    }

    function addingLetterToEnd() {
        setArray( currentArray => {
            return [...currentArray, 'A']
        })
    }

    function clear() {
        setArray(currentArray => {
            return []
        })
    }

    function reset() {
        setArray(currentArray => {
            return ['A', 'B', 'C'];
        })
    }

    function updateAToH() {
        setArray(currentArray => {
            return currentArray.map(element => {
                if(element === 'A') return 'H'
                return element
            });
        })
    }

    function addToIndex(letter, index) {
        setArray (currentArray => {
            return [...currentArray.slice(0, index), letter, ...currentArray.slice(index)]
        })
    }

    return(
        <>
            <h1>{array.join(", ")}</h1>
            <button onClick={firstRemove}>Remove from first</button>
            <button onClick={removeC}>Remove all C's</button>
            <button onClick={() => addingLetterToStart('Z')}>Adding letter 'Z' to the start</button>
            <button onClick={addingLetterToEnd}>Adding letter 'A' to the end</button>
            <br />
            <button onClick={clear}>Clear</button>
            <button onClick={reset}>Reset</button>
            <br />

            <button onClick={updateAToH}>A to H</button>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)} />
            <button onClick={() => addingLetterToStart(inputVal)}>Add</button>
            <button onClick={() => addToIndex('I', 2)}>Add I to 2nd index</button>
        </>
    )
}