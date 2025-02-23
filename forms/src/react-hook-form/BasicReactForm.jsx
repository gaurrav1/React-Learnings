import { useRef, useState } from 'react'
import './static/styles.css'
import { checkEmail, checkPassword, checkCountry } from './static/validators';
import Select from 'react-select';
import { FormGroup } from './components/FormGroup';

const COUNTRY_OPTIONS = [
    { label: "India", value: "IN"},
    { label: "United States", value: "US"},
    { label: "United Kingdom", value: "UK"},
];

function BasicReactForm() {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const countryRef = useRef('');

    const [emailError, setEmailError] = useState([]);
    const [passwordError, setPasswordError] = useState([]);
    const [countryError, setCountryError] = useState([]);
    const [afterFirstSubmit, setAfterFirstSubmit] = useState(false);

    function formHandler(e) {
        e.preventDefault();
        setAfterFirstSubmit(true);

        const emailErrorChecks = checkEmail(emailRef.current.value);
        const passwordErrorChecks = checkPassword(passwordRef.current.value);
        const countryErrorChecks = checkCountry(countryRef.current.getValue()[0]);

        setEmailError(emailErrorChecks);
        setPasswordError(passwordErrorChecks);
        setCountryError(countryErrorChecks);
    
        if (emailErrorChecks.length === 0 && passwordErrorChecks.length === 0 && countryErrorChecks.length === 0) {
          alert('Form submitted successfully');
        }
    };

    return (
        <form className="form" onSubmit={formHandler}>
        <FormGroup errors={emailError}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" ref={emailRef} onChange={afterFirstSubmit ? (e => setEmailError(checkEmail(e.target.value))) : undefined} />
       </FormGroup>
        <FormGroup errors={passwordError}>
            <label className="label" htmlFor="password">Password</label>
            <input
                className="input"
                type="password"
                id="password"
                ref={passwordRef}
                onChange={afterFirstSubmit ? (e => setPasswordError(checkPassword(e.target.value))) : undefined}
            />
      </FormGroup>

        <FormGroup errors={countryError}>
            <label htmlFor="country" className="label">Country:</label>
            <Select isClearable classNamePrefix={"react-select"} id='country' ref={countryRef} options={COUNTRY_OPTIONS}></Select>
        </FormGroup>
        
        <button className="btn">Submit</button>
    </form>

    )
}

export default BasicReactForm