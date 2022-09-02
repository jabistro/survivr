import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import ReCAPTCHA from "react-google-recaptcha";

import './SignupForm.css';

function SignupFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [recaptcha, setRecaptcha] = useState(false);

    if (sessionUser) return <Redirect to={`/users/${sessionUser.id}/images`} />

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword && recaptcha) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(
                    async (res) => {
                        const data = await res.json();
                        if (data && data.errors) setErrors(data.errors);
                    }
                );
        } else if (password === confirmPassword && !recaptcha) {
            return setErrors(['reCAPTCHA must be clicked'])
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    function recaptchaOnChange(value) {
        console.log("Captcha value:", value);
        setRecaptcha(true);
    }

    return (
        <div className="signup-form-wrap">
            <div className="signup-form-container">
                <div className="signup-logo-and-blurb">
                    <img className="signup-logo" alt="" src={require("../../images/torch.png")} />
                    <p className="signup-blurb">Sign up for Survivr</p>
                </div>
                <form className='signup-form' onSubmit={(e) => handleSubmit(e)}>
                    <ul className="signup-form-errors">
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className="signup-input-fields">
                        <input
                            className="signup-inputs"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <span className="signup-floating-label">Email address</span>
                    </div>
                    <div className="signup-input-fields">
                        <input
                            className="signup-inputs"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <span className="signup-floating-label">Username</span>
                    </div>
                    <div className="signup-input-fields">
                        <input
                            className="signup-inputs"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="signup-floating-label">Password</span>
                    </div>
                    <div className="signup-input-fields">
                        <input
                            className="signup-inputs"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <span className="signup-floating-label">Confirm password</span>
                    </div>
                    <ReCAPTCHA
                        className="g-recaptcha"
                        sitekey="6Ld_34AhAAAAAKLAi5WeOZLAfCVZ2C801-P7ZJlI"
                        onChange={recaptchaOnChange}
                    />
                    <button className="signup-page-button" type="submit">Sign up</button>
                </form>
                <div className="signup-divider"></div>
                <div className="signup-existing">
                    <p className="signup-member-text">Already a member?</p>
                    <a href="/login" className="signup-login-link">Login in here</a>
                </div>
            </div>
        </div>
    );
}

export default SignupFormPage;
