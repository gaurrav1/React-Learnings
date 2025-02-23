import { useMemo, useState } from 'react'
import './styles.css'
import { checkEmail, checkPassword } from './validators';

function StateForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [afterFirstSubmit, setAfterFirstSubmit] = useState(false);

  const emailError = useMemo(() => {
    return afterFirstSubmit ? checkEmail(email) : [];
  }, [afterFirstSubmit, email]);

  const passwordError = useMemo(() => {
    return afterFirstSubmit ? checkPassword(password) : [];
  }, [afterFirstSubmit, password]);

  function handleForm(e) {
    e.preventDefault();
    setAfterFirstSubmit(true);

    const emailErrorChecks = checkEmail(email);
    const passwordErrorChecks = checkPassword(password);

    if (emailErrorChecks.length === 0 && passwordErrorChecks.length === 0) {
      alert('Form submitted successfully');
    }
  }

  return (
    <form className="form" onSubmit={handleForm}>
        <div className={`form-group ${emailError.length > 0 && 'error'}`}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" value={email} onChange={ e => setEmail(e.target.value)}/>
            {emailError.length > 0 && <div className="msg" >{emailError.join(", ")}</div>}
        </div>
        <div className={`form-group ${passwordError.length > 0 && 'error'}`}>
            <label className="label" htmlFor="password">Password</label>
            <input
                className="input"
                value={password}
                type="password"
                id="password"
                onChange={ e => setPassword(e.target.value)}
            />
            {passwordError.length > 0 && <div className="msg" >{passwordError.join(", ")}</div>}
        </div>
        <button className="btn">Submit</button>
    </form>

  )
}

export default StateForm