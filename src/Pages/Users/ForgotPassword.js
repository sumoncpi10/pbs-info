import React, { useState } from 'react';
// import axios from 'axios';

function ForgotPassword() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
    //   const response = await axios.post('/forgot-password', { phoneNumber });
    //   setMessage(response.data.message);
    } catch (error) {
      setMessage('Failed to send token');
      console.error(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('/reset-password', {
    //     phoneNumber,
    //     token,
    //     newPassword,
    //   });
    //   setMessage(response.data.message);
    // } catch (error) {
    //   setMessage('Failed to reset password');
    //   console.error(error);
    // }
  };

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1>Forgot Password</h1>
      <form onSubmit={handleForgotPassword} className=' d-flex flex-column'>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="submit" className='btn-outline btn'>Send Token</button>
      </form>

      <h1>Reset Password</h1>
      <form onSubmit={handleResetPassword} className=' d-flex flex-column'>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <label>
          Token:
          <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <button type="submit" className='btn-outline btn'>Reset Password</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;
