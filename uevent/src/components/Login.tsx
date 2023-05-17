import { useState } from 'react';
import './Login.css';

interface User {
    email: string;
    password: string;
}

function Login() {
    const [user, setUser] = useState<User>({ email: '', password: '' });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">

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
            <button type="submit" className="form-button">
                login
            </button>
        </form>
    );
};

export default Login;