import { useState } from "react";

function Drugstore() {

    const [page, setPage] = useState("menu");

    let [sum1, setInp1] = useState(1);

    let [result, setResult] = useState(0);

    const [mas1, setMas1] = useState([]);
    const [mas2, setMas2] = useState([]);




    function plus1(index) {
        let newMas = [...mas1];
        newMas[index].count++;
        setMas1(newMas);
    }

    function minus1(index) {
        let newMas = [...mas1];

        if (newMas[index].count > 1) {
            newMas[index].count--;
        }

        setMas1(newMas);
    }




    function plus2(index) {
        let newMas2 = [...mas2];
        newMas2[index].count++;
        setMas2(newMas2);
    }

    function minus2(index) {
        let newMas2 = [...mas2];

        if (newMas2[index].count > 1) {
            newMas2[index].count--;
        }

        setMas2(newMas2);
    }

    function del1(index) {
        setMas1(mas1.filter((item, i) => i !== index));
    }
    function del2(index) {
        setMas2(mas2.filter((item, i) => i !== index));
    }
    function empty1() {
        setMas1([]);
    }


    function btn1() {

        let newMas = [...mas1];

        let index = newMas.findIndex(item => item.name === "Парацетамол");

        if (index !== -1) {
            newMas[index].count++;
            setMas1(newMas);
        } else {
            setMas1([
                ...mas1,
                {
                    name: "Парацетамол",
                    price: 45,
                    count: 1,
                },
            ]);
        }

    }
    let total = 0;

    mas1.forEach((item) => {
        total += item.price * item.count;
    });
    function btn2() {

        let newMas2 = [...mas2];

        let index = newMas2.findIndex(item => item.name === "Ибупрофен");

        if (index !== -1) {
            newMas2[index].count++;
            setMas2(newMas2);
        } else {
            setMas2([
                ...mas2,
                {
                    name: "Ибупрофен",
                    price: 45,
                    count: 1,
                },
            ]);
        }

    }

    mas2.forEach((item) => {
        total += item.price * item.count;
    });




    return (
        <div>

            {/* Главное меню */}
            {page === "menu" && (

                <div className="app">

                    {/* ВЕСЬ твой код отсюда */}

                    <div className="header">

                        <div className="top">
                            <div>
                                <p className="location">📍 Жеткируу дарегиниз</p>
                                <h2>Ош шаары</h2>
                            </div>

                            <div className="cart" onClick={() => setPage("all2")}>🛒</div>
                        </div>

                        <input
                            type="text"
                            placeholder="🔍 Дары издөө..."
                            className="search"
                        />

                    </div>

                    <div className="banner">

                        <div>
                            <h2>30 мин ичинде 🚀</h2>
                            <p>Биринчи заказга 15% скидка</p>
                        </div>

                        <button>Заказдоо</button>

                    </div>

                    <h2 className="title">Категориялар</h2>

                    <div className="categories">

                        <div className="cat" onClick={() => setPage("all")}>
                            💊
                            <p>Баары</p>
                        </div>

                        <div className="cat">
                            😲
                            <p>Оорутпас</p>
                        </div>

                        <div className="cat">
                            🤧
                            <p>Суук тийүү</p>
                        </div>

                        <div className="cat">
                            ❤️
                            <p>Жүрөк</p>
                        </div>

                        <div className="cat">
                            🍋
                            <p>Витамин</p>
                        </div>

                        <div className="cat">
                            🧸
                            <p>Балдар</p>
                        </div>



                    </div>


                    <div className="menu">

                        <div>🏠<p>Башкы</p></div>

                        <div onClick={() => setPage("all")}>💊<p>Каталог</p></div>

                        <div onClick={() => setPage("all2")}>🛒<p>Себет</p></div>

                        <div>📋<p>Заказдар</p></div>

                        <div>👤<p>Профиль</p></div>

                    </div>

                </div>

            )}


            {/* Вторая страница */}
            {page === "all" && (

                <div className="app">

                    <div className="header">

                        <button
                            className="back"
                            onClick={() => setPage("menu")}
                        >
                            ←
                        </button>

                        <h2>💊 Баары</h2>

                    </div>

                    <div className="products">

                        <div className="card">

                            <div className="status">✔ Бар</div>

                            <div className="pill">💊</div>

                            <h3>Парацетамол</h3>

                            <p>10 табл. · Оорутпас жана температурага</p>

                            <div className="bottom">
                                <h2>45 c</h2>
                                <button onClick={btn1}>+</button>
                            </div>

                        </div>

                        <div className="card">

                            <div className="status">✔ Бар</div>

                            <div className="pill">💊</div>

                            <h3>Ибупрофен 400</h3>

                            <p>20 табл. · Сезгенүүгө каршы</p>

                            <div className="bottom">
                                <h2>89 c</h2>
                                <button onClick={btn2}>+</button>
                            </div>

                        </div>





                    </div>
                    {mas1.map((item, index) => (
                        <div key={index} className="basketCard1">

                            <div className="left">
                                <div className="pill" >💊</div>

                                <div>
                                    <h3> {item.name}</h3>
                                    <p>{item.price}c</p>
                                </div>
                                <button onClick={() => del1(index)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button> <b>  {item.count}</b>
                                Добавлено в корзину  <div onClick={() => setPage("all2")}>🛒<p>Себет</p> <h3>   <p>{total}c</p></h3></div>
                            </div>

                        </div>
                    ))}
                    {mas2.map((item, index) => (
                        <div key={index} className="basketCard1">

                            <div className="left">
                                <div className="pill" >💊</div>

                                <div>
                                    <h3> {item.name}</h3>
                                    <p>{item.price}c</p>
                                </div>
                                <button onClick={() => del2(index)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button> <b>  {item.count}</b>
                                Добавлено в корзину  <div onClick={() => setPage("all2")}>🛒<p>Себет</p> <h3>   <p>{total}c</p></h3></div>
                            </div>

                        </div>
                    ))}

                    <div className="menu">

                        <div>🏠<p>Башкы</p></div>

                        <div onClick={() => setPage("all")}>💊<p>Каталог</p></div>

                        <div onClick={() => setPage("all2")}>🛒<p>Себет</p></div>

                        <div>📋<p>Заказдар</p></div>

                        <div>👤<p>Профиль</p></div>

                    </div>

                </div>

            )}











            {page === "all2" && (

                <div className="app">

                    <div className="header">

                        <button
                            className="back"
                            onClick={() => setPage("menu")}
                        >
                            ←
                        </button>

                        <h2>💊 Себет</h2>

                    </div>

                    <div className="products">

                        <div className="basket">




                            {mas1.map((item, index) => (
                                <div key={index} className="basketCard">

                                    <div className="left">
                                        <div className="pill" >💊</div>

                                        <div>
                                            <h3> {item.name}</h3>
                                            <p>{item.price}c</p>
                                        </div>
                                        <button onClick={() => del1(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="count">

                                        <td>
                                            <button onClick={() => minus1(index)}>-</button>

                                            {item.count}

                                            <button onClick={() => plus1(index)}>+</button>
                                        </td>

                                    </div>
                                </div>
                            ))}

                            {mas2.map((item, index) => (
                                <div key={index} className="basketCard">

                                    <div className="left">
                                        <div className="pill" >💊</div>

                                        <div>
                                            <h3> {item.name}</h3>
                                            <p>{item.price}c</p>
                                        </div>
                                        <button onClick={() => del2(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>

                                    <div className="count">

                                        <td>
                                            <button onClick={() => minus2(index)}>-</button>

                                            {item.count}

                                            <button onClick={() => plus2(index)}>+</button>
                                        </td>

                                    </div>
                                </div>
                            ))}


                            <div className="total">

                                <h2>Жалпы</h2>

                                <h2>{total}c</h2>

                            </div>

                            <button className="orderBtn">
                                Заказ берүү
                            </button>

                        </div>



                    </div>

                    <div className="menu">

                        <div>🏠<p>Башкы</p></div>

                        <div onClick={() => setPage("all")}>💊<p>Каталог</p></div>

                        <div>🛒<p>Себет</p></div>

                        <div>📋<p>Заказдар</p></div>

                        <div>👤<p>Профиль</p></div>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Drugstore;