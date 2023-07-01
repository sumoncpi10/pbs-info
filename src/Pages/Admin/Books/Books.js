import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../../firebase.init';

const Books = () => {
    const [bookInfo, setBookInfo] = useState([]);
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    console.log(user);
    useEffect(() => {
        // Check if a token exists in localStorage or sessionStorage
        const storedUser = localStorage.getItem('user');

       const user = storedUser ? JSON.parse(storedUser) : null;

        // Use the user data as needed
        if (user) {
        // Do something with the user data
            setUser(user);
             fetch(`https://pbsofficeinfosql.onrender.com/booksByzonal/${user?.zonal_code}`)
                .then(res => res.json())
                .then(data => {
                setBookInfo(data);
                console.log(data);
            });
        }
    }, []);
   
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/booksByzonal/${user?.zonal_code}`)
    //         .then(res => res.json())
    //         .then(data => {
    //         setBookInfo(data);
    //         // console.log(data);
    //         });
    // }, [user]);

    const btnEdit = id => {
        const proceed = window.confirm('Are You Sure You Want To Update The Book!');
        console.log(id, proceed);
        if (proceed) {
            navigate(`/books/${id}`);
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <h5 className="card-title">Book List <span className="text-muted fw-normal ms-2">({bookInfo?.length})</span></h5>
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
                                <Link to="/book-info" className="btn btn-primary"><i className="bx bx-plus me-1"></i> Add New</Link>
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
                        <div className="col-lg-12">
                            <div className="table-responsive">
                                <table className="table project-list-table table-nowrap align-middle table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="ps-4" style={{ "width": "50px" }}>
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck" /><label className="form-check-label" htmlFor="contacusercheck"></label></div>
                                            </th>
                                            <th scope="col">Name & Position</th>
                                            <th scope="col">Zonal</th>
                                            <th scope="col">Complain Center</th>
                                            <th scope="col">Book No</th>
                                            <th scope="col">Consumer(N)</th>
                                            <th scope="col">DC Consumer(N)</th>
                                            {
                                                (user?.role == 'superAdmin' || user?.role == 'admin' || user?.role == 'pbsAdmin' || user?.role == 'zonalAdmin'  || user?.designation == 'bs') && <th scope="col" style={{ "width": "200px" }}>Action</th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        

                                        {
                                            bookInfo.length > 0 ?bookInfo.map(book => <tr key={book?.id}>
                                                <th scope="row" className="ps-4">
                                                    <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck1" /><label className="form-check-label" htmlFor="contacusercheck1"></label></div>
                                                </th>
                                                {/* <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{book?.empName}</a></td> */}
                                                <td><a href="#" className="text-body">{book?.displayName}</a><span className="badge badge-soft-success mb-0">{book?.designation}</span></td>
                                                <td>{book?.zonal_code}</td>
                                                <td>{book?.cc_code}</td>
                                                <td>{book?.bookNo}</td>
                                                <td>{book?.numberOfConsumer}</td>
                                                <td>{book?.numberOfDcConsumer}</td>
                                                {
                                                    (user?.role == 'superAdmin' || user?.role == 'admin' || user?.role == 'pbsAdmin' || user?.role == 'zonalAdmin'|| user?.designation == 'bs') && <td>
                                                        <ul className="list-inline mb-0">
                                                            <li className="list-inline-item">
                                                                <button onClick={() => btnEdit(book?.id)} className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></button>
                                                            </li>
                                                       
                                                        </ul>
                                                    </td>
                                                }

                                            </tr>): (
                                                    <tr>
                                                    <td colSpan="7">Loading...</td>
                                                    </tr>
                                                )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Books;