import { useEffect, useRef } from "react"

function UseRefForms() {

    const inputRef = useRef('');

    // Use useRef when you only care about data while submiting the form to reduce processing cost.
    const formHandler = (e) => {
        e.preventDefault()
        if (inputRef.current.value === '') {
            alert('Please enter a name')
        }
        else {
            alert(`Hello ${inputRef.current.value}`);
        }
    };

    useEffect(() => {
        console.log("Component renDARED AGAIN!")
    })
  return (
    <>
        <form onSubmit={formHandler}>
            Name: <input type="text" ref={inputRef} />
            <br />
            <button>Submit</button>
        </form>
    </>
  )
}

export default UseRefForms