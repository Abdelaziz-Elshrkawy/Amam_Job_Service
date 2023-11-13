import { useState } from 'react';

import './LogIn.css';
import InputUnit from '../General/InputUnit/InputUnit.jsx';
import Button from '../General/Button/Button.jsx';
import Error from '../General/Error/Error.jsx';

function LogIn({ pageState, setPageState }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
    };

    const validate = () => {
        const errorsObj = {};
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
        } else if (password.length < 12) {
            errorsObj.password = 'Password must be more than 12 characters.';
        }
        setErrors(errorsObj);
    };
    return (
        <div id="sign-in">
            <div id="form-div">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
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
                    <Button text="login" />
                </form>
            </div>
            <p>
                Create Account
                <button
                    className="page-toggle-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        setPageState(!pageState);
                    }}
                >
                    SingUp
                </button>
            </p>
            <div id="login-error-div">
                <Error errorText={errors.email} id="email-error" />
                <Error errorText={errors.password} id="password-error" />
            </div>
        </div>
    );
}

export default LogIn;
