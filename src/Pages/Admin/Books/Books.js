import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from '../../../hooks/useAdmin';
import auth from '../../../firebase.init';
// import '../../Reports/';
const Books = () => {
    const [bookInfo, setBookInfo] = useState([]);
    const navigate = useNavigate();
    const [use] = useAuthState(auth);
    const [admin] = useAdmin(use);
    console.log(admin);
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/books`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setBookInfo(data);
    //             console.log(data);

    //         })
    // }, []);
    useEffect(() => {
        fetch(`https://pbsofficeinfosql.onrender.com/booksByzonal/${admin?.zonal_code}`)
            .then(res => res.json())
            .then(data => {
                setBookInfo(data);
                console.log(data);
            })
    }, [admin]);
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
                                            <th scope="col" style={{ "width": "200px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookInfo.map(book => <tr>
                                                <th scope="row" className="ps-4">
                                                    <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck1" /><label className="form-check-label" htmlFor="contacusercheck1"></label></div>
                                                </th>
                                                {/* <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{book?.empName}</a></td> */}
                                                <td><a href="#" className="text-body">{book?.displayName}</a><span className="badge badge-soft-success mb-0">{book?.designation}</span></td>
                                                <td>{book?.zonal_name}</td>
                                                <td>{book?.cc_name}</td>
                                                <td>{book?.bookNo}</td>
                                                <td>{book?.numberOfConsumer}</td>
                                                <td>{book?.numberOfDcConsumer}</td>
                                                <td>
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <button onClick={() => btnEdit(book?.id)} className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></button>
                                                        </li>
                                                        {/* <li className="list-inline-item">
                                                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                        </li>
                                                        <li className="list-inline-item dropdown">
                                                            <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-end">
                                                                <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                            </div>
                                                        </li> */}
                                                    </ul>
                                                </td>
                                            </tr>)
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