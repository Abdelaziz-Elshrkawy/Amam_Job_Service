import { useState } from 'react';

import InputUnit from '../General/InputUnit/InputUnit.jsx';
import './SignUp.css';
import Button from '../General/Button/Button.jsx';
import Error from '../General/Error/Error.jsx';

function SignUp({ pageState, setPageState }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cv, setCv] = useState(null);
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cv);
        validate();
    };

    const validate = () => {
        const errorsObj = {};
        if (cv === null) {
            errorsObj.cv = 'CV is Required.';
        } else {
            const ext = cv.split('.')[cv.split('.').length - 1].toLowerCase();
            if (ext !== 'pdf') {
                errorsObj.cv = 'Only PDF files are allowed.';
            }
        }
        if (name.length === 0) {
            errorsObj.name = 'Name is Required.';
        } else if (name.length < 8) {
            errorsObj.name = 'Name must be more than 10 characters.';
        }
        if (email.length === 0) {
            errorsObj.email = 'Email is Required.';
        } else if (!/\S+@\S+\.com$/.test(email)) {
            errorsObj.email = 'Email must be valid.';
        }
        if (password.length === 0) {
            errorsObj.password = 'Password is Required.';
        } else if (password.length < 8) {
            errorsObj.password = 'Password must be more than 12 characters.';
        }
        setErrors(errorsObj);
    };
    return (
        <div id="sign-up">
            <h3>Sign Up</h3>
            <form id="sign-up-form" onSubmit={handleSubmit}>
                <InputUnit
                    name="name"
                    placeholder="Name"
                    value={name}
                    setValue={setName}
                    className={errors.name ? 'input-error' : ''}
                />
                <InputUnit
                    name="email"
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    className={errors.email ? 'input-error' : ''}
                />
                <InputUnit
                    name="password"
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    type="password"
                    className={errors.password ? 'input-error' : ''}
                />
                <InputUnit
                    name="cv"
                    setValue={setCv}
                    type="file"
                    accept=".pdf"
                />
                <div id="cv-label-div">
                    <label
                        id="cv-label"
                        htmlFor="cv"
                        className={
                            cv && !errors.cv
                                ? 'uploaded'
                                : errors.cv
                                ? 'cv-error'
                                : ''
                        }
                    >
                        {cv && !errors.cv
                            ? 'CV Uploaded 	✔'
                            : errors.cv === 'Only PDF files are allowed.'
                            ? 'PDF files only'
                            : 'upload your CV'}
                    </label>
                </div>
                <Button text="Sign up" />
            </form>
            <p>
                Already have account
                <button
                    className="page-toggle-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setPageState(!pageState);
                    }}
                >
                    LogIn
                </button>
            </p>
            <div id="signup-error-div">
                <Error errorText={errors.name} id="name-error" />
                <Error errorText={errors.email} id="email-error" />
                <Error errorText={errors.password} id="password-error" />
                <Error errorText={errors.cv} id="cv-error" />
            </div>
        </div>
    );
}

export default SignUp;
