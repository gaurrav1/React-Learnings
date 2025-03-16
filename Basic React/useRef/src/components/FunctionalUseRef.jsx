import React, { useState, useRef, useEffect } from 'react'

function FunctionalUseRef() {

    const [name, setName] = useState('');
    const [fullName, setFullName] = useState('');

    /* Use case 1: */

    const ref = useRef("Gaurav");
    console.log(ref.current);

    useEffect( () => {
        console.log("Rendered again!");
    });

    /* Use case 2: */

    const inputRef = useRef();

    useEffect(() => {
        console.log(inputRef.current.value);
    }, [fullName]);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

  return (
    <>
        {    /* Use case 1: */      }
        <h2>Use case 1: Persisting Mutable Data Across Renders with `useRef`</h2>
        <label>
            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
        </label>
        <br />
        <button onClick={() => ref.current = "Nidhi"}>Change ref name</button>
        <button onClick={() => console.log(ref.current)}>Get ref name</button>
        <br /><br />

        <h2>Use case 2: Accessing and Manipulating DOM Elements with `useRef`</h2>
        {    /* Use case 2: */      }
        <input type="text" ref={inputRef} value={fullName} onChange={ (e) => setFullName(e.target.value)} />
    </>
  )
}

export default FunctionalUseRef