import { useState } from "react";

function Film() {

    let [result, setResult] = useState(0);
    let [result2, setResult2] = useState("");
    let [result3, setResult3] = useState("");
    let [sel, setSel] = useState("1");

    function calcPrice(e, seat) {

        let price = 0;
        let time = "";

        if (sel === "1") {
            price = 300;
            time = "12:00";
        }

        if (sel === "2") {
            price = 350;
            time = "17:00";
        }

        if (sel === "3") {
            price = 400;
            time = "20:00";
        }

        setResult3(time);

        if (e.target.checked) {
            setResult(result + price);
            setResult2(seat);
        }
        else {
            setResult(result - price);
            setResult2("");
        }
    }

    return (
        <div className="all">

            <div className="page1">

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 1)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 2)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 3)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 4)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 5)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 6)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 7)}
                />

                <input className="ch1" type="checkbox"
                    onChange={(e) => calcPrice(e, 8)}
                />

            </div>

            <div>

                <select
                    value={sel}
                    onChange={(e) => setSel(e.target.value)}
                >
                    <option value="1">12:00</option>
                    <option value="2">17:00</option>
                    <option value="3">20:00</option>
                </select>

                <h1>Цена: {result} ₽</h1>
                <h1>Место: {result2}</h1>
                <h1>Время: {result3}</h1>

            </div>

        </div>
    );
}

export default Film;