import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); 

    const handleLoginButton = () => {
        navigate('/login');
      };

      const handleRegisterButton = () => {
        navigate('/register');
      };
    return (
        <div>
            <h1>Hello welcome to home page</h1>
            <button type="button" className="continue-to-login" onClick={handleLoginButton}>
                Login
            </button>
            <button type="button" className="continue-to-login" onClick={handleRegisterButton}>
                
                Register
              </button>
        </div>
    )
}
