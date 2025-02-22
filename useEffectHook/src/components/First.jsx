import { useState, useEffect } from "react";

let globVar = 0;

export default function First() {

    globVar = globVar + 1;
    console.log(globVar);

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect( () => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, []);

    useEffect( () => {
        document.title = name
    }, [name]);

    useEffect( () => {
        const handler = () => {
            console.log(name)
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
            console.log("Cleaned up");
        };
    }, [name]);

    return (
        <>
            <input type="text" value={name} onChange={ (e) => setName(e.target.value)} />
            <br /><br />
            <button onClick={ () => setAge(age - 1)}> - </button>
            <span> {age} </span>
            <button onClick={ () => setAge(age + 1)}> + </button>
            <br /><br />
            <span>Name: {name}, Age: {age}</span>
            <br />
            {width}
        </>
    );
};