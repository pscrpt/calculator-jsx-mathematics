


import { useState } from "react";

function Percentagecalculator() {

    let [input1, inp1] = useState(0);
    let [input2, inp2] = useState(0);
    let [result1, res1] = useState(0);


    let [input11, inp11] = useState(0);
    let [input22, inp22] = useState(0);
    let [result11, res11] = useState(0);



    function btn1() {
        res1(Number(input1) * Number(input2) / 100);
    }


    function btn11() {
        res11(Number(input11) / Number(input22) * 100);
    }

    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center bg-light gap-4">

            {/* CARD 1 */}
            <div className="card p-4 shadow-lg" style={{ width: "500px" }}>

                <h4 className="text-center mb-3">Percentage Calculator</h4>

                <div className="d-flex align-items-center justify-content-center gap-2 mb-3">

                    <span>What is</span>

                    <input
                        type="number"
                        className="form-control"
                        style={{ width: "80px" }}
                        onChange={(e) => inp1(e.target.value)}
                    />

                    <span>% of</span>

                    <input
                        type="number"
                        className="form-control"
                        style={{ width: "120px" }}
                        onChange={(e) => inp2(e.target.value)}
                    />

                    <span>?</span>
                </div>

                <button onClick={btn1} className="btn btn-secondary w-100">
                    CALCULATE
                </button>

                <div className="1 form-control mt-3 p-2">Result: {result1}</div>

            </div>

            {/* CARD 2 */}
            <div className="card p-4 shadow-lg" style={{ width: "500px" }}>

                <div className="d-flex align-items-center justify-content-center gap-2 mb-3">

                    <input
                        type="number"
                        className="form-control"
                        style={{ width: "120px" }}
                        onChange={(e) => inp11(e.target.value)}
                    />

                    <span>is what Percent of</span>

                    <input
                        type="number"
                        className="form-control"
                        style={{ width: "120px" }}
                        onChange={(e) => inp22(e.target.value)}
                    />

                    <span>?</span>
                </div>

                <button onClick={btn11} className="btn btn-secondary w-100">
                    CALCULATE
                </button>


                <div className="1 form-control mt-3 p-3">Result: {result11}</div>

            </div>
<a href="/lengthconverter"><button className="bg-info">Lengthconverter</button></a>
        </div>
    );
}

export default Percentagecalculator;