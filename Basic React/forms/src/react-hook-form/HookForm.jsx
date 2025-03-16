import './static/styles.css'
import Select from 'react-select';
import { FormGroup } from './components/FormGroup';
import { useController, useForm } from 'react-hook-form';

const COUNTRY_OPTIONS = [
    { label: "India", value: "IN"},
    { label: "United States", value: "US"},
    { label: "United Kingdom", value: "UK"},
];

function HookForm() {
    const {register, handleSubmit, formState: { errors }, control, watch} = useForm( { defaultValues: {email: "Hi"} } );

    const {field : countryField } = useController( {name: "country", control, rules: { required: { value: true, message: "COuntry is required" } } } )

    const email = watch("email")
    console.log(email);

    function formHandler(data) {
        console.log(data);
        alert('Form submitted successfully');
    };

    return (
        <form className="form" onSubmit={handleSubmit(formHandler)}>
        <FormGroup errorMessage={errors?.email?.message}>
            <label className="label" htmlFor="email">Email</label>
            <input 
                className="input"
                type="email"
                id="email"
                {...register("email", { required: {value: true, message: "EMail is required"},
                                        validate: value => {
                                            if(!value.endsWith("@gaurav.com")) {
                                                return "Must ends with @gaurav.com";
                                            }
                                        }
                                      }
                )}
            />
       </FormGroup>
        <FormGroup errorMessage={errors?.password?.message}>
            <label className="label" htmlFor="password">Password</label>
            <input
                className="input"
                type="password"
                id="password"
                {...register("password", { required: {value: true, message: "Password is required"},
                    validate: {
                        hasLowerCase: value => {
                            if (!value.match(/[a-z]/)) {
                                return 'Must include at least 1 lowercase letter';
                            }
                        },
                        hasUpperCase: value => {
                            if (!value.match(/[A-Z]/)) {
                                return 'Must include at least 1 uppercase letter';
                            }
                        },
                        hasNumber: value => {
                            if (!value.match(/[0-9]/)) {
                                return 'Must include at least 1 number';
                            }
                        },
                        hasLength: value => {
                            if (value.length < 10) {
                                return 'Password must be 10 characters or longer';
                            }
                        }
                    }
                  }
)}
           />
      </FormGroup>

        <FormGroup errorMessage={errors?.country?.message}>
            <label htmlFor="country" className="label">Country:</label>
            <Select 
                isClearable 
                classNamePrefix={"react-select"} 
                id='country' 
                options={COUNTRY_OPTIONS}
                {...countryField}
            />
        </FormGroup>
        
        <button className="btn">Submit</button>
    </form>

    )
}

export default HookForm;