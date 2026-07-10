import { useState } from "react";

function Menu() {
    const [activeTab, setActiveTab] = useState("menu");

    const [foodCategory, setFoodCategory] = useState("all");


    const [mas1, setMas1] = useState([]);
    const [mas2, setMas2] = useState([]);

    function plus2(index) {
        let newMas = [...mas2];
        newMas[index].count++;
        setMas2(newMas);
    }

    function minus2(index) {
        let newMas = [...mas2];

        if (newMas[index].count > 1) {
            newMas[index].count--;
        }

        setMas2(newMas);
    }

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

        let index = newMas.findIndex(item => item.name === "Бешбармак");

        if (index !== -1) {
            newMas[index].count++;
            setMas1(newMas);
        } else {
            setMas1([
                ...mas1,
                {
                    name: "Бешбармак",
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

        let index = newMas2.findIndex(item => item.name === "Манты");

        if (index !== -1) {
            newMas2[index].count++;
            setMas2(newMas2);
        } else {
            setMas2([
                ...mas2,
                {
                    name: "Манты",
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
        <div className="app">
            <style>{`
                .menu-btn {
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #373030;
                    color: #9e9e9e;
                    border: none;
                    border-radius: 20px;
                    cursor: pointer;
                    margin: 5px;
                    font-weight: 500;
                    user-select: none;
                    transition: background-color 0.2s;
                }

                /* Кнопка категории горит красным, если она выбрана */
                .menu-btn.active {
                    background-color: #ff3b30;
                    color: white;
                }

                /* Стили для нижней навигации */
                .bottom {
                    display: flex;
                    justify-content: space-around;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background: #222;
                    padding: 10px 0;
                }
                .bottom div {
                    color: #9e9e9e;
                    cursor: pointer;
                    text-align: center;
                }
                /* Активная вкладка снизу тоже подсвечивается */
                .bottom div.selected {
                    color: #ff3b30;
                    font-weight: bold;
                }
            `}</style>

            {/*  ГЛАВНАЯ */}
            {activeTab === "home" && (
                <div>
                    <h1>Башкы баракча</h1>
                    <p>Добро пожаловать в наше приложение!</p>
                </div>
            )}

            {activeTab === "menu" && (
                <>
                    <h1>Меню</h1>

                    <div className="menu-container">
                        <button
                            className={`menu-btn ${foodCategory === "all" ? "active" : ""}`}
                            onClick={() => setFoodCategory("all")}
                        >
                            Баары
                        </button>
                        <button
                            className={`menu-btn ${foodCategory === "et" ? "active" : ""}`}
                            onClick={() => setFoodCategory("et")}
                        >
                            🍖 Эт
                        </button>
                        <button
                            className={`menu-btn ${foodCategory === "manty" ? "active" : ""}`}
                            onClick={() => setFoodCategory("manty")}
                        >
                            🥟 Манты
                        </button>

                    </div>

                    {/* Карточка Бешбармак */}
                    {(foodCategory === "all" || foodCategory === "et") && (
                        <div className="foods">
                            <div className="card22">
                                <div className="foodIcon">🍖</div>
                                <div className="info">
                                    <div className="tag">⭐ Хит</div>
                                    <h2>Бешбармак</h2>
                                    <p>Кой эти, жука жалбырак, пияз соусу</p>
                                    <h3>100 c</h3>
                                </div>

                                {mas1.map((item, index) => (
                                    <div key={index}>


                                        <div>
                                        </div>
                                        <button className="add" onClick={() => del1(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>        <button className="add" onClick={() => minus1(index)}>-</button>

                                        <big><big><big><b>{item.count}</b> </big> </big></big>

                                        <button className="add" onClick={() => plus1(index)}>+</button>
                                        <big><big><b>Добавлено в корзину✅</b></big></big>


                                    </div>
                                ))}
                                <button className="add" onClick={btn1}>+</button>

                            </div>
                        </div>
                    )}

                    {/* Карточка Манты */}
                    {(foodCategory === "all" || foodCategory === "manty") && (
                        <div className="foods">
                            <div className="card22">
                                <div className="foodIcon">🥟</div>
                                <div className="info">
                                    <div className="tag">⭐ Хит</div>
                                    <h2>Манты</h2>
                                    <p>Тайбаш эти, пияз, куйрук май</p>
                                    <h3>120 c</h3>
                                </div>
                                {mas2.map((item, index) => (
                                    <div key={index}>


                                        <div>
                                        </div>
                                        <button className="add" onClick={() => del2(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>        <button className="add" onClick={() => minus2(index)}>-</button>

                                        <big><big><big><b>{item.count}</b> </big> </big></big>


                                        <button className="add" className="add" onClick={() => plus2(index)}>+</button>
                                        <big><big><b>Добавлено в корзину✅</b></big></big>

                                    </div>
                                ))}
                                <button className="add" onClick={btn2}>+</button>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/*  КОРЗИНЫ */}
            {activeTab === "cart" && (
                <div>
                    <h1>Себет</h1>
                    <p>Бул жерде сиздин тандалган тамактарыңыз болот.</p>
                    <div className="products">

                        <div className="basket">




                            {mas1.map((item, index) => (
                                <div key={index} className="basketCard">

                                    <div className="left">
                                        <div className="pill" >🍖</div>

                                        <div>
                                            <h3> {item.name}</h3>
                                            <p>{item.price}c</p>
                                        </div>
                                        <button className="add" onClick={() => del1(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>    
                                    </div>

                                    <div className="count">

                                        <td>
                                            <button className="add" onClick={() => minus2(index)}>-</button>

                                            <big><big><big><b>{item.count}</b> </big> </big></big>


                                            <button className="add" className="add" onClick={() => plus2(index)}>+</button>
                                        </td>

                                    </div>
                                </div>
                            ))}

                            {mas2.map((item, index) => (
                                <div key={index} className="basketCard">

                                    <div className="left">
                                        <div className="pill" >🥟</div>

                                        <div>
                                            <h3> {item.name}</h3>
                                            <p>{item.price}c</p>
                                        </div>
                                        <button className="add" onClick={() => del2(index)}>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>    
                                    </div>

                                    <div className="count">

                                        <td>
                                            <button className="add" onClick={() => minus2(index)}>-</button>

                                            <big><big><big><b>{item.count}</b> </big> </big></big>


                                            <button className="add" className="add" onClick={() => plus2(index)}>+</button>
                                        </td>

                                    </div>
                                </div>
                            ))}


                            <div className="total">

                                <h2>Жалпы</h2>

                                <h2>{total}c</h2>

                            </div>

                            <button className="orderB">
                                Заказ берүү
                            </button>

                        </div>



                    </div>
                </div>
            )}

            {/*  ЗАКАЗОВ */}
            {activeTab === "orders" && (
                <div>
                    <h1>Заказдар</h1>
                    <p>Сиздин заказдардын тизмеси.</p>
                </div>
            )}

            {/*  ПРОФИЛЯ */}
            {activeTab === "profile" && (
                <div>
                    <h1>Профиль</h1>
                    <p>Жеке маалыматтар.</p>
                </div>
            )}


            {/* НИЖНЯЯ НАВИГАЦИЯ */}
            <div className="bottom7">
                <div className={activeTab === "home" ? "selected" : ""} onClick={() => setActiveTab("home")}>
                    🏠<p>Башкы</p>
                </div>
                <div className={activeTab === "menu" ? "selected" : ""} onClick={() => setActiveTab("menu")}>
                    🍽<p>Меню</p>
                </div>
                <div className={activeTab === "cart" ? "selected" : ""} onClick={() => setActiveTab("cart")}>
                    🛒<p>Себет</p>
                </div>
                <div className={activeTab === "orders" ? "selected" : ""} onClick={() => setActiveTab("orders")}>
                    📋<p>Заказдар</p>
                </div>
                <div className={activeTab === "profile" ? "selected" : ""} onClick={() => setActiveTab("profile")}>
                    👤<p>Профиль</p>
                </div>
            </div>

        </div>
    );
}

export default Menu;
