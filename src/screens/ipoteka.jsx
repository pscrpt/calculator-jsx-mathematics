import { useState } from "react";

function Credit() {

    let [sum, setSum] = useState(0);
    let [first, setFirst] = useState(0);

    let [p, setPercent] = useState(0);

    let [loan, setLoan] = useState(0);


    let [result1, setResult1] = useState(0);
    let [result2, setResult2] = useState(0);
    let [result3, setResult3] = useState(0);


    let [months, setMonths] = useState([]);


    function btn() {

        let percent = Number(p) / 12 / 100;

        let mm = 12 * Number(loan);

        let one = Number(sum) - Number(first);

        let three =
            (one * percent * Math.pow(1 + percent, mm)) /
            (Math.pow(1 + percent, mm) - 1);

        let two = three * mm;

        let one2 = two - one;

        setResult1(one.toFixed(2));
        setResult2(one2.toFixed(2));
        setResult3(three.toFixed(2));




        let arr = [];

        let ostatok = one;

        for (let i = 1; i <= mm; i++) {

            let monthPercent = ostatok * percent;

            let body = three - monthPercent;

            ostatok = ostatok - body;

            if (ostatok < 0) {
                ostatok = 0;
            }

            arr.push([
                i,
                three.toFixed(0),
                monthPercent.toFixed(0),
                body.toFixed(0),
                ostatok.toFixed(0)
            ]);
        }

        setMonths(arr);

    }

    return (

        <div
            className="container-fluid p-5"
            style={{
                background: "#6924d8",
                minHeight: "100vh",
            }}
        >
            <div
                className="card mx-auto shadow-lg p-5"
                style={{
                    maxWidth: "1300px",
                    borderRadius: "30px"
                }}
            >

                <div className="row g-4">

                    <div className="col-md-4">
                        <label className="mb-2">
                            Стоимость недвижимости
                        </label>

                        <div className="input-group">
                            <input
                                onChange={(e) => setSum(e.target.value)}
                                type="number"
                                className="form-control p-3"
                                placeholder="50000"
                            />
                            <span className="input-group-text">₽</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="mb-2">
                            Первоначальный взнос
                        </label>

                        <div className="input-group">
                            <input
                                onChange={(e) => setFirst(e.target.value)}
                                type="number"
                                className="form-control p-3"
                                placeholder="50000"
                            />
                            <span className="input-group-text">₽</span>
                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Процентная ставка, % годовых
                        </label>

                        <input
                            type="number"
                            className="form-control p-3"
                            placeholder="10"
                            onChange={(e) => setPercent(e.target.value)}
                        />
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Срок займа/кредита
                        </label>

                        <div className="input-group">

                            <input
                                type="number"
                                className="form-control p-3"
                                placeholder="ГОД"
                                onChange={(e) => setLoan(e.target.value)}
                            />



                        </div>
                    </div>


                    <div className="col-md-4">
                        <label className="mb-2">
                            Периодичность
                        </label>

                        <div className="form-select p-3">
                            Ежемесячно
                        </div>
                    </div>




                </div>

                <hr className="my-5" />

                <hr className="my-5" />

                <h3 className="mb-3">
                    Результаты расчета
                </h3>

                <table className="table table-bordered">

                    <thead>

                        <tr>
                            <th>Месяц</th>
                            <th>Платеж</th>
                            <th>Проценты</th>
                            <th>Основной долг</th>
                            <th>Остаток</th>
                        </tr>

                    </thead>

                    <tbody>
                        {months.map((m) => (

                            <tr key={m[0]}>

                                <td>{m[0]}</td>
                                <td>{m[1]} ₽</td>
                                <td>{m[2]} ₽</td>
                                <td>{m[3]} ₽</td>
                                <td>{m[4]} ₽</td>

                            </tr>

                        ))}
                    </tbody>

                </table>

                <div className="row align-items-center">

                    <div className="col-md-3">
                        <small>Сумма</small>

                        <h1 className="fw-bold">
                            {result1} ₽
                        </h1>
                    </div>

                    <div className="col-md-3">
                        <small>Переплата</small>

                        <h1 className="fw-bold">
                            {result2} ₽
                        </h1>
                    </div>

                    <div className="col-md-3">
                        <small>В месяц</small>

                        <h1 className="fw-bold">
                            {result3} ₽
                        </h1>
                    </div>





                    <div className="col-md-3 text-end">

                        <button
                            className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
                            onClick={btn}
                        >
                            Считать
                        </button>


                         <a href="/physicst">     <button
                            className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
                         
                        >
                           NEXT
                        </button>
                        </a> 


                    </div>



                </div>

            </div>
        </div>
    );
}

export default Credit;