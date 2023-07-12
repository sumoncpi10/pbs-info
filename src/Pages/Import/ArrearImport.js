import React, { useState } from 'react';
import Papa from 'papaparse';
import { toast } from 'react-toastify';
const ArrearImport = () => {
    const [idata, setData] = useState([])
    const [coulmn, setCoulmn] = useState([])
    const [values, setValues] = useState([])
    console.log(idata)
    console.log(coulmn)
    console.log(values)
    const handleFile = (event) => {
        // eslint-disable-next-line no-sequences
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (result) {
                const coulmnArray = []
                const valuesArray = [];
                result.data.map((d) => {
                    coulmnArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d))
                })
                setData(result.data);
                setCoulmn(coulmnArray[0])
                setValues(valuesArray)
            }
        })
    }
    const handleImportBill = (e) => {
        e.preventDefault();
        fetch('https://pbsofficeinfosql.onrender.com/import-csv-arrear', {
            method: 'POST',
            // limits:{fileSize: '1gb'},
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(idata)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                // setData("");
                toast("Consumer Import Successfully!");
            })
    }
    return (
        <div className='container '>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='m-3'>Upload Arrear Bill Here</h1>
                <form onSubmit={handleImportBill}>
                    <input
                        className='btn btn-light'
                        type='file'
                        name='file'
                        accept='.csv'
                        onChange={handleFile}
                        style={{ display: "block", margin: "10px auto" }}>

                    </input>
                    <input type='submit' className='btn btn-primary' value='Import Arrear'></input>
                </form>
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            {
                                coulmn?.map((col) => <th scope="col">{col}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values?.map(v =>
                                <tr > {v.map(vv => <th >{vv}</th>)}</tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ArrearImport;