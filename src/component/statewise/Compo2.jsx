import React, { useEffect, useState } from 'react';

const Compo2 = () => {

    const[data, setData] = useState([]);

    const getCovidData = async () => {
        const codata = await fetch('https://data.covid19india.org/data.json');
        const actualData = await codata.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return(
        <>
            <div className="container-fluid mt-5">
                <div className="main_heading">
                    <h1 className="mb-5 text-center"><span className="fw-bold text-primary"> INDIA  </span><span className='desc'> COVID-19 Dashboard </span></h1>
                </div>

                <div className="col-12 mx-auto">
                    <div className="row">
                        <div className="col-md-9 mx-auto">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th> State </th>
                                            <th> Confirmed </th>
                                            <th> active </th>
                                            <th> recovered </th>
                                            <th> deaths </th>
                                            <th> updated </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((curEle, index) => {
                                                return(
                                                <tr key={index}>
                                                <td> {curEle.state} </td>
                                                <td> {curEle.confirmed} </td>
                                                <td> {curEle.active} </td>
                                                <td> {curEle.recovered} </td>
                                                <td> {curEle.deaths} </td>
                                                <td> {curEle.lastupdatedtime} </td>
                                            </tr>
                                            );
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Compo2;