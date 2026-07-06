import { useState } from "react";




function Film() {

    let [result, setResult] = useState(0);
    let [sel, setSel] = useState("1");



    function calcPrice(e) {
        let price = 0;

        if (sel === "1") {
            price = 300;
        }

        if (sel === "2") {
            price = 350;
        }

        if (sel === "3") {
            price = 400;
        }

        if (e.target.checked) {
            setResult(result + price);
        } else {
            setResult(result - price);
        }
    }

    return (
        <div className="all">
            <div className="page1">

                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
            </div>
            <div className="page2">

                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" type="checkbox" onChange={calcPrice} name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" onChange={calcPrice} id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />

            </div>
            <div className="page1">

                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
            </div>
            <div className="page1">

                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
            </div>

            <div className="page2">

                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" type="checkbox" onChange={calcPrice} name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" onChange={calcPrice} id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />
                <input className="ch1" onChange={calcPrice} type="checkbox" name="" id="" />

            </div>
            <div>
                <select
                    value={sel}
                    onChange={(e) => {
                        setSel(e.target.value);
                        setResult(0); // сд цену 0
                    }}
                >
                    <option value="1">12:00</option>
                    <option value="2">17:00</option>
                    <option value="3">20:00</option>
                </select>

                <h1>{result} ₽</h1>
            </div>
        </div>
    );
}

export default Film;



