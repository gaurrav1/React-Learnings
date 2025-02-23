import { useRef, useState } from 'react'
import './styles.css'
import { checkEmail, checkPassword } from './validators';

function RefForm() {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [emailError, setEmailError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [afterFirstSubmit, setAfterFirstSubmit] = useState(false);

    function formHandler(e) {
        e.preventDefault();
        setAfterFirstSubmit(true);

        const emailErrorChecks = checkEmail(emailRef.current.value);
        const passwordErrorChecks = checkPassword(passwordRef.current.value);

        setEmailError(emailErrorChecks);
        setPasswordError(passwordErrorChecks);
    
        if (emailErrorChecks.length === 0 && passwordErrorChecks.length === 0) {
          alert('Form submitted successfully');
        }
    };

    return (
        <form className="form" onSubmit={formHandler}>
        <div className={`form-group ${emailError.length > 0 && 'error'}`}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" ref={emailRef} onChange={afterFirstSubmit ? (e => setEmailError(checkEmail(e.target.value))) : undefined} />
            {emailError.length > 0 && <div className="msg" >{emailError.join(", ")}</div>}
        </div>
        <div className={`form-group ${passwordError.length > 0 && 'error'}`}>
            <label className="label" htmlFor="password">Password</label>
            <input
                className="input"
                type="password"
                id="password"
                ref={passwordRef}
                onChange={afterFirstSubmit ? (e => setPasswordError(checkPassword(e.target.value))) : undefined}
            />
            {passwordError.length > 0 && <div className="msg" >{passwordError.join(", ")}</div>}
        </div>
        <button className="btn">Submit</button>
    </form>

    )
}

export default RefForm