import './DNPInfo.css';
// import $ from 'jquery';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import auth from '../../firebase.init';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const KWInfo = () => {
    (function ($) {
        'use strict';
        try {
            var selectSimple = $('.js-select-simple');
            selectSimple.each(function () {
                var that = $(this);
                var selectBox = that.find('select');
                var selectDropdown = that.find('.select-dropdown');
                selectBox.select2({
                    dropdownParent: selectDropdown
                });
            });
        } catch (err) {
            console.log(err);
        }
    })(window.jQuery);

    const [user, loading, error] = useAuthState(auth);
    const [book, setBook] = useState([]);
    const [users, SetUsers] = useState([]);

    // const [zonals, setZonals] = useState([]);
    const [officeInfo, setofficeInfo] = useState([]);
    const today = new Date();
    // const numberOfDaysToAdd = 3;
    const date = today.setDate(today.getDate());
    const defaultValue = new Date(date).toISOString().split('T')[0];
    // console.log(defaultValue);
    // const today = new Date(),
    //     date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // useEffect(() => {
    //     fetch(`https://pbsofficeinfosql.onrender.com/office?complainCenter=${book?.complainCenter ? book?.complainCenter : book?.zonal}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setofficeInfo(data);
    //         })
    // }, [book]);
    useEffect(() => {
        fetch(`https://pbsofficeinfosql.onrender.com/users`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                SetUsers(data);

            })
    }, [book]);

    const btnSearch = (e) => {
        e.preventDefault();
        const textSearch = e.target.textSearch.value;
        fetch(`https://pbsofficeinfosql.onrender.com/book/${textSearch}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBook(data[0]);
            })
    }
    const handleAddKWInfo = (e) => {
        e.preventDefault();
        const bookNo = e.target.bookNo.value;
        const pbs_code = e.target.pbs_code.value;
        const zonal_code = e.target.zonal_code.value;
        const cc_code = e.target.cc_code.value;

        const year = e.target.year.value;
        const month = e.target.month.value;
        const kw = e.target.kw.value;
        const kwAmount = e.target.kwAmount.value;
        const assign_to = e.target.assign_to.value;
        const entered_by = user?.email;
        // console.log(name, email, password);
        const product = {
            bookNo, pbs_code, zonal_code, cc_code, year, month, kw, kwAmount, assign_to, entered_by
        };
        console.log(product);
        // send data to the server

        fetch('https://pbsofficeinfosql.onrender.com/kwAdd', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                e.target.reset();
                setBook("");
                toast("KW Add Successfully!");
            })
    }
    const [cdate, setCDate] = useState(new Date());

    const kwChange = (e) => {
        const { kw, ...rest } = book;
        const newBrand = e.target.value;
        const newProduct = { kw: newBrand, ...rest };
        setBook(newProduct);
    }
    return (
        <div className="wrapper wrapper--w680">
            <div className="card card-4">

                <div className="card-body">
                    <h2 className="title">মোট কিলোয়াট তথ্য(মাস ভিত্তিক)</h2>
                    <div className="container-fluid p-2 mb-3">
                        <form onSubmit={btnSearch} className="d-flex" role="search">
                            <input name='textSearch' className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary bg-dark" type="submit">Search</button>
                        </form>
                    </div>

                    <form method="POST" onSubmit={handleAddKWInfo}>

                        <div className="row row-space">
                            {/* <div className="col-2">
                                <div className="input-group">
                                    <label className="label">আদায়ের তারিখ</label>
                                    <input type="date" name="cdate" defaultValue={defaultValue} />
                                </div>
                            </div> */}
                            <div className="col-2 ">
                                <div className="input-group">
                                    <label className="label">পবিসের নাম</label>
                                    <select name="pbs_code" className="input--style-4" style={{ "width": "550px", "lineHeight": "50px" }}>
                                        <option value='29'>Chittagong PBS-2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">দ্বায়িত্বপ্রাপ্ত কর্মকর্তা/কর্মচারী</label>
                                    <select name="assign_to" className="" style={{ "width": "250px", "lineHeight": "50px" }}>
                                        <option value={book?.assign_to}>{book?.displayName},{book?.designation}</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="row row-space">

                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">অফিসের নাম</label>
                                    <select name="zonal_code" className="input--style-4" style={{ "width": "550px", "lineHeight": "50px" }}>
                                        <option value={book?.zonal_code}>{book?.zonal_name}</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <label className="label">অভিযোগ কেন্দ্র</label>
                                <div className="input-group">
                                    <select name="cc_code" className="input--style-4" style={{ "width": "550px", "lineHeight": "50px" }}>
                                        <option value={book?.cc_code}>{book?.cc_name}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">বই নং</label>
                                    <input name='bookNo' className="input--style-4" type="text" value={book?.bookNo} disabled required />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">গ্রাহক সংখ্যা</label>
                                    <input name='numberOfConsumer' className="input--style-4" type="text" value={book?.numberOfConsumer} disabled />
                                </div>
                            </div>
                        </div>

                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">মাসের নাম</label>
                                    <select name="month" className="input--style-4" style={{ "width": "550px", "lineHeight": "50px" }} required>
                                        <option value=''>Select Month</option>
                                        <option value='01'>জানুয়ারী</option>
                                        <option value='02'>ফেব্রুয়ারী</option>
                                        <option value='03'>মার্চ</option>
                                        <option value='04'>এপ্রিল</option>
                                        <option value='05'>মে</option>
                                        <option value='06'>জুন</option>
                                        <option value='07'>জুলাই</option>
                                        <option value='08'>আগষ্ট</option>
                                        <option value='09'>সেপ্টেম্বর</option>
                                        <option value='10'>অক্টোবর</option>
                                        <option value='11'>নভেম্বর</option>
                                        <option value='12'>ডিসেম্বর</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <label className="label">বছর</label>
                                <div className="input-group">
                                    <select name="year" className="input--style-4" style={{ "width": "550px", "lineHeight": "50px" }} required>
                                        <option value=''>Select Year</option>
                                        <option value='2022'>2022</option>
                                        <option value='2023'>2023</option>
                                        <option value='2024'>2024</option>
                                        <option value='2025'>2025</option>
                                    </select>
                                    {/* <div className="select-dropdown"></div> */}
                                </div>
                            </div>
                        </div>

                        <div className="row row-space">
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">বিক্রয় কিলোয়াট</label>
                                    <input onChange={kwChange} value={book?.kw} className="input--style-4" type="text" name="kw" required />
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group">
                                    <label className="label">বিক্রয় টাকা</label>
                                    <input className="input--style-4" type="text" name="kwAmount" required />
                                </div>
                            </div>
                        </div>

                        <div className="p-t-15">
                            <button className="btn btn--radius-2 btn-primary" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default KWInfo;

