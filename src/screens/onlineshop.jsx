import { useState } from "react";


function Onlineshop() {


    let [sum, setInp] = useState(0);
    let [result, setResult] = useState(0);
    let mas = [
        btn.forEach((todo, index) => {

            result.innerHTML += `
        <tr>
                        <td>Office Chair</td>
                        <td>$55.99</td>
                        <td>1</td>
                        <td><i class="fa-solid fa-trash"></i></td>
                    </tr>
        `;
        });
    ]


    function btn1() {


        mas.push({
            text: `${sum.value}`,
            completed: false
        });
        result();


    }

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

                        {result}


                    </tbody>
                </table>

                <div className="bottom">
                    <h2>Total $155.98</h2>

                    <button>Empty cart</button>
                </div>

            </div>


            <div className="cards">

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />

                    <div className="info">
                        <h3>Office Chair</h3>
                        <p>$55.99</p>

                        <div className="action">
                            <input onChange={(e) => setInp(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>Sunglasses</h3>
                        <p>$99.99</p>

                        <div className="action">
                            <input onChange={(e) => setInp(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>Wireless Headphones</h3>
                        <p>$349.01</p>

                        <div className="action">
                            <input onChange={(e) => setInp(e.target.value)} type="number" defaultValue="1" />
                            <button onClick={btn}>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="card6">
                    <img className="img" src="https://png.pngtree.com/png-clipart/20250608/original/pngtree-realistic-3d-shopping-cart-with-product-boxes-for-e-commerce-and-png-image_21139388.png" alt="" />


                    <div className="info">
                        <h3>External Hard Drive</h3>
                        <p>$89.99</p>

                        <div className="action">
                            <input onChange={(e) => setInp(e.target.value)} type="number" defaultValue="1" />
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}


export default Onlineshop;