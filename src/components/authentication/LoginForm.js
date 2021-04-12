import React, { useState } from 'react'
import './loginform.scss'

export default function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const onChange = (e) => {

    }

    const onSubmit = () => {

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
                        onChange={onChange}
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
                        onChange={onChange}
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
                        onChange={onChange}
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
                <div className="relatedLinks">
                    <a href="/#" className="link">Forgot your password?</a>
                    <p>Don't have an account?<a href="/#" className="link">Sign up</a></p>
                    <a href="/#" className="link">Resend email confirmation</a>
                </div>
            </form>
        </div>
    )
}
