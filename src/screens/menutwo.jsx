import { useState } from "react";

function Menutwo() {
    const [activeTab, setActiveTab] = useState("menu1");

    const [foodCategory, setFoodCategory] = useState("all");

    const [inputValue1, setInputValue] = useState('');
    const [inputValue2, setInputEmail] = useState('');
    const [inputValue3, setInputNumber] = useState('');
    const [inputValue4, setInputS] = useState('');

    const [resultName, setResultName] = useState('');
    const [resultEmail, setResultEmail] = useState('');
    const [resultNumber, setResultNumber] = useState('');
    const [resultS, setResultS] = useState('');
    const [resultbb, resultb] = useState('');
    const handleButtonClick = () => {
        setResultName(inputValue1);
        setResultNumber(inputValue2);
        setResultEmail(inputValue3);
        setResultS(inputValue4);
    };


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
                    price: 100,
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
                    price: 120,
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
            <div className="navbar1">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <i>
                                Bella <b className="ristorante2">Ristorante</b>
                            </i>
                        </a>

                        <div className="menu2text">
                            <div className="i2" >
                                <a href="#" onClick={() => setActiveTab("menu")}>Главная</a>
                            </div>

                            <div className="i2">
                                <a href="#" onClick={() => setActiveTab("menu")}>Меню</a>
                            </div>
                        </div>

                        <div>
                            <button className="menu2btn1">Войти</button>
                            <button className="menu2btn2" onClick={() => setActiveTab("registration")}>Регистрация</button>
                        </div>
                    </div>
                </nav>
            </div>


            {activeTab === "home" && (
                <div>
                    <h1>Башкы баракча</h1>
                    <p>Добро пожаловать в наше приложение!</p>
                </div>
            )}

            {activeTab === "menu1" && (
                <>

                    <div className="hero">
                        <p className="heroTop">
                            ИТАЛЬЯНСКАЯ КУХНЯ • МОСКВА
                        </p>

                        <h1>
                            Вкус <span>Италии</span>
                            <br />
                            у вас дома
                        </h1>

                        <p className="heroText">
                            Свежие ингредиенты, традиционные рецепты и страсть к
                            кулинарии — в каждом блюде.
                        </p>

                        <div className="heroBtns">
                            <button className="heroBtn1" onClick={() => setActiveTab("menu")}>Открыть меню</button>
                            <button className="heroBtn2" onClick={() => setActiveTab("cart")}>Мои заказы</button>
                        </div>
                    </div>
                </>
            )}




            {activeTab === "registration" && (
                <>

                    <div className="register">
                        <div className="registerCard">

                            <h1>Создать аккаунт</h1>
                            <p className="subtitle">Регистрируйтесь и заказывайте</p>

                            <label>ВАШЕ ИМЯ</label>
                            <input onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Name" />

                            <label>EMAIL</label>
                            <input type="email" onChange={(e) => setInputEmail(e.target.value)} placeholder="email" />

                            <label>ТЕЛЕФОН</label>
                            <input type="text" onChange={(e) => setInputNumber(e.target.value)} placeholder="+" />

                            <label>ПАРОЛЬ</label>
                            <input type="password" onChange={(e) => setInputS(e.target.value)} placeholder="••••••" />

                            <label>ПОВТОРИТЕ ПАРОЛЬ</label>
                            <input type="password" placeholder="••••••" />

                            <button onClick={handleButtonClick} className="registerBtn">
                                Зарегистрироваться
                            </button>

                            <p className="loginText">
                                Уже есть аккаунт? <span>Войти</span>
                            </p>

                        </div>
                    </div>
                </>
            )}

            {activeTab === "menu" && (
                <>
                    <h1 className="menuTitle">Наше меню</h1>
                    <p className="menuSubTitle">
                        Выбирайте блюда и добавляйте в корзину
                    </p>

                    <div className="categoryBar">
                        <button
                            className={`categoryBtn ${foodCategory === "all" ? "activeCategory" : ""}`}
                            onClick={() => setFoodCategory("all")}
                        >
                            Все
                        </button>

                        <button
                            className={`categoryBtn ${foodCategory === "et" ? "activeCategory" : ""}`}
                            onClick={() => setFoodCategory("et")}
                        >
                            🍖 Эт
                        </button>

                        <button
                            className={`categoryBtn ${foodCategory === "manty" ? "activeCategory" : ""}`}
                            onClick={() => setFoodCategory("manty")}
                        >
                            🥟 Манты
                        </button>
                    </div>

                    <div className="foodGrid">

                        {(foodCategory === "all" || foodCategory === "et") && (
                            <div className="foodCard">

                                <div className="foodImage">
                                    🍖
                                </div>

                                <div className="foodBody">

                                    <div className="foodBadge">
                                        ⭐ Хит
                                    </div>

                                    <h2>Бешбармак</h2>

                                    <p>
                                        Кой эти, жука жалбырак, пияз соусу
                                    </p>

                                    <div className="foodBottom">

                                        <h3>100 c</h3>

                                        <button className="basketBtn" onClick={btn1}>
                                            + В корзину
                                        </button>

                                    </div>

                                    {mas1.map((item, index) => (
                                        <div key={index} className="basketInfo">

                                            <button className="basketSmall" onClick={() => del1(index)}>
                                                🗑
                                            </button>

                                            <button className="basketSmall" onClick={() => minus1(index)}>
                                                -
                                            </button>

                                            <span>{item.count}</span>

                                            <b>Добавлено ✅</b>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}

                        {(foodCategory === "all" || foodCategory === "manty") && (
                            <div className="foodCard">

                                <div className="foodImage">
                                    🥟
                                </div>

                                <div className="foodBody">

                                    <div className="foodBadge">
                                        ⭐ Хит
                                    </div>

                                    <h2>Манты</h2>

                                    <p>
                                        Тайбаш эти, пияз, куйрук май
                                    </p>

                                    <div className="foodBottom">

                                        <h3>120 c</h3>

                                        <button className="basketBtn" onClick={btn2}>
                                            + В корзину
                                        </button>

                                    </div>

                                    {mas2.map((item, index) => (
                                        <div key={index} className="basketInfo">

                                            <button className="basketSmall" onClick={() => del2(index)}>
                                                🗑
                                            </button>

                                            <button className="basketSmall" onClick={() => minus2(index)}>
                                                -
                                            </button>

                                            <span>{item.count}</span>

                                            <b>Добавлено ✅</b>

                                        </div>
                                    ))}

                                </div>
                                <br /><br /><br /><br /><br />
                                <br /><br />
                            </div>

                        )}

                    </div>
                </>
            )}

            {/*  КОРЗИНЫ */}
            {activeTab === "cart" && (
                <div className="cartPage">

                    <h1 className="cartTitle">Корзина</h1>
                    <p className="cartSub">
                        Здесь находятся выбранные блюда.
                    </p>

                    <div className="cartContainer">

                        {mas1.map((item, index) => (
                            <div key={index} className="cartItem">

                                <div className="cartLeft">

                                    <div className="cartIcon">
                                        🍖
                                    </div>

                                    <div className="cartInfo">
                                        <h3>{item.name}</h3>
                                        <p>{item.price} c × {item.count}</p>
                                    </div>

                                </div>

                                <div className="cartRight">

                                    <div className="cartCounter">

                                        <button className="counterBtn" onClick={() => minus1(index)}>
                                            -
                                        </button>

                                        <span>{item.count}</span>

                                        <button className="counterBtn" onClick={() => plus1(index)}>
                                            +
                                        </button>

                                    </div>

                                    <h2>{item.price} c</h2>

                                    <button className="deleteBtn" onClick={() => del1(index)}>
                                        ✕
                                    </button>

                                </div>

                            </div>
                        ))}

                        {mas2.map((item, index) => (
                            <div key={index} className="cartItem">

                                <div className="cartLeft">

                                    <div className="cartIcon">
                                        🥟
                                    </div>

                                    <div className="cartInfo">
                                        <h3>{item.name}</h3>
                                        <p>{item.price} c × {item.count}</p>
                                    </div>

                                </div>

                                <div className="cartRight">

                                    <div className="cartCounter">

                                        <button className="counterBtn" onClick={() => minus2(index)}>
                                            -
                                        </button>

                                        <span>{item.count}</span>

                                        <button className="counterBtn" onClick={() => plus2(index)}>
                                            +
                                        </button>

                                    </div>

                                    <h2>{item.price} c</h2>

                                    <button className="deleteBtn" onClick={() => del2(index)}>
                                        ✕
                                    </button>

                                </div>

                            </div>
                        ))}

                        <div className="summaryCard">

                            <div className="summaryRow">
                                <span>Сумма заказа</span>
                                <span>{total} c</span>
                            </div>

                            <div className="summaryRow">
                                <span>Доставка</span>
                                <span className="free">Бесплатно</span>
                            </div>

                            <div className="summaryRow">
                                <span>Итого</span>
                                <span>{total} c</span>
                            </div>

                            <button className="checkoutBtn">
                                Оформить заказ →
                            </button>

                        </div>

                    </div>

                </div>
            )}

            {activeTab === "orders" && (
                <div>
                    <h1>Заказдар</h1>
                    <p>Сиздин заказдардын тизмеси.</p>
                </div>
            )}

            {/*  ПРОФИЛь */}
            {activeTab === "profile" && (
                <div className="register">
                    <div className="registerCard">

                        <h1>Профиль</h1>
                        <p className="subtitle">Регистрируйтесь и заказывайте</p>

                        <label>ВАШЕ ИМЯ</label>
                        <div className="regis"><h1>{resultName}</h1></div>

                        <label>EMAIL</label>
                        <div className="regis"><h2>{resultEmail}</h2></div>

                        <label>ТЕЛЕФОН</label>
                        <div className="regis"><h2>{resultNumber}</h2></div>

                        <label>ПАРОЛЬ</label>
                        <div className="regis"><h4>{resultS}</h4></div>


                        <button onClick={() => setActiveTab("registration")} className="registerBtn">
                            Редактировать
                        </button>

                        <p className="loginText">
                            <span>Выйти</span>
                        </p>

                    </div>
                </div>
            )}


            <div className="bottom7">

                <div className={activeTab === "menu" ? "selected" : ""} onClick={() => setActiveTab("menu")}>
                    🍽<p>Меню</p>
                </div>
                <div className={activeTab === "cart" ? "selected" : ""} onClick={() => setActiveTab("cart")}>
                    🛒<small><small><small><small><small>    {mas1 && mas2 && [...mas1, ...mas2].map((item, index) => (
                        <small>✅</small>
                    ))}</small></small></small></small></small><p>Себет</p>
                </div>

                <div className={activeTab === "profile" ? "selected" : ""} onClick={() => setActiveTab("profile")}>
                    👤<p>Профиль</p>
                </div>
            </div>

        </div>
    );
}
export default Menutwo;
