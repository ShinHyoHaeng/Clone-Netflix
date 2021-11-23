import { Link } from 'react-router-dom';
// import './login.scss'

export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <Link to="/React-Netflix">
                        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="form">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number"/>
                    <input type="password" placeholder="Password"/>
                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>Sign up now</b></span>
                    <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b></small>
                </div>
            </div>
        </div>
    )
}
