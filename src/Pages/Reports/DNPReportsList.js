import React, { useEffect, useState } from 'react';
import './DNPReports.css';
import { format, parse } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
const DNPReportsList = () => {
    const [dnpListInfo, setDnpListInfo] = useState([]);
    const [users, SetUsers] = useState([]);
    const [zonals, setZonals] = useState([]);
    const [ccs, setCcs] = useState([]);
    const [pbs_code, setPbsCode] = useState('');
    const [zonal_code, setZonalCode] = useState('');
    // const [cdate, setCDate] = useState(new Date());
    const [NumOfCashCollection, setNumOfCashCollection] = useState(0);
    const [AmountOfCashCollection, setAmountOfCashCollection] = useState(0);
    const [NumOfOtherCollection, setNumOfOtherCollection] = useState(0);
    const [AmmountOfOtherCollection, setAmmountOfOtherCollection] = useState(0);
    const [NumOfDC, setNumOfDC] = useState(0);
    const [AmmountOfDC, setAmmountOfDC] = useState(0);
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null);
    // const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        // Check if a token exists in localStorage or sessionStorage
        const storedToken = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(storedUser);

        }
    }, [localStorage.getItem('token')]);
    useEffect(() => {
        fetch(`https://pbsofficeinfosql.onrender.com/zonals/${user?.pbs_code}`)
            .then(res => res.json())
            .then(data => {
                setZonals(data);
                console.log(data);
            })
    }, [user])
    const btnSearch = async (e) => {
        e.preventDefault();


        const zonal_code = e.target.zonal_code.value;

        const bookNo = e.target.bookNo.value;

        fetch(`https://pbsofficeinfosql.onrender.com/dnpList?zonal_code=${user?.zonal_code}&bookNo=${bookNo}`)
            .then(res => res.json())
            .then(data => {
                setDnpListInfo(data);
                console.log(data);
                // setTimeout(totalAdd(data), 2000);
                // e.target.reset();
            })
    }
    const setZonalCodeM = (e) => {
        setZonalCode(e.target.value);
    }

    return (
        <div>
            <h3 className='text-center text-primary'>ডিএনপি লিষ্ট</h3>
            <div className="container">
                <div className="row align-items-center">
                    <form onSubmit={btnSearch} className="d-flex flex-column" role="search">

                        <div className="d-flex flex-column align-items-center row-space mx-auto">
                            <div className="d-flex flex-column  col-sm-12 col-12 col-md-6">
                                <label className="label" style={{ 'color': 'white' }}>জোনালের নাম</label>
                                <select onChange={setZonalCodeM} name="zonal_code" className="input--style-4" >
                                    {
                                        // zonals.map(z => user?.zonal_code == z.zonal_code ? <option key={z.id} value={z.zonal_code}>{z.zonal_name}</option> : "")
                                        zonals.map(z => <option key={z.id} value={z.zonal_code}>{z.zonal_name}</option>)
                                    }
                                </select>
                            </div>
                            <div className="col-sm-12 col-12 col-md-6">
                                <label className="label" style={{ 'color': 'white' }}>বই নং</label>
                                <input type="text" name='bookNo' className="input--style-4" style={{ 'lineHeight': '14px' }}></input>
                                <button className="btn btn-outline-secondary bg-secondary " type="submit">Search</button>
                            </div>
                        </div >
                    </form >
                </div >
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <h5 className="card-title">বকেয়া <span className="text-success fw-normal ms-2">({dnpListInfo?.length})</span></h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3">

                            <div>
                                <button className="btn btn-primary"><FontAwesomeIcon icon={faFilePdf} /> Download PDF</button>
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
                                            <th scope="col">বই</th>
                                            <th scope="col">হিসাব নং</th>
                                            <th scope="col">নাম</th>
                                            <th scope="col">পিতা/স্বামী</th>
                                            <th scope="col">ঠিকানা</th>
                                            <th scope="col">বকেয়া মাস</th>
                                            <th scope="col">টাকা</th>
                                            {/* <th scope="col" style={{ "width": "200px" }}>Action</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            dnpListInfo.map(dnp => <tr >
                                                <th scope="row" className="ps-4">
                                                    <div className="form-check font-size-16"><input type="checkbox" className="form-check-input" id="contacusercheck1" /><label className="form-check-label" htmlFor="contacusercheck1"></label></div>
                                                </th>
                                                <td><span className="badge badge-soft-success mb-0">{dnp.bookNo}</span></td>
                                                <td>{dnp.accountNo}</td>
                                                <td style={{ fontFamily: 'SutonnyMJ' }}>{dnp.name}</td>
                                                <td style={{ fontFamily: 'SutonnyMJ' }}>{dnp.father}</td>
                                                <td style={{ fontFamily: 'SutonnyMJ' }}>{dnp.address}</td>
                                                <td>{dnp.arrBillPeriod}</td>
                                                <td>{dnp.arrTotal}</td>

                                                {/* {
                                                    users.map(user => user._id == collection.collectedBy ? < td > {user.displayName}</td> : '')
                                                } */}
                                            </tr>
                                            )
                                        }
                                        <tr className=' bg-light'>
                                            {/* <th scope="row" className="ps-4">
                                                <div className="form-check font-size-16">
                                                    <input type="checkbox" className="form-check-input" id="contacusercheck1" />
                                                    <label className="form-check-label" htmlFor="contacusercheck1"></label></div>
                                            </th> */}
                                            {/* <td><span className="badge badge-soft-primary mb-0">Total</span></td>
                                            <td>{NumOfCashCollection ? NumOfCashCollection : "0"}</td>
                                            <td>{AmountOfCashCollection ? AmountOfCashCollection : "0"}</td>
                                            <td>{NumOfOtherCollection ? NumOfOtherCollection : "0"}</td>
                                            <td>{AmmountOfOtherCollection ? AmmountOfOtherCollection : "0"}</td>
                                            <td>{NumOfDC ? NumOfDC : "0"}</td>
                                            <td>{AmmountOfDC ? AmmountOfDC : "0"}</td>
                                            <td></td>
                                            <td></td> */}
                                            {
                                                // users.map(user => user._id == collection.collectedBy ? < td > {user.displayName}</td> : '')
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default DNPReportsList;