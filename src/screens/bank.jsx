import { useState } from "react";

function Bank() {


    const [page, setPage] = useState("menu");
    const [amount, setAmount] = useState(0);

    const [result, setResult] = useState(0);
    const [result2, setResult2] = useState(0);
    const [pay, setPay] = useState(0);
    const [withdraw, setWithdraw] = useState(0);
    const [exchange, setExchange] = useState(89);

    // пополнение
    function btn1() {
        setResult(Number(result) + Number(pay));
        setPay(0);
    }

    // снятие
    function btn2() {
        if (Number(withdraw) <= Number(result)) {
            setResult(Number(result) - Number(withdraw));
            setWithdraw(0);
        } else {
            alert("Недостаточно средств!");
        }
    }

    // обмен
    function btn3() {
        if (Number(amount) <= Number(result)) {
            const dollars = (Number(amount) / Number(exchange)).toFixed(2);

            setResult2(Number(result2) + Number(dollars));
            setResult(Number(result) - Number(amount));
            setAmount(0);
        } else {
            alert("Недостаточно средств!");
        }
    }

    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="card card-wrapper p-3" style={{ width: "400px" }}>

                {/* Главное меню */}
                {page === "menu" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>Главное меню</b></h4>
                            <span>Выберите операцию</span>
                        </div>

                        <div className="card-body">

                            <div
                                className="balance mb-3 rounded-4 p-3 bg-primary text-white"
                            >
                                <b>Ваш баланс</b>
                                <br />

                                <b style={{ fontSize: "35px" }}>
                                    {result}
                                </b>

                                <b style={{ fontSize: "30px" }}>
                                    ₽
                                </b><br />


                                <b style={{ fontSize: "35px" }}>
                                    {result2}
                                </b>

                                <b style={{ fontSize: "30px" }}>

                                    $
                                </b>

                            </div>

                            <button
                                onClick={() => setPage("balance")}
                                className="btn btn-primary col-12 mb-2"
                            >
                                💰 Проверить баланс
                            </button>

                            <button
                                onClick={() => setPage("withdraw")}
                                className="btn btn-primary col-12 mb-2"
                            >
                                💸 Снять деньги
                            </button>

                            <button
                                onClick={() => setPage("pay")}
                                className="btn btn-primary col-12 mb-2"
                            >
                                💳 Пополнить счет
                            </button>


                            <button
                                onClick={() => setPage("exchange")}
                                className="btn btn-primary col-12 mb-2"
                            >
                                💱 Обменять счет в доллары
                            </button>

                            <button
                                onClick={() => setPage("history")}
                                className="btn btn-primary col-12 mb-2"
                            >
                                📜 История операций
                            </button>

                        </div>

                    </div>
                )}


                {/* Обмен */}
                {page === "exchange" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>💱 Обмен счета</b></h4>
                            <span>Текущее состояние</span>
                        </div>

                        <div className="card-body">

                            <div
                                className="bg-primary text-white rounded-4 p-3"
                            >
                                <b>Ваш баланс</b>
                                <br />

                                <b style={{ fontSize: "35px" }}>
                                    {result}₽
                                </b>
                                <br />
                                <b style={{ fontSize: "35px" }}>
                                    {result2}
                                </b>

                                <b style={{ fontSize: "30px" }}>

                                    $
                                </b>

                            </div><br />

                            <input
                                type="number"
                                className="form-control"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="Введите сумму"
                            />

                            <button
                                className="btn bg-danger text-white col-12 mt-3"
                                onClick={btn3}
                            >
                                Снять сумму
                            </button><br />
                            <br /><br />

                            <button
                                onClick={() => setPage("menu")}
                                className="btn btn-secondary col-12 mt-3"
                            >
                                Назад
                            </button>

                        </div>

                    </div>
                )}




                {/* Баланс */}
                {page === "balance" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>📊 Баланс счета</b></h4>
                            <span>Текущее состояние</span>
                        </div>

                        <div className="card-body">

                            <div
                                className="bg-primary text-white rounded-4 p-3"
                            >
                                <b>Ваш баланс</b>
                                <br />

                                <b style={{ fontSize: "35px" }}>
                                    {result}₽
                                </b>

                            </div>

                            <button
                                onClick={() => setPage("menu")}
                                className="btn btn-secondary col-12 mt-3"
                            >
                                Назад
                            </button>

                        </div>

                    </div>
                )}


                {/* Снять деньги */}
                {page === "withdraw" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>📤 Снятие денег</b></h4>
                            <span>Введите сумму</span>
                        </div>

                        <div className="card-body">

                            <label>
                                <b>Сумма:</b>
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                value={withdraw}
                                onChange={(e) => setWithdraw(e.target.value)}
                                placeholder="Введите сумму"
                            />


                            <button
                                className="btn bg-danger text-white col-12 mt-3"
                                onClick={btn2}
                            >
                                Снять сумму
                            </button>

                            <button
                                onClick={() => setPage("menu")}
                                className="btn btn-secondary col-12 mt-3"
                            >
                                Назад
                            </button>

                        </div>

                    </div>
                )}


                {/* Пополнение */}
                {page === "pay" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>📥 Пополнение счета</b></h4>
                            <span>Введите сумму</span>
                        </div>

                        <div className="card-body">

                            <label>
                                <b>Сумма:</b>
                            </label>

                            <input
                                type="number"
                                className="form-control"
                                value={pay}
                                onChange={(e) => setPay(e.target.value)}
                                placeholder="Введите сумму"
                            />

                            <button
                                onClick={btn1}
                                className="btn bg-success text-white col-12 mt-3"
                            >
                                Пополнить счет
                            </button>

                            <button
                                onClick={() => setPage("menu")}
                                className="btn btn-secondary col-12 mt-3"
                            >
                                Назад
                            </button>

                        </div>

                    </div>
                )}


                {/* История */}
                {page === "history" && (

                    <div className="card-page">

                        <div className="card-header text-center p-4">
                            <h4><b>📝 История</b></h4>
                            <span>Последние транзакции</span>
                        </div>

                        <div className="card-body">

                            <div
                                style={{
                                    maxHeight: "300px",
                                    overflowY: "auto",
                                    padding: "10px"
                                }}
                            >
                                История пока пуста
                            </div>

                            <button
                                onClick={() => setPage("menu")}
                                className="btn btn-secondary col-12 mt-3"
                            >
                                Вернуться в меню
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default Bank;
























