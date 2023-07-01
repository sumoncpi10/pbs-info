import React, { useEffect, useState } from 'react';
import './DNPReports.css';
const DNPReports = () => {
    const [dnpInfo, setDnpInfo] = useState([]);
    useEffect(() => {
        fetch(`https://pbsofficeinfosql.onrender.com/dnp`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDnpInfo(data);

            })
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <h5 className="card-title">Contact List <span className="text-muted fw-normal ms-2">(834)</span></h5>
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
                                <a href="#" data-bs-toggle="modal" data-bs-target=".add-new" className="btn btn-primary"><i className="bx bx-plus me-1"></i> Add New</a>
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
                                            <th scope="col">Projects</th>
                                            <th scope="col" style={{ "width": "200px" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck1" /><label className="form-check-label" htmlFor="contacusercheck1"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Simon Ryles</a></td>
                                            <td><span className="badge badge-soft-success mb-0">Full Stack Developer</span></td>
                                            <td>SimonRyles@minible.com</td>
                                            <td>125</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck2" /><label className="form-check-label" htmlFor="contacusercheck2"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Marion Walker</a></td>
                                            <td><span className="badge badge-soft-info mb-0">Frontend Developer</span></td>
                                            <td>MarionWalker@minible.com</td>
                                            <td>132</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck3" /><label className="form-check-label" htmlFor="contacusercheck3"></label></div>
                                            </th>
                                            <td>
                                                <div className="avatar-sm d-inline-block me-2">
                                                    <div className="avatar-title bg-soft-primary rounded-circle text-primary"><i className="mdi mdi-account-circle m-0"></i></div>
                                                </div>
                                                <a href="#" className="text-body">Frederick White</a>
                                            </td>
                                            <td><span className="badge badge-soft-danger mb-0">UI/UX Designer</span></td>
                                            <td>FrederickWhite@minible.com</td>
                                            <td>112</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck4" /><label className="form-check-label" htmlFor="contacusercheck4"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Shanon Marvin</a></td>
                                            <td><span className="badge badge-soft-primary mb-0">Backend Developer</span></td>
                                            <td>ShanonMarvin@minible.com</td>
                                            <td>121</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck5" /><label className="form-check-label" htmlFor="contacusercheck5"></label></div>
                                            </th>
                                            <td>
                                                <div className="avatar-sm d-inline-block me-2">
                                                    <div className="avatar-title bg-soft-primary rounded-circle text-primary"><i className="mdi mdi-account-circle m-0"></i></div>
                                                </div>
                                                <a href="#" className="text-body">Mark Jones</a>
                                            </td>
                                            <td><span className="badge badge-soft-info mb-0">Frontend Developer</span></td>
                                            <td>MarkJones@minible.com</td>
                                            <td>145</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end"><a className="dropdown-item" href="#">Edit</a><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Remove</a></div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck6" /><label className="form-check-label" htmlFor="contacusercheck6"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Janice Morgan</a></td>
                                            <td><span className="badge badge-soft-primary mb-0">Backend Developer</span></td>
                                            <td>JaniceMorgan@minible.com</td>
                                            <td>136</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck7" /><label className="form-check-label" htmlFor="contacusercheck7"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Patrick Petty</a></td>
                                            <td><span className="badge badge-soft-danger mb-0">UI/UX Designer</span></td>
                                            <td>PatrickPetty@minible.com</td>
                                            <td>125</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck8" /><label className="form-check-label" htmlFor="contacusercheck8"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Marilyn Horton</a></td>
                                            <td><span className="badge badge-soft-primary mb-0">Backend Developer</span></td>
                                            <td>MarilynHorton@minible.com</td>
                                            <td>154</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck9" /><label className="form-check-label" htmlFor="contacusercheck9"></label></div>
                                            </th>
                                            <td><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="avatar-sm rounded-circle me-2" /><a href="#" className="text-body">Neal Womack</a></td>
                                            <td><span className="badge badge-soft-success mb-0">Full Stack Developer</span></td>
                                            <td>NealWomack@minible.com</td>
                                            <td>231</td>
                                            <td>
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit" className="px-2 text-primary"><i className="bx bx-pencil font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete" className="px-2 text-danger"><i className="bx bx-trash-alt font-size-18"></i></a>
                                                    </li>
                                                    <li className="list-inline-item dropdown">
                                                        <a className="text-muted dropdown-toggle font-size-18 px-2" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"><i className="bx bx-dots-vertical-rounded"></i></a>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><a className="dropdown-item" href="#">Something else here</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-0 align-items-center pb-4">
                    <div className="col-sm-6">
                        <div><p className="mb-sm-0">Showing 1 to 10 of 57 entries</p></div>
                    </div>
                    <div className="col-sm-6">
                        <div className="float-sm-end">
                            <ul className="pagination mb-sm-0">
                                <li className="page-item disabled">
                                    <a href="#" className="page-link"><i className="mdi mdi-chevron-left"></i></a>
                                </li>
                                <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item">
                                    <a href="#" className="page-link"><i className="mdi mdi-chevron-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DNPReports;