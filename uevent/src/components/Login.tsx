import { useState } from 'react';
import { Auth, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
import firebaseApp from '../firebaseConfig';
import './Login&Signup.css';
import AUTH_API_HOST from '../constants';

//---------------------------------
//interfaces
//---------------------------------
interface User {
    email: string;
    password: string;
    phoneNumber: string;
}

//---------------------------------
//component
//---------------------------------
function Login() {
    //---------------------------------
    //props
    //---------------------------------
    const [user, setUser] = useState<User>({ email: '', password: '', phoneNumber: '' });
    let c: RecaptchaVerifier;

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
        onSignInSubmit();
    };

    function setupRecaptcha(): RecaptchaVerifier {
        const auth: Auth = getAuth(firebaseApp);
        console.log(auth);
        c = new RecaptchaVerifier(
            'recaptcha-element',
            {
                'size': 'invisible',
                'callback': (response: any) => {
                    console.log(response);
                    console.log("recaptcha solved, submitting the form now...");
                    onSignInSubmit();
                }
            },
            auth);
        return c;
    }

    function onSignInSubmit(): void {

        const phoneNum:string = "+36205369176";
        if (!c) { setupRecaptcha() };
        const auth = getAuth(firebaseApp);
        signInWithPhoneNumber(auth, phoneNum, c)
            .then((confirmationResult: any) => {
                /* SMS sent. Prompt user to type the code from the message, then sign the
                   user in with confirmationResult.confirm(code). */
                // console.log("confirmation result:" + confirmationResult);
                const code = window.prompt("Enter OTP");
                confirmationResult.confirm(code).then((result: any) => {
                    // User signed in successfully.
                    const user = result.user;
                    console.log("USER LOGGED IN: " + user);
                    // registerUser(email, password, phoneNum);
                }).catch((error: any) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    throw error;
                });
            }).catch((error: any) => {
                console.log(error);
            });
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
};

export default Login;

function registerUser(p_email: string, p_password: string, p_phoneNum: string) {
    const route: string = AUTH_API_HOST+"/register";
    //call api to register user flask app
    console.log("registering user...");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: p_email, password: p_password, phoneNum: p_phoneNum })
    };

    fetch(route, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

}

function loginUser(p_email: string, p_password: string) {
    const route: string = AUTH_API_HOST+"/login";
    //call api to register user flask app
    console.log("logging in user...");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: p_email, password: p_password })
    };

    fetch(route, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

}
