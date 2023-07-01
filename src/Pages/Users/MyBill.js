import React, { useState } from 'react';
import '../../fonts.css';

const MyBill = () => {
    const [bill, setBill] = useState("");
   
    const btnSearch = (e) => {
        e.preventDefault();
        const textSearch = e.target.textSearch.value;
        fetch(`https://pbsofficeinfosql.onrender.com/bill/${textSearch}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setBill(data[0]);
            })
    }
    return (
        <div className='container'>
            <div className="row align-items-center">
                    <form onSubmit={btnSearch}  className="d-flex flex-column" role="search">
                        <div className="row row-space mx-auto">
                            <div className="col-sm-12 col-12 col-md-6">
                                <label className="label" style={{ 'color': 'white' }}>এসএমএস হিসাব নং</label>
                                <input  type="text" name='textSearch' className="input--style-4" style={{ 'lineHeight': '14px' }}></input>
                            </div>
                            <button className="btn  bg-outline btn-dark col-sm-12 col-12 col-md-6" type="submit">Search</button>
                        </div >
                    </form >
                </div >
<div className="team-single mx-auto">
    {
    bill?
<div className="row">
<div className="col-lg-4 col-md-5 xs-margin-30px-bottom">
<div className="team-single-img">
<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt/>
</div>

<div className="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center" style={{ fontFamily: 'SutonnyMJ' }}>
        <h6 > এসএমএস হিসাব নং: {bill?.smsAccountNumber}</h6>
    <h4 className="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600" style={{ fontFamily: 'SutonnyMJ' }}>নাম: {bill?.cName}</h4>
    <h5 style={{ fontFamily: 'SutonnyMJ' }}>পিতা/স্বামী:{bill?.fName}</h5>
    <p className="sm-width-95 sm-margin-auto">গ্রাম: {bill?.cAddress}</p>
    <div className="margin-20px-top team-single-icons">
    <ul className="no-margin">
    </ul>
    </div>
    </div>
</div>
<div className="col-lg-8 col-md-7">
<div className="team-single-text padding-50px-left sm-no-padding-left">
<h4 className="font-size38 sm-font-size32 xs-font-size30">Chittagong Palli Bidyut Samity-2</h4>
<h6>Rangunia Zonal Office</h6>
<div className="contact-info-section margin-40px-tb">
<ul className="list-style9 no-margin">
<li>
    <div className="row">
    <div className="col-md-5 col-5">
    <i className="fas fa-graduation-cap text-orange"></i>
    <strong className="margin-10px-left text-orange">SMS Account Number:</strong>
    </div>
    <div className="col-md-7 col-7">
    <p>{bill?.smsAccountNumber}</p>
    </div>
    </div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-gem text-yellow"></i>
<strong className="margin-10px-left text-yellow">Book Number.:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.bookNo}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-file text-lightred"></i>
<strong className="margin-10px-left text-lightred">Account Number:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.accountNo}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-file text-lightred"></i>
<strong className="margin-10px-left text-lightred">Bill This Month:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.billAmount}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-file text-lightred"></i>
<strong className="margin-10px-left text-lightred">Arrear Bill:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.ArrearAmt}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-file text-lightred"></i>
<strong className="margin-10px-left text-lightred">Bill With Arrear:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.totalBill}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="fas fa-map-marker-alt text-green"></i>
<strong className="margin-10px-left text-green">LPC Date:</strong>
</div>
<div className="col-md-7 col-7">
<p>{ bill?.lpcDate}</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="far fa-file text-lightred"></i>
<strong className="margin-10px-left text-lightred">Bill With Arrear & LPC:</strong>
</div>
<div className="col-md-7 col-7">
<p>{bill?.totalBillWithLpc}</p>
</div>
</div>
</li>


{/* <li>
<div className="row">
<div className="col-md-5 col-5">
<i className="fas fa-mobile-alt text-purple"></i>
<strong className="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
</div>
<div className="col-md-7 col-7">
<p>(+44) 123 456 789</p>
</div>
</div>
</li>
<li>
<div className="row">
<div className="col-md-5 col-5">
<i className="fas fa-envelope text-pink"></i>
<strong className="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
</div>
<div className="col-md-7 col-7">
<p><a href="javascript:void(0)"><span className="__cf_email__" data-cfemail="1f7e7b7b66706a6d5f7a727e7673777a6d7a">[email&#160;protected]</span></a></p>
</div>
</div>
</li> */}
</ul>
</div>
<h5 className="font-size24 sm-font-size22 xs-font-size20">Previous Bills</h5>
<table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

</div>
</div>
<div className="col-md-12">
</div>
</div>
:''
}
</div>
              
            {/* <table className="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
};

export default MyBill;