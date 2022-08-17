import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import '../LoginFormPage/LoginForm.css';
import { useHistory } from "react-router-dom";

function LoginForm() {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user);

    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const history = useHistory();


    const handleDefaultButton = (e) => {
        e.preventDefault();
        const credential = 'Demo-lition'
        const password = 'password'
        return dispatch(sessionActions.login({ credential, password }))
            .then((user) => history.push(`/users/${user.id}/images`))
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .then((user) => history.push(`/users/${user.id}/images`))
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );
    };

    return (
        <div className="login-form-wrap">
            <div className="login-form-container">
                <div className="login-logo-and-blurb">
                    <img className="login-logo" alt="" src={require("../../images/torch.png")} />
                    <p className="login-blurb">Log in to Survivr</p>
                </div>
                <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                    <ul className="login-form-errors">
                        {errors.map((error, idx) => (
                            <li key={idx}>{error}</li>
                        ))}
                    </ul>
                    <div className="login-input-fields">
                        <input
                            className="login-inputs"
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                        />
                        <span className="login-floating-label">Username/Email address</span>
                    </div>
                    <div className="login-input-fields">
                        <input
                            className="login-inputs"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="login-floating-label">Password</span>
                    </div>
                    <button className='login-page-button' type="submit">Sign In</button>
                    <button className='demo-login-button' onClick={(e) => handleDefaultButton(e)}>Log In With Demo User</button>
                </form>
                <div className="login-divider"></div>
                <div className="login-existing">
                    <p className="login-member-text">Not a Survivr member?</p>
                    <a href="/signup" className="login-signup-link">Sign up here</a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
