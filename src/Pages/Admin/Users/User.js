import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const User = ({ user, auser }) => {
    const [luser, SetlUser] = useState([]);
    const navigate = useNavigate();
    console.log(user, auser)
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/user/${user?.trg_id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             SetlUser(data);
    //         })
    // }, []);
    const EmpPosting = id => {
        const proceed = window.confirm('Are You Sure To Update User!');
        console.log(id, proceed);
        if (proceed) {
            navigate(`/posting/${id}`);
        }
    }
    return (
        <tr>
            <th scope="row" className="ps-4">
                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck1" /><label className="form-check-label" htmlFor="contacusercheck1"></label></div>
            </th>
            <td><img src={user?.photoURL ? user.photoURL : "https://api.lorem.space/image/face?hash=33791"} alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">{user?.displayName}</a></td>
            <td><span className="badge badge-soft-success mb-0">{user?.designation}</span></td>
            <td>{user?.zonal_code}</td>
            <td>{user?.role}</td>
            <td>{user?.phone}</td>

            <td>
                <ul className="list-inline mb-0">
                    {
                        (auser?.role == 'admin' || auser?.role == 'pbsAdmin' || auser?.role == 'zonalAdmin') ? <li className="list-inline-item">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                        </li> : ""
                    }
                    {
                        (auser?.role == 'admin') ? <li className="list-inline-item">
                            <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                        </li> : ""
                    }
                    {
                        (auser?.role == 'admin' || auser?.role == 'pbsAdmin') ?
                            < li className="list-inline-item dropdown">
                                <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                <div className="dropdown-menu dropdown-menu-end">
                                    <button onClick={() => EmpPosting(user?.id)} className="dropdown-item" p>Posting</button>
                                    {/* <a className="dropdown-item" href="#">Another action</a> */}
                                    {/* <a className="dropdown-item" href="#">Something else here</a> */}
                                </div>
                            </li> : ""
                    }

                </ul>
            </td>
        </tr >
    );
};

export default User;