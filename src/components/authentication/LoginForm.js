import React, { useState } from 'react'
import { validateEmail, validatePassword } from '../../utils/validateForms';
import './loginform.scss'

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errors, setErrors] = useState([]);

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangeCheckbox = () => {
        setRemember(!remember);
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const arrayErros = [];
        if (!validateEmail(email)) {
            arrayErros.push('The email is not valid');
        }
        if (!validatePassword(password)) {
            arrayErros.push('The password must have at least: length of 8, 1 uppercase, 1 lowercase and 1 number');
        }

        setErrors(arrayErros);

        if (errors.length > 0) {
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, password: password })
        };

        try {
            await fetch('http://localhost:8000/api/login', requestOptions)
                .then(
                    // here we recieves maybe a token, and put it in some state or localStorage
                    response => response.json()
                )
                .then(
                    // here goes maybe some redirection to the content
                );
        } catch (error) {
            // Here goes some logical to throw the error
            console.log(error);
        }

        setEmail('');
        setPassword('');
        setRemember(false);

    }

    return (
        <div className="formContainer">
            <h1 className="title">Sign in</h1>
            <form onSubmit={onSubmit}>
                <div className="formField">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="formText"
                    />
                </div>
                <div className="formField">
                    <label htmlFor="password" className="lbl">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder=""
                        onChange={onChangePassword}
                        value={password}
                        className="formText"
                    />
                </div>
                <div className="formField">
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        checked={remember}
                        onChange={onChangeCheckbox}
                        className="checkBox"
                    />
                    <span>Remember me?</span>
                </div>
                <div className="formField">
                    <input
                        type="submit"
                        className="btn"
                        value="Sign in"
                    />
                </div>
            </form>
            <div className="relatedLinks">
                <a href="/#" className="link">Forgot your password?</a>
                <p>Don't have an account?<a href="/#" className="link">Sign up</a></p>
                <a href="/#" className="link">Resend email confirmation</a>
            </div>
            {
                errors.length > 0 && (
                    <div className="errors">
                        <ul>
                            {errors.map((error, index) => (
                                <li
                                    key={index}
                                >
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
