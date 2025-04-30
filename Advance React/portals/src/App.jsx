import {createPortal} from "react-dom";
import {useState} from "react";

export function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => console.log('In the div')}
            style={{position: 'relative', marginTop: '100px'}}
        >
            <h1>App Content</h1>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)} >
                Secret Message
                <br/>
                Click to Close
            </AlertMessage>
        </div>
    )
}

function AlertMessage({ children, onClose, isOpen }) {
    if(!isOpen) return null;

    return createPortal(
        <div
            onClick={onClose}
            style={{
                cursor: 'pointer',
                position: 'absolute',
                top: ".5rem",
                left: "50%",
                translate: "-50%",
                background: "#777",
                color: 'white',
                borderRadius: ".5rem",
                padding: "1rem",
            }}
        >
            {children}
        </div>,
        // Even though it is outside root element, but event propagation will be based on JSX you have written.
        // Like clicking on AlertMessage will delegate to its parent JSX event listener.
        document.querySelector('#alert-messages')
    )
}