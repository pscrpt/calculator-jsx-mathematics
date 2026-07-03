import { useState } from "react";

function Ipoteka() {

    let [sum, setSum] = useState(0);
    let [first, setFirst] = useState(0);

    let [percent, setPercent] = useState(0);

    let [loan, setLoan] = useState(0);


    let [result1, setResult1] = useState(0);
    let [result2, setResul2] = useState(0);
    let [result3, setResult3] = useState(0);



    function btn() {



        let mm = 12 * Number(loan);
        let perce = Number(percent) / 100;

        let one = Number(sum) - Number(first);
        let one2 = Number(one) * Number(perce) * loan;
        let two = Number(one) + Number(one2);
        let three = Number(two) / Number(mm);

        setResult1(one);
        setResul2(one2);
     
        setResult3(three);

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

                    </div>



                </div>

            </div>
        </div>
    );
}

export default Ipoteka;