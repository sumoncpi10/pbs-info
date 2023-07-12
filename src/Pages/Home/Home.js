import React, { useEffect, useState } from 'react';
import '../Reports/DNPReports.css';
import 'react-day-picker/dist/style.css';
import { useQuery } from 'react-query';
import fetchData from '../../hooks/useQuery';


const Home = () => {
  const [collectionInfo, setCollectionInfo] = useState([]);
  const [NumOfCashCollection, setNumOfCashCollection] = useState(0);
  const [AmountOfCashCollection, setAmountOfCashCollection] = useState(0);
  const [NumOfOtherCollection, setNumOfOtherCollection] = useState(0);
  const [AmountOfOtherCollection, setAmountOfOtherCollection] = useState(0);
  const [NumOfDC, setNumOfDC] = useState(0);
  const [AmountOfDC, setAmountOfDC] = useState(0);

  const { data, isLoading, isError, error } = useQuery('collections', fetchData);

  useEffect(() => {
    if (data) {
      setCollectionInfo(data);
      totalAdd(data);
    }
  }, [data]);

  const totalAdd = (e) => {
    let NumOfCashCollectionadd = 0;
    let AmountOfCashCollectionadd = 0;
    let NumOfOtherCollectionadd = 0;
    let AmountOfOtherCollectionadd = 0;
    let NumOfDCadd = 0;
    let AmountOfDCadd = 0;

    for (let i = 0; i < e?.length; i++) {
      NumOfCashCollectionadd += parseInt(e[i].NumOfCashCollection);
      AmountOfCashCollectionadd += parseInt(e[i].AmountOfCashCollection);
      NumOfOtherCollectionadd += parseInt(e[i].NumOfOtherCollection);
      AmountOfOtherCollectionadd += parseInt(e[i].AmountOfOtherCollection);
      NumOfDCadd += parseInt(e[i].NumOfDC);
      AmountOfDCadd += parseInt(e[i].AmountOfDC);
    }

    setNumOfCashCollection(NumOfCashCollectionadd);
    setAmountOfCashCollection(AmountOfCashCollectionadd);
    setNumOfOtherCollection(NumOfOtherCollectionadd);
    setAmountOfOtherCollection(AmountOfOtherCollectionadd);
    setNumOfDC(NumOfDCadd);
    setAmountOfDC(AmountOfDCadd);
  };

  if (isLoading) {
    return <h2>Loading.............</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="mb-3">
              <h5 className="card-title">
                মোট আদায় <span className="text-success fw-normal ms-2">({collectionInfo?.length})</span>
              </h5>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex flex-wrap align-items-center justify-content-end gap-2 mb-3"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="table-responsive">
                <table className="table project-list-table table-nowrap align-middle table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" className="ps-4" style={{ width: "50px" }}>
                        <div className="form-check font-size-16">
                          <input type="checkbox" className="form-check-input" id="contacusercheck" />
                          <label className="form-check-label" htmlFor="contacusercheck"></label>
                        </div>
                      </th>
                      <th scope="col">বই</th>
                      <th scope="col">নগদ(টি)</th>
                      <th scope="col">নগদ(টাকা)</th>
                      <th scope="col">অন্যান্য(টি)</th>
                      <th scope="col">অন্যান্য(টাকা)</th>
                      <th scope="col">ডিসি(টি)</th>
                      <th scope="col">ডিসি(টাকা)</th>
                      <th scope="col">আদায়কারী</th>
                    </tr>
                  </thead>
                  <tbody>
                    {collectionInfo.map((collection) => (
                      <tr key={collection.id}>
                        <th scope="row" className="ps-4">
                          <div className="form-check font-size-16">
                            <input type="checkbox" className="form-check-input" id="contacusercheck1" />
                            <label className="form-check-label" htmlFor="contacusercheck1"></label>
                          </div>
                        </th>
                        <td>
                          <span className="badge badge-soft-success mb-0">{collection.bookNo}</span>
                        </td>
                        <td>{collection.NumOfCashCollection}</td>
                        <td>{collection.AmountOfCashCollection}</td>
                        <td>{collection.NumOfOtherCollection}</td>
                        <td>{collection.AmountOfOtherCollection}</td>
                        <td>{collection.NumOfDC}</td>
                        <td>{collection.AmountOfDC}</td>
                        <td>{collection.displayName}</td>
                      </tr>
                    ))}
                    <tr className="bg-light">
                      <th scope="row" className="ps-4">
                        <div className="form-check font-size-16">
                          <label className="form-check-label" htmlFor="contacusercheck1"></label>
                        </div>
                      </th>
                      <td>
                        <span className="badge badge-soft-primary mb-0">Total</span>
                      </td>
                      <td>{NumOfCashCollection || ""}</td>
                      <td>{AmountOfCashCollection || ""}</td>
                      <td>{NumOfOtherCollection || ""}</td>
                      <td>{AmountOfOtherCollection || ""}</td>
                      <td>{NumOfDC || ""}</td>
                      <td>{AmountOfDC || ""}</td>
                      <td></td>
                    </tr>
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

export default Home;
