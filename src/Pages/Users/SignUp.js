import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
function SignUp() {
   const [phone, setPhone] = useState('');
   const [role, setRole] = useState('client');
   const [smsAccountNumber, setsmsAccountNumber] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  if(message){
    toast(message);
  }
  const handleSignup = () => {
    const product = {
            role,phone,smsAccountNumber,password
        };
        console.log(product)
    fetch('https://pbsofficeinfosql.onrender.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                
                const { message } = data;
                setMessage(message);
            })
   
  };

  return (
    // <div className='container d-flex flex-column align-items-center justify-content-center'>
      

    //   <h1>Signup</h1>
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
    //   <button onClick={handleSignup}>Signup</button>
      
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
                                <h3 className="text-center mb-4">Don't Have an account?</h3>
                                <form method='post' className="login-form">
                                  <div className="form-group">
                                        <input type="text"
                                            placeholder="Role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                        className="form-control rounded-left"  required hidden/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                            placeholder="Phone Number"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        className="form-control rounded-left"  required />
                                    </div>
                                    
                                    <div className="form-group d-flex">
                                        <input type="text" placeholder="SMS Account Number" value={smsAccountNumber} onChange={(e) => setsmsAccountNumber(e.target.value)} className="form-control rounded-left" required />
                                    </div>
                                    <div className="form-group d-flex">
                                        <input type="password" placeholder="Password" value={password}     onChange={(e) => setPassword(e.target.value)} className="form-control rounded-left" required />
                                    </div>

                                    <div className="form-group d-flex justify-content-between">
                                        <div className="">
                                            {/* <button className="checkbox-wrap checkbox-primary"
                                                onClick={async () => {
                                                    const success = await sendPasswordResetEmail(email, actionCodeSettings
                                                    );
                                                    if (success) {
                                                        toast('Go to Your Gmail to get Password Reset Link');
                                                    }
                                                }}
                                            >
                                                Forgot Password?
                                            </button> */}
                                        </div>
                                        <div className="">
                                            <Link to="/login">Login</Link>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={handleSignup} type="button" className="btn btn-primary fs-5 px-5 w-100">Sign Up</button>
                                    </div>
                                    <div className="form-group">
                                        {/* <button className="btn btn-secondary w-100" onClick={btnUserCreateG}>Continue With Google</button> */}
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


export default SignUp;
