import { useState } from "react";
function Lengthconverter() {


  let [input11, inp1] = useState(0);
  let [input22, inp2] = useState(0);
  let [select11, met1] = useState(100);
  let [select22, cm1] = useState(100);
  let [result, selresult] = useState(0);

  function convert() {
    let mett = Number(input11) * Number(select22);
    let cmm = Number(input22) / Number(select11);

    selresult({
      mett,
      cmm
    });
  }
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center bg-light">

      <div
        className="card shadow p-5"
        style={{
          width: "750px",
          borderRadius: "15px"
        }}
      >

        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "#2d87d3" }}
        >
          Length Converter
        </h1>

        <input
          type="number"
          className="form-control p-3 mb-5"
          placeholder="m"
          onChange={(e) => inp1(e.target.value)}
          
        />

        <input
          type="number"
          className="form-control p-3 mb-5"
         placeholder="cm"
          onChange={(e) => inp2(e.target.value)}
        />

        <div className="d-flex justify-content-center gap-4 mb-5">

          <select
            className="form-select"
            style={{ width: "150px" }}
            onChange={(e) => {
              const value = e.target.value;

              if (value === "met") met1(value);
              if (value === "cm") cm1(value);
            }}
          >
            <option value={100}>cm</option>
            <option value={100}>m</option>
          </select>


        </div>

        <h3
          className="text-center mb-4"
          style={{ color: "crimson" }}
        >
          0
        </h3>

        <div className="text-center">

           <button
            className="btn btn-primary px-5 py-2 fs-4"
            onClick={convert}
          >
            Convert
          </button>

        </div>
        
          <p>m → cm: {result.mett}</p>
          <p>cm → m: {result.cmm}</p>

      </div>

    </div>
  );
}

export default Lengthconverter;