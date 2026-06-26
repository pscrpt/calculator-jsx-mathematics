import { useState } from "react";

function Currencyconvertor() {

    let [input11, inp1] = useState(0);
    let [input22, inp2] = useState(0);
    let [select11, selusd1] = useState(89);
    let [select22, selkgz1] = useState(89);
    let [result, selresult] = useState(0);

    function convert() {
        let usdToKgs = Number(input11) * Number(select22);
        let kgsToUsd = Number(input22) / Number(select11);

        selresult({
            usdToKgs,
            kgsToUsd
        });
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

            <div
                className="card p-5 shadow-lg"
                style={{
                    width: "500px",
                    borderRadius: "30px"
                }}
            >

                <h1
                    className="text-center mb-4 fw-bold"
                    style={{ color: "green" }}
                >
                    Currency Converter
                </h1>

                <div className="mb-3">
                    <label className="form-label fs-4">
                        Amount:
                    </label>

                    <input
                        type="number"
                        className="form-control p-3"
                        placeholder="usd"
                        onChange={(e) => inp1(e.target.value)}
                    />

                    <input
                        type="number"
                        className="form-control p-3"
                        placeholder="kgz"
                        onChange={(e) => inp2(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fs-4">
                        From Currency:
                    </label>


                </div>

                <div className="text-center my-3">
                    <button
                        className="btn rounded-circle shadow"
                        style={{
                            width: "60px",
                            height: "60px",
                            background: "#eee",
                            fontSize: "28px",
                            color: "red"
                        }}
                    >
                        ↔
                    </button>
                </div>

                <div className="mb-4">
                    <label className="form-label fs-4">
                        To Currency:
                    </label>

                    <select
                        className="form-select p-3"
                        onChange={(e) => {
                            const value = e.target.value;

                            if (value === "KGZ") selkgz1(value);
                            if (value === "USD") selusd1(value);
                        }}
                    >
                        <option value={1}>KGS</option>
                        <option value={89} >USD</option>
                    </select>
                </div>

                <p>USD → KGS: {result.usdToKgs}</p>
                <p>KGS → USD: {result.kgsToUsd}</p>

                <button
                    onClick={convert}
                    className="btn btn-primary p-3 fs-4 fw-bold shadow"
                >
                    Convert
                </button><br /><br />
              <a href="/percentagecalculator"> <button
                   
                    className="btn btn-primary p-1 fs-6 fw-bold shadow"
                >
                    percentagecalculator
                </button></a>  

            </div>

        </div>
    );
}

export default Currencyconvertor;

















