import { useState } from 'react';
import './Login.css';
import { Auth, RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth';
// import firebase from '../firebaseConfig';
import { initializeApp, FirebaseApp } from 'firebase/app';

interface User {
    email: string;
    password: string;
}

function Login() {
    const firebaseConfig = {
        apiKey: "AIzaSyDQTjpa6pAM4tO7MxUzzrZu-UQE3Md5yGU",
        authDomain: "ueventauth-4cff4.firebaseapp.com",
        projectId: "ueventauth-4cff4",
        storageBucket: "ueventauth-4cff4.appspot.com",
        messagingSenderId: "353994662796",
        appId: "1:353994662796:web:5937d33390e61e2f7eaca9"
    };

    // Initialize Firebase
    const firebase: FirebaseApp = initializeApp(firebaseConfig);


    const [user, setUser] = useState<User>({ email: '', password: '' });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        // Handle login logic
        onSignInSubmit("");
    };

    let c: RecaptchaVerifier;
    function setupRecaptcha(): RecaptchaVerifier {
        const auth: Auth = getAuth(firebase);
        console.log(auth);
        c = new RecaptchaVerifier(
            'recaptcha-element',
            {
                'size': 'invisible',
                'callback': (response: any) => {
                    console.log("recaptcha solved");
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit("");
                }
            },
            auth);
        return c;
    }
    let i = 0;
    function onSignInSubmit(phoneNum: string): void {
        if (i == 1) return;
        phoneNum = "+36205369176";
        if (!c) { setupRecaptcha() };
        const auth = getAuth(firebase);
        signInWithPhoneNumber(auth, phoneNum, c)
            .then((confirmationResult: any) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                // //   window.confirmationResult = confirmationResult;
                console.log("confirmation result:" + confirmationResult);
                const code = window.prompt("Enter OTP");
                confirmationResult.confirm(code).then((result:any) => {
                    // User signed in successfully.
                    const user = result.user;
                    console.log("USER LOGGED IN: " + user);
                    // ...
                }).catch((error:any) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                });
                i++;
                // ...
            }).catch((error: any) => {
                console.log(error);
            });

    }

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

