import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import '../LoginFormPage/LoginForm.css';
import { Redirect, useHistory } from "react-router-dom";

function LoginForm() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    // if (user) {
    //     return <Redirect to={`/users/${user.id}/images`} />
    // }

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
        <>
            <form className='login-form' onSubmit={(e) => handleSubmit(e)}>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className="login-label-email">
                    Username/Email:
                    <input
                        className="login-username-input"
                        type="text"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
                    />
                </label>
                <label className="login-label-password">
                    Password:
                    <input
                        className="login-password-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button className='modal-login-button' type="submit">Log In</button>
                <button id='demo-login-button' onClick={(e) => handleDefaultButton(e)}>Log In With Demo User</button>
            </form>
        </>
    );
}

export default LoginForm;
