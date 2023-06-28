import React, { useState } from 'react';

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
<div class="team-single mx-auto">
<div class="row">
<div class="col-lg-4 col-md-5 xs-margin-30px-bottom">
<div class="team-single-img">
<img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt/>
</div>

<div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
    <h6 > {bill?.smsAccountNumber}</h6>
<h4 class="margin-10px-bottom font-size24 md-font-size22 sm-font-size20 font-weight-600">{bill?.cName}</h4>
<h5>{bill?.fName}</h5>
<p class="sm-width-95 sm-margin-auto">{bill?.cAddress}</p>
<div class="margin-20px-top team-single-icons">
<ul class="no-margin">
{/* <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
<li><a href="javascript:void(0)"><i class="fab fa-google-plus-g"></i></a></li>
<li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li> */}
</ul>
</div>
</div>
</div>
<div class="col-lg-8 col-md-7">
<div class="team-single-text padding-50px-left sm-no-padding-left">
<h4 class="font-size38 sm-font-size32 xs-font-size30">Chittagong Palli Bidyut Samity-2</h4>
<h6>Rangunia Zonal Office</h6>
<div class="contact-info-section margin-40px-tb">
<ul class="list-style9 no-margin">
<li>
    <div class="row">
    <div class="col-md-5 col-5">
    <i class="fas fa-graduation-cap text-orange"></i>
    <strong class="margin-10px-left text-orange">SMS Account Number:</strong>
    </div>
    <div class="col-md-7 col-7">
    <p>{bill?.smsAccountNumber}</p>
    </div>
    </div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-gem text-yellow"></i>
<strong class="margin-10px-left text-yellow">Book Number.:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.bookNo}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-file text-lightred"></i>
<strong class="margin-10px-left text-lightred">Account Number:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.accountNo}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-file text-lightred"></i>
<strong class="margin-10px-left text-lightred">Bill This Month:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.billAmount}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-file text-lightred"></i>
<strong class="margin-10px-left text-lightred">Arrear Bill:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.ArrearAmt}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-file text-lightred"></i>
<strong class="margin-10px-left text-lightred">Bill With Arrear:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.totalBill}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="fas fa-map-marker-alt text-green"></i>
<strong class="margin-10px-left text-green">LPC Date:</strong>
</div>
<div class="col-md-7 col-7">
<p>{ bill?.lpcDate}</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="far fa-file text-lightred"></i>
<strong class="margin-10px-left text-lightred">Bill With Arrear & LPC:</strong>
</div>
<div class="col-md-7 col-7">
<p>{bill?.totalBillWithLpc}</p>
</div>
</div>
</li>


{/* <li>
<div class="row">
<div class="col-md-5 col-5">
<i class="fas fa-mobile-alt text-purple"></i>
<strong class="margin-10px-left xs-margin-four-left text-purple">Phone:</strong>
</div>
<div class="col-md-7 col-7">
<p>(+44) 123 456 789</p>
</div>
</div>
</li>
<li>
<div class="row">
<div class="col-md-5 col-5">
<i class="fas fa-envelope text-pink"></i>
<strong class="margin-10px-left xs-margin-four-left text-pink">Email:</strong>
</div>
<div class="col-md-7 col-7">
<p><a href="javascript:void(0)"><span class="__cf_email__" data-cfemail="1f7e7b7b66706a6d5f7a727e7673777a6d7a">[email&#160;protected]</span></a></p>
</div>
</div>
</li> */}
</ul>
</div>
<h5 class="font-size24 sm-font-size22 xs-font-size20">Previous Bills</h5>
<table class="table table-bordered">
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
<div class="col-md-12">
</div>
</div>

</div>
              
            {/* <table class="table table-bordered">
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