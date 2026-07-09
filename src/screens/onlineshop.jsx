import { useState } from "react";


function Onlineshop() {


    let [sum1, setInp1] = useState(1);
    let [sum2, setInp2] = useState(2);
    let [sum3, setInp3] = useState(3);
    let [sum4, setInp4] = useState(4);

    let [result, setResult] = useState(0);

    const [mas1, setMas1] = useState([]);
    const [mas2, setMas2] = useState([]);
    const [mas3, setMas3] = useState([]);
    const [mas4, setMas4] = useState([]);


    function del1(index) {
        setMas1(mas1.filter((item, i) => i !== index));
    }

    function empty1() {
        setMas1([]);
    }

    function del2(index) {
        setMas2(mas2.filter((item, i) => i !== index));
    }

    function empty2() {
        setMas2([]);
    }

    function del3(index) {
        setMas3(mas3.filter((item, i) => i !== index));
    }

    function empty3() {
        setMas3([]);
    }

    function del4(index) {
        setMas4(mas4.filter((item, i) => i !== index));
    }

    function empty4() {
        setMas4([]);
    }


    function edit1(index) {
        let num = prompt("Введите новое количество:");

        if (num !== null) {
            let newMas = [...mas1];

            newMas[index].count = Number(num);

            setMas1(newMas);
        }
    }

    function edit2(index) {
        let num = prompt("Введите новое количество:");

        if (num !== null) {
            let newMas = [...mas2];

            newMas[index].count = Number(num);

            setMas2(newMas);
        }
    }

    function edit3(index) {
        let num = prompt("Введите новое количество:");

        if (num !== null) {
            let newMas = [...mas3];

            newMas[index].count = Number(num);

            setMas3(newMas);
        }
    }

    function edit4(index) {
        let num = prompt("Введите новое количество:");

        if (num !== null) {
            let newMas = [...mas4];

            newMas[index].count = Number(num);

            setMas4(newMas);
        }
    }



    function btn1() {
        setMas1([
            ...mas1,
            {
                name: "Office Chair",
                price: 55.99,
                count: Number(sum1),
            },
        ]);
    }

    function btn2() {
        setMas2([
            ...mas2,
            {
                name: "Sunglasses",
                price: 99.99,
                count: Number(sum2),
            },
        ]);
    }

    function btn3() {
        setMas3([
            ...mas3,
            {
                name: "Wireless Headphones",
                price: 349.01,
                count: Number(sum3),
            },
        ]);
    }

    function btn4() {
        setMas4([
            ...mas4,
            {
                name: "Wireless Headphones",
                price: 349.01,
                count: Number(sum4),
            },
        ]);
    }
    let total = 0;

    mas1.forEach((item) => {
        total += item.price * item.count;
    });

    mas2.forEach((item) => {
        total += item.price * item.count;
    });

    mas3.forEach((item) => {
        total += item.price * item.count;
    });

    mas4.forEach((item) => {
        total += item.price * item.count;
    });


    return (
        <div className="shop">



            <div className="cart">

                <div className="cart-header">
                    <i class="fa-solid fa-basket-shopping"></i> Shopping Cart
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {mas1.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => edit1(index)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => del1(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>

                                </td>
                            </tr>
                        ))}
                        {mas2.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => edit2(index)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => del2(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>

                                </td>
                            </tr>
                        ))}
                        {mas3.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => edit3(index)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => del3(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>


                                </td>
                            </tr>
                        ))}
                        {mas4.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>{item.count}</td>
                                <td>
                                    <button onClick={() => edit4(index)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => del4(index)}>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>


                            </tr>
                        ))}


                    </tbody>
                </table>

                <div className="bottom">
                    <h2>Total ${total.toFixed(2)}</h2>

                </div>

            </div>


            <div className="cards">

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />

                    <div className="info">
                        <h3>Office Chair</h3>
                        <p>$55.99</p>

                        <div className="action">
                            <input onChange={(e) => setInp1(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn1}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>Sunglasses</h3>
                        <p>$99.99</p>

                        <div className="action">
                            <input onChange={(e) => setInp2(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn2}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>Wireless Headphones</h3>
                        <p>$349.01</p>

                        <div className="action">
                            <input onChange={(e) => setInp3(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn3}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>Wireless Headphones</h3>
                        <p>$349.01</p>

                        <div className="action">
                            <input onChange={(e) => setInp4(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn4}>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}


export default Onlineshop;