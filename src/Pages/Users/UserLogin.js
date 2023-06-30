import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import axios from 'axios';

function UserLogin() {
  const [phone, setPhone] = useState('');
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    // Check if a token exists in localStorage or sessionStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  if (token) {
        // console.log(user);
        // navigate('/');
        navigate(from, { replace: true });
    }
  const handleLogin = () => {
     const product = {
            phone,password
        };
    fetch('https://pbsofficeinfosql.onrender.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                // e.target.reset();
                // setBook("");
                    const { message, token,user } = data;
                setMessage(message);

                // Store the JWT in localStorage or sessionStorage
                localStorage.setItem('token', token);
                toast(message);
                localStorage.setItem('user', JSON.stringify(user));
                setToken(token);
                setUser(user);
                console.log(user)
            })
    
  };

  return (
    // <div className='container d-flex flex-column align-items-center justify-content-center'>
    //   <h1>Login</h1>
    //   <input
      
    //     type="text"
    //     placeholder="Phone Number"
    //     value={phone}
    //     onChange={(e) => setPhone(e.target.value)}
    //   />
    //   <p className='text-warning mb-3'>{message}</p>
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <button onClick={handleLogin} className='btn'>Login</button>
    // </div>
    <div className='container'>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="login-wrap p-4 p-md-5">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <FontAwesomeIcon icon={faUserAlt} />
                                </div>
                                <h3 className="text-center mb-4">Have an account?</h3>
                                <form method='post' className="login-form">
                                    {/* <div className="form-group">
                                        <input onChange={(e) => setEmail(e.target.value)} name='email' type="text" className="form-control rounded-left" placeholder="Username" required />
                                    </div> */}
                                    <div className="form-group">
                                        <input type="text"
                                              placeholder="Phone Number"
                                              value={phone}
                                              onChange={(e) => setPhone(e.target.value)}
                                          className="form-control rounded-left" required />
                                          <p className='text-warning mb-3'>{message}</p>
                                    </div>
                                    <div className="form-group d-flex">
                                        <input type="password"
                                          placeholder="Password"
                                          value={password}
                                          onChange={(e) => setPassword(e.target.value)} 
                                           className="form-control rounded-left"  required />
                                    </div>

                                    <div className="form-group d-flex justify-content-between">
                                        <div className="">
                                            <button className="checkbox-wrap checkbox-primary"
                                                // onClick={async () => {
                                                //     const success = await sendPasswordResetEmail(email, actionCodeSettings
                                                //     );
                                                //     if (success) {
                                                //         toast('Go to Your Gmail to get Password Reset Link');
                                                //     }
                                                // }}
                                            >
                                                Forgot Password?
                                            </button>
                                        </div>
                                        <div class="">
                                            {/* <a href="#"></a>  */}
                                            <Link to="/signup">Sign Up</Link>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={handleLogin} type="button" className="btn btn-primary fs-5 px-5 w-100">Login</button>
                                    </div>
                                    <div className="form-group">
                                        {/* <button className="btn btn-secondary w-100" onClick={btnUserCreate}>Continue With Google</button> */}
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </div >
            </section >

        </div >
  );
}

export default UserLogin;
