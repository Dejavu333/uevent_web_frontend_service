import React, { useState } from 'react';
import './Login.css';

interface User {
    email: string;
    password: string;
}
  
const Signup = () => {
    const [user, setUser] = useState<User>({ email: '', password: '' });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // Handle signup logic
    };
  
    return (
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="form-title">Signup</h1>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Signup
        </button>
      </form>
    );
  };
  
  export default Signup;
  