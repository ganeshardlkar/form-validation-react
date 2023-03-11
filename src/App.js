import React, { useState } from 'react';
import './App.css';

const App = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const emailHandler = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    }

    const passwordHandler = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (!value || value.length < 8) {
          setPasswordError("Passwords must be at least 8 characters");
        } else {
          setPasswordError("");
        }
      };
    
      const confirmPasswordHandler = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (value !== password) {
          setConfirmPasswordError("Passwords do not match");
        } else {
          setConfirmPasswordError("");
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!emailError && !passwordError && !confirmPasswordError) {
            alert("Form submitted successfully");
        } else {
            alert("Cant submit the form");
        }
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <div className='email'>
                    <label>Email: </label><br />
                    <input value={email} onChange={emailHandler} type="email" className='emailInput' required/><br />
                    {emailError && <span>{emailError}</span>}
                </div>
                <div className='pass'>
                    <label>Password: </label><br />
                    <input value={password} onChange={passwordHandler} type="password" className='passInput' required/><br />
                    {passwordError && <span>{passwordError}</span>}
                </div>
                <div className='confirmPass'>
                    <label>Confirm Password: </label><br />
                    <input value={confirmPassword} onChange={confirmPasswordHandler} type="password" className='confirmPassInput' required/><br />
                    {confirmPasswordError && <span>{confirmPasswordError}</span>}
                </div>
                <button type='submit' className='btn'>Sign Up</button>
            </form>
        </div>
    )
}

export default App