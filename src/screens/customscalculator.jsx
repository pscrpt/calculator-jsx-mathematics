import { useState } from "react";

function Customscalculator() {
    const [mode, setMode] = useState("basic");


    const [year, setYear] = useState(2025);
    const [input, setInput] = useState(0);
    const [engine, setEngine] = useState(2019);

    const [result, setResult] = useState(0);
    const [result2, setResult2] = useState(0);
    const [result3, setResult3] = useState(0);


    function calculate() {

        setResult2(Number(result2) + Number(input));
        setInput(0);


        let rate = 0;

        if (year === 2025) {
            rate = 1.773;
        }
        else if (year === 2024) {
            rate = 1.773;
        }
        else if (year === 2023) {
            rate = 1.624;
        }
        else if (year === 2022) {
            rate = 1.479;
        }
        else if (year === 2021) {
            rate = 1.345;
        }
        else if (year === 2020) {
            rate = 1.197;
        }
        else if (year === 2020) {
            rate = 1.048;
        }
        let duty = Math.round(engine * rate);

        let duty2 = Math.round(duty + input);

        setResult(duty);
        setResult3(duty2);

    }


    return (
        <div
            className="container-fluid min-vh-100 py-5"
            style={{
                background: "#0d111d",
                color: "white"
            }}
        >
            <div className="container" style={{ maxWidth: "1100px" }}>

                <h1 className="fw-bold mb-3">
                    Расчёт таможенной пошлины
                </h1>

                <p className="text-secondary">
                    Расчёты носят ознакомительный характер.
                    <br />
                    За точной таможенной пошлиной обратитесь к специалистам.
                </p>

                <h2 className="fw-bold mt-5 mb-4">
                    Калькулятор таможенной пошлины
                </h2>


                <div
                    className="d-flex rounded overflow-hidden mb-4"
                    style={{
                        background: "#151a2d",
                        height: "60px"
                    }}
                >
                    <button
                        className={`btn flex-fill ${mode === "basic"
                            ? "btn-primary"
                            : "text-white"
                            }`}
                        onClick={calculate}

                    >
                        Рассчитать
                    </button>


                </div>


                <label className="mb-2">Сумма автомобилья</label>
                <input style={{
                    background: "#0a1020",
                    color: "white",
                    border: "1px solid #2a3047"
                }} className="col-12 p-2" type="number"
                    value={input}
                    onChange={(e) =>
                        setInput(Number(e.target.value))

                    } />

                <div className="mb-4">
                    <label className="mb-2">
                        Год выпуска авто
                    </label>

                    <select
                        className="form-select p-3"
                        style={{
                            background: "#0a1020",
                            color: "white",
                            border: "1px solid #2a3047"
                        }}
                        value={year}
                        onChange={(e) =>
                            setYear(Number(e.target.value))
                        }

                    >
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>

                    </select>
                </div>


             


                <div className="mb-4">
                    <label className="mb-2">
                        Объем двигателя
                    </label>

                    <select
                        className="form-select p-3"
                        style={{
                            background: "#0a1020",
                            color: "white",
                            border: "1px solid #2a3047"
                        }}
                        value={engine}
                        onChange={(e) =>
                            setEngine(Number(e.target.value))
                        }

                    >
                        <option>
                            Выберите объём
                        </option>

                        <option value="1600">1.6</option>
                        <option value="2000">2.0</option>
                        <option value="2500">2.5</option>
                        <option value="3000">3.0</option>
                        <option value="3500">3.5</option>
                        <option value="4000">4.0</option>
                        <option value="4400">4.4</option>
                        <option value="4600">4.6</option>
                        <option value="5700">5.7</option>
                        <option value="6200">6.2</option>

                    </select>
                </div>


                <div className="mt-5">
                    <h4>Стоимость авто:</h4>

                    <h2> {result2} $</h2>

                    <hr
                        style={{
                            borderColor: "#444"
                        }}
                    />

                    <h3 className="fw-bold">
                        Сумма пошлины:
                    </h3>

                    <h2 className="text-primary">
                        {result} $
                    </h2>


                    <h2 className="fw-bold">
                        Общая сумма:
                    </h2>

                    <h1 className="text-primary">
                        {result3} $
                    </h1>
                </div>

                  <a href="/ipoteka"> <button
                        className={`btn flex-fill ${mode === "basic"
                            ? "btn-primary"
                            : "text-white"
                            }`}
                       

                    >
                        IPOTEKA
                    </button></a>  
                
            </div>
        </div >
    );
}

export default Customscalculator;