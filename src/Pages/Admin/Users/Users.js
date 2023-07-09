import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Users.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import User from './User';
import useAdmin from '../../../hooks/useAdmin';
const Users = () => {
    const [luser, setLUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [use] = useAuthState(auth);
    // const [admin] = useAdmin(use);
    const [role, setRole] = useState('employee');
    const [trg_id, settrg_id] = useState('');
    const [phone, setPhone] = useState('');
    const [displayName, setdisplayName] = useState('');
    const [designation, setdesignation] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //    const [smsAccountNumber, setsmsAccountNumber] = useState('');
    const [message, setMessage] = useState('');
    // console.log(admin);
    // console.log(use);
    useEffect(() => {
        fetch(`https://pbsofficeinfosql.onrender.com/users`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data);
            })
    }, []);
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/usersByzonal/${admin?.zonal_code}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setUsers(data);
    //         })
    // }, [admin]);
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/user/${use?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setLUser(data);
    //         })
    // }, [use?.email]);
    const ok = (e) => {
        e.preventDefault();
        (function ($) {
            "use strict";
            $('[data-toggle="tooltip"]').tooltip()
            $('#exampleModalCenter').modal('show')
        })(window.jQuery);
    }
    const cancel = (e) => {
        e.preventDefault();
        (function ($) {
            "use strict";
            $('[data-toggle="tooltip"]').tooltip()
            $('#exampleModalCenter').modal('hide')
        })(window.jQuery);
    }

    // const [
    //     createUserWithEmailAndPassword,

    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);
    const [user, setUser] = useState(null);
    console.log(user?.role);
    useEffect(() => {
        // Check if a token exists in localStorage or sessionStorage
        const storedUser = localStorage.getItem('user');

        const user = storedUser ? JSON.parse(storedUser) : null;

        // Use the user data as needed
        if (user) {
            // Do something with the user data
            setUser(user)
            console.log(user.role);
        }
    }, []);
    // const navigate = useNavigate();
    // const location = useLocation();
    // let from = location.state?.from?.pathname || '/';
    // if (user) {
    //     console.log(user);
    //     // navigate(from, { replace: true });
    //     {
    //         // toast(`Registered User: ${user.user.email}`)
    //     };
    // }
    // if (loading) {
    //     return <p>Loading...</p>;
    // }
    // else if (error) {
    //     return (
    //         <div>
    //             {
    //                 toast(error?.message)
    //             };
    //         </div>
    //     );
    // }
    // const createUser = async (e) => {
    //     e.preventDefault();
    //     const displayName = e.target.name.value;
    //     const trg_id = e.target.trg_id.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     const designation = e.target.designation.value;
    //     const phone = e.target.phone.value;
    //     const pbs_code = luser?.pbs_code;
    //     const zonal_code = luser?.zonal_code;
    //     const add_by = luser?.email;
    //     const user = {
    //         displayName, trg_id, email, password, designation, phone, pbs_code, zonal_code, add_by
    //     };

    //     const newuser = await users?.find(user => user.trg_id == trg_id)
    //     console.log(user)
    //     console.log(newuser)
    //     if (newuser) {
    //         toast("User Already Exists !");
    //         // navigate(from, { replace: true });
    //     }
    //     else if (luser && email && password) {
    //         // const rr = createUserWithEmailAndPassword(email, password);
    //         if (rr) {
    //             fetch('https://pbsofficeinfosql.onrender.com/userAdd', {
    //                 method: 'POST',
    //                 headers: {
    //                     'content-type': 'application/json'
    //                 },
    //                 body: JSON.stringify(user)
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     // console.log('success', data);
    //                     toast("User Create Successfully!");
    //                     e.target.reset();
    //                     // navigate(from, { replace: true });
    //                 })
    //         }
    //     }
    //     else if (luser && trg_id && password) {

    //         fetch('https://pbsofficeinfosql.onrender.com/userAdd', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(user)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 // console.log('success', data);
    //                 toast("User Create Successfully!");
    //                 e.target.reset();
    //                 // navigate(from, { replace: true });
    //             })

    //     }
    // }
    const handleSignup = () => {
        const product = {
            role, trg_id, phone, displayName, designation, email, password
        };
        console.log(product)
        fetch('https://pbsofficeinfosql.onrender.com/signupEmp', {
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
                toast(message);
                (function ($) {
                    "use strict";
                    $('[data-toggle="tooltip"]').tooltip()
                    $('#exampleModalCenter').modal('hide')
                })(window.jQuery);
            })

    };
    return (
        <div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button onClick={cancel} type="button" className="close d-flex align-items-center justify-content-center" data-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        </div>
                        <div className="row">

                            <div className="col-md">
                                <div className="modal-body p-0">
                                    <h3 className="mb-4">Create New User</h3>
                                    <div className="signup-form">
                                        <div className="form-group">
                                            <input value={displayName}
                                                onChange={(e) => setdisplayName(e.target.value)} type="text" className="form-control" placeholder="Full Name" required />
                                        </div>
                                        <div className="form-group">
                                            {/* <input placeholder="Role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)} type="text" className="form-control"  required /> */}
                                            <select onChange={(e) => setRole(e.target.value)} className="form-control" >
                                                <option className='text-primary' value='employee'>Employee</option>
                                                <option className='text-primary' value='officeHead'>Office Head</option>
                                                {(user?.role == 'pbsAdmin' || user?.role == 'admin' || user?.role == 'superAdmin') && <option className='text-primary' value='zonalAdmin'>Zonal Admin</option>}
                                                {(user?.role == 'admin' || user?.role == 'superAdmin') && <option className='text-primary' value='pbsAdmin'>PBS Admin</option>}
                                                {(user?.role == 'superAdmin') && <option className='text-primary' value='admin'>Admin</option>}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <input value={trg_id}
                                                onChange={(e) => settrg_id(e.target.value)} type="text" className="form-control" placeholder="Training ID" required />
                                        </div>
                                        <div className="form-group">
                                            <input value={phone}
                                                onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" placeholder="Phone" required />
                                            <p className='text-warning mb-3'>{message}</p>
                                        </div>
                                        <div className="form-group">
                                            <input value={designation}
                                                onChange={(e) => setdesignation(e.target.value)} name='designation' type="text" className="form-control" placeholder="Designation" required />
                                        </div>
                                        <div className="form-group">
                                            <input value={email}
                                                onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" autoComplete="off" placeholder="Email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                                        </div>


                                        <div className="form-group">
                                            <button onClick={handleSignup} type="button" className="form-control btn btn-primary rounded submit px-3">Create</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <h5 className="card-title">Users List <span className="text-muted fw-normal ms-2">({users?.length})</span></h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">
                            <div>
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a
                                            aria-current="page"
                                            href="#"
                                            className="router-link-active router-link-exact-active nav-link active"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title=""
                                            data-bs-original-title="List"
                                            aria-label="List"
                                        >
                                            <i className="bx bx-list-ul"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Grid" aria-label="Grid"><i className="bx bx-grid-alt"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Link to="/addUser" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary" hidden><i className="bx bx-plus me-1"></i> Add New</Link>
                                <button onClick={ok} className="btn btn-primary"><i className="bx bx-plus me-1"></i> Add New</button>
                            </div>
                            <div className="dropdown">
                                <a className="btn btn-link text-muted py-1 font-size-16 shadow-none dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-horizontal-rounded"></i></a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="">
                            <div className="table-responsive">
                                <table className="table project-list-table table-nowrap align-middle table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="ps-4" style={{ "width": "50px" }}>
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck" /><label className="form-check-label" htmlFor="contacusercheck"></label></div>
                                            </th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">Email</th>

                                            {
                                                user?.role == 'admin' ? <th scope="col" style={{ "width": "200px" }}>Action</th> : ""
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (user?.role == 'admin' || user?.role == 'pbsAdmin' || user?.role == 'zonalAdmin' || user?.role == 'officeHead') && users?.map(u => <User auser={user} user={u} key={user.id}></User>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Users;