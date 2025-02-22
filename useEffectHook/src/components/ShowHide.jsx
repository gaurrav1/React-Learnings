import { useState } from 'react';
import Child from './Child';
import ClassComponent from './ClassComponent';

export default function ShowHide() {

    const [show, setShow] = useState(true);

    return (
        <>
            {show ? <ClassComponent /> : null}
            <br /><br /><hr />
            <button onClick={ () => { return(setShow(!show)) }}>{ show ? "Hide" : "Show"}</button>
        </>
    )
}