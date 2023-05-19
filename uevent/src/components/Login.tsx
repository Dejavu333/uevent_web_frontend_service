import { useState } from 'react';
import { Auth, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import firebaseApp from '../firebaseConfig';
import './Login&Signup.css';
import AUTH_API_HOST from '../constants';
import  User from '../types/User';

//---------------------------------
//component
//---------------------------------
function Login() {
    //---------------------------------
    //props
    //---------------------------------
    const [user, setUser] = useState<User>({ email: '', password: '', phoneNumber: '' });

    //---------------------------------
    //functions
    //---------------------------------
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        // Handle login logic
        onSigninSubmit();
    };

    function onSigninSubmit(): void {
        loginUser( user.phoneNumber, user.password);
    }

    //---------------------------------
    //render
    //---------------------------------
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div id="recaptcha-element"></div>
            <div className="form-group">
                {/* <label htmlFor="email" className="form-label">
                    Email
                </label> */}
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder='e-mail/phone'
                />
            </div>
            <div className="form-group">
                {/* <label htmlFor="password" className="form-label">
                    Password
                </label> */}
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder='password'
                />
            </div>
            <button type="submit" className='form-button'>
                login
            </button>
        </form>
    );
 
    function loginUser(p_phoneNumber: string, p_password: string) {

        const route: string = AUTH_API_HOST+"/login";
        //call api to register user flask app
        console.log("logging in user...");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phoneNumber: p_phoneNumber, password: p_password })
        };
    
        fetch(route, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
};

export default Login;