import { useState } from "react";

function Taxi() {

    const [page, setPage] = useState("splash");
    const [car, setCar] = useState({
        name: "Lexus R700",
        price: 9
    });

    const [priceall, setPriceAll] = useState(10000);
    const [selectedName, setSelectedName] = useState('Не выбрано');
    const [selectedName2, setSelectedName2] = useState('Не выбрано');
    const [result1, setResult1] = useState('');
    const [result2, setResult2] = useState('');
    const [result3, setResult3] = useState('');
    const [routePrice, setRoutePrice] = useState(0);
    const [message, setMessage] = useState("");


    const dollar = 87;
    const totalPrice = routePrice + (car.price * dollar);

    const handleButtonClick = () => {

        setResult1(selectedName);
        setResult2(selectedName2);


        const route = routes.find((item) =>
            item.from === selectedName &&
            item.to === selectedName2
        );


        if (route) {
            setRoutePrice(route.price);
        }
        if (route) {
            setRoutePrice(route.price);
            setResult3(route.price);
        }
    };


    const btnpay = () => {

        if (priceall >= totalPrice) {

            // списываем деньги
            setPriceAll(priceall - totalPrice);

            // сообщение
            setMessage("Оплата успешна ✅");

            // через 1 секунду переходим на booking
            setTimeout(() => {
                setPage("booking");
            }, 1000);

        } else {

            setMessage("Недостаточно денег ❌");

        }

    };


    const routes = [
        // Osh Bazaar
        {
            from: "Osh Bazaar",
            to: "Bishkek Center",
            price: 2000
        },
        {
            from: "Osh Bazaar",
            to: "Ala-Too Square",
            price: 2100
        },
        {
            from: "Osh Bazaar",
            to: "Airport Manas",
            price: 2500
        },
        {
            from: "Osh Bazaar",
            to: "Dordoi Market",
            price: 2200
        },


        // Asia Mall
        {
            from: "Asia Mall",
            to: "Bishkek Center",
            price: 500
        },
        {
            from: "Asia Mall",
            to: "Ala-Too Square",
            price: 400
        },
        {
            from: "Asia Mall",
            to: "Airport Manas",
            price: 1200
        },
        {
            from: "Asia Mall",
            to: "Dordoi Market",
            price: 900
        },


        // Mega Center
        {
            from: "Mega Center",
            to: "Bishkek Center",
            price: 600
        },
        {
            from: "Mega Center",
            to: "Ala-Too Square",
            price: 500
        },
        {
            from: "Mega Center",
            to: "Airport Manas",
            price: 1300
        },
        {
            from: "Mega Center",
            to: "Dordoi Market",
            price: 1000
        },


        // Railway Station
        {
            from: "Railway Station",
            to: "Bishkek Center",
            price: 300
        },
        {
            from: "Railway Station",
            to: "Ala-Too Square",
            price: 250
        },
        {
            from: "Railway Station",
            to: "Airport Manas",
            price: 900
        },
        {
            from: "Railway Station",
            to: "Dordoi Market",
            price: 700
        }
    ];






    return (
        <div className="body1">

            {page === "splash" && (
                <div className="splashTaxi">

                    <div className="logoTaxi">
                        <img src="https://thumbs.dreamstime.com/b/%D1%82%D0%B0%D0%BA%D1%81%D0%BE%D0%BC%D0%BE%D1%82%D0%BE%D1%80-%D0%BB%D0%BE%D0%B3%D0%BE%D1%81%D0%B0-12427092.jpg" alt="" />
                    </div>

                    <div className="textBoxTaxi">
                        <h1 className="titleTaxi">
                            Find a best <br />
                            Taxi ride
                        </h1>

                        <p className="descTaxi">
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </p>
                    </div>

                    <button className="googleBtnTaxi" onClick={() => setPage("home")}>
                        <div className="googleIconTaxi">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png" alt="" />
                        </div>

                        <span>Login with Google</span>
                    </button>

                    <button className="appleBtnTaxi" onClick={() => setPage("home")}>
                        <div className="appleIconTaxi">
                            <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" alt="" />
                        </div>

                        <span>Login with Apple</span>
                    </button>

                    <p className="signupTaxi">
                        Don't have an account?
                        <span> Sign Up</span>
                    </p>

                </div>
            )}

            {/* 2 страница */}
            {page === "home" && (
                <div className="homeTaxi">

                    <div className="mapTaxi">

                        <div className="gradientTaxi"></div>

                        <div className="headerTaxi">

                            <div className="menuTaxi">
                                ☰
                            </div>

                            <img
                                className="avatarTaxi"
                                src="https://i.pravatar.cc/80"
                                alt=""
                            />

                        </div>

                        <div className="circleTaxi"></div>

                        <div className="locationTaxi">
                            📍
                        </div>

                        <div className="gpsTaxi">
                            ⌖
                        </div>

                    </div>
                    <div className="bottomTaxi">

                        <h2 className="titleTaxiHome">
                            Where are you going today?
                        </h2>

                        <div className="inputBoxTaxi">

                            <span className="dotTaxi"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="white" />
                                <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#8F00FF" stroke-width="8" />
                            </svg>
                            </span>

                            <select onChange={(e) => setSelectedName(e.target.value)} className="selectTaxi">




                                <option value="Выберите">
                                    Выберите
                                </option>

                                <option value="Destination">
                                    Destination
                                </option>

                                <option value="Osh Bazaar">
                                    Osh Bazaar
                                </option>

                                <option value="Asia Mall">
                                    Asia Mall
                                </option >

                                <option value="Mega Center">
                                    Mega Center
                                </option>

                                <option value="Railway Station">
                                    Railway Station
                                </option>

                            </select>

                        </div>


                        <div className="lineTaxi"></div>


                        <div className="inputBoxTaxi">

                            <span className="pinTaxi"><svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.765 28C9.655 28 4.384 21.484 3.093 19.387C1.164 16.254 0 14.362 0 10.765C0 7.90994 1.13417 5.17182 3.153 3.153C5.17182 1.13417 7.90994 0 10.765 0C13.6201 0 16.3582 1.13417 18.377 3.153C20.3958 5.17182 21.53 7.90994 21.53 10.765C21.53 14.217 20.38 16.082 18.474 19.172L18.342 19.387C17.012 21.543 11.853 28 10.765 28ZM10.765 5.383C9.70034 5.383 8.6596 5.69871 7.77437 6.2902C6.88914 6.88169 6.19918 7.7224 5.79176 8.70601C5.38433 9.68963 5.27773 10.772 5.48543 11.8162C5.69314 12.8604 6.20582 13.8195 6.95864 14.5724C7.71147 15.3252 8.67063 15.8379 9.71483 16.0456C10.759 16.2533 11.8414 16.1467 12.825 15.7392C13.8086 15.3318 14.6493 14.6419 15.2408 13.7566C15.8323 12.8714 16.148 11.8307 16.148 10.766C16.1464 9.33883 15.5788 7.97056 14.5696 6.9614C13.5604 5.95223 12.1922 5.38459 10.765 5.383Z" fill="#F52D56" />
                            </svg>
                            </span>

                            <select className="selectTaxi" onChange={(e) => setSelectedName2(e.target.value)}>
                                <option value="Выберите">
                                    Выберите
                                </option>

                                <option value="Bishkek Center">
                                    Bishkek Center <b>1200</b>
                                </option>

                                <option value="Ala-Too Square">
                                    Ala-Too Square <b>2300</b>
                                </option>

                                <option value="Airport Manas">
                                    Airport Manas <b>1300</b>
                                </option>

                                <option value="Dordoi Market">
                                    Dordoi Market <b>2000</b>
                                </option>

                            </select>

                        </div>

                        <button className="loginBtn" onClick={handleButtonClick} >Сохранять</button>

                        <button
                            className="continueTaxi"
                            onClick={() => setPage("vehicle")}
                        >
                            Continue
                        </button>

                        <h3 className="recentTaxi">
                            Recent Places
                        </h3>



                    </div>

                </div>
            )}

            {page === "vehicle" && (
                <div className="vehicleTaxi">

                    <div className="mapTopTaxi">

                        <button
                            className="backTaxi"
                            onClick={() => setPage("home")}
                        >
                            ←
                        </button>

                        <div className="routeTaxi">
                            <div className="routeItemTaxi">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="white" />
                                    <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#8F00FF" stroke-width="8" />
                                </svg>

                                <p>{result1}</p>
                            </div>

                            <div className="routeLineTaxi"></div>

                            <div className="routeItemTaxi">
                                <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.765 28C9.655 28 4.384 21.484 3.093 19.387C1.164 16.254 0 14.362 0 10.765C0 7.90994 1.13417 5.17182 3.153 3.153C5.17182 1.13417 7.90994 0 10.765 0C13.6201 0 16.3582 1.13417 18.377 3.153C20.3958 5.17182 21.53 7.90994 21.53 10.765C21.53 14.217 20.38 16.082 18.474 19.172L18.342 19.387C17.012 21.543 11.853 28 10.765 28ZM10.765 5.383C9.70034 5.383 8.6596 5.69871 7.77437 6.2902C6.88914 6.88169 6.19918 7.7224 5.79176 8.70601C5.38433 9.68963 5.27773 10.772 5.48543 11.8162C5.69314 12.8604 6.20582 13.8195 6.95864 14.5724C7.71147 15.3252 8.67063 15.8379 9.71483 16.0456C10.759 16.2533 11.8414 16.1467 12.825 15.7392C13.8086 15.3318 14.6493 14.6419 15.2408 13.7566C15.8323 12.8714 16.148 11.8307 16.148 10.766C16.1464 9.33883 15.5788 7.97056 14.5696 6.9614C13.5604 5.95223 12.1922 5.38459 10.765 5.383Z" fill="#F52D56" />
                                </svg>
                                <p>{result2}</p>
                            </div>
                            Цена: {result3} сом

                            <big>Общая Сумма: {totalPrice}</big>
                        </div>

                    </div>

                    <div className="vehicleBottomTaxi">

                        <h2 className="titleVehicleTaxi">
                            Choose your ride
                        </h2>

                        <div
                            className={car.name === "Toyota Camry" ? "carCardActiveTaxi" : "carCardTaxi"}

                            onClick={() => setCar({
                                name: "Toyota Camry",
                                price: 7
                            })}
                        >

                            <img
                                src="https://manuals.plus/wp-content/uploads/2022/05/2022-Toyota-Camry-Hybrid-feature.webp"
                                className="carImgTaxi"
                                alt=""
                            />

                            <div className="carInfoTaxi">
                                <h3>Toyota Camry</h3>
                                <p>4 Person</p>
                            </div>

                            <h3 className="priceTaxi">
                                $7
                            </h3>

                        </div>



                        <div
                            className={car.name === "Lexus R700" ? "carCardActiveTaxi" : "carCardTaxi"}

                            onClick={() => setCar({
                                name: "Lexus R700",
                                price: 9
                            })}
                        >

                            <img
                                src="https://delivery.lcom.assetscs.lexus.com/adobe/assets/urn:aaid:aem:191b26ad-cbef-4100-bfb5-af075a81b08c/as/Lexus-LXH-smart-section-750x471-LEX-LXH-MY25-1171.02.png?width=750&length=471"
                                className="carImgTaxi"
                                alt=""
                            />

                            <div className="carInfoTaxi">
                                <h3>Lexus R700</h3>
                                <p>2-3 Person</p>
                            </div>

                            <h3 className="priceTaxi">
                                $9
                            </h3>

                        </div>



                        <div
                            className={car.name === "Mercedes W90" ? "carCardActiveTaxi" : "carCardTaxi"}

                            onClick={() => setCar({
                                name: "Mercedes W90",
                                price: 12
                            })}
                        >

                            <img
                                src="https://autogener.ru/img/cars_im/mercedes-benz/c-class/w202-1993-2001.png"
                                className="carImgTaxi"
                                alt=""
                            />

                            <div className="carInfoTaxi">
                                <h3>Mercedes W90</h3>
                                <p>4 Person</p>
                            </div>

                            <h3 className="priceTaxi">
                                $12
                            </h3>

                        </div>

                        <div className="paymentTaxi">

                            <button className="paymentBtnTaxi">
                                Payment Method
                            </button>



                        </div>

                        <button onClick={() => setPage("pay")} className="bookTaxi">
                            <span>
                                {car.name}
                            </span>

                            <span>
                                ${car.price}.00 →
                            </span>
                        </button>

                    </div>

                </div>
            )}


            {/* 4 страница */}
            {page === "pay" && (
                <div className="paymentPageTaxi">


                    <div className="paymentHeaderTaxi">

                        <button onClick={() => setPage("vehicle")} className="closePaymentTaxi">
                            ←
                        </button>

                        <h2>
                            Payment Method
                        </h2>

                    </div>



                    <h3 className="choosePaymentTaxi">
                        Choose Payment Method
                    </h3>




                    <div className="paymentCardTaxi activePaymentTaxi">

                        <div className="paymentLogoTaxi">
                            Be
                        </div>


                        <div className="paymentTextTaxi">

                            <h4>
                                BePay
                            </h4>

                            <p>
                                ${priceall}.00
                            </p>

                        </div>


                        <div className="radioTaxi">
                            ✓
                        </div>
                        <div className="paymentMessageTaxi">
                            {message}
                        </div>

                    </div><br /><br /><br />
                    <button
                        onClick={btnpay}
                        className="bookTaxi"
                    >
                        <span>
                            PAY
                        </span>

                        <span>
                            {totalPrice} сом →
                        </span>

                    </button><br />

                    <button onClick={() => setPage("booking")} className="bookTaxi">
                        <span>
                            NEXT
                        </span>


                    </button><br />





                </div>
            )}


            {/* 5 страница */}
            {page === "booking" && (
                <div className="bookingTaxi">

                    <div className="bookingMapTaxi">

                        <button onClick={() => setPage("pay")} className="bookingBackTaxi">
                            ←
                        </button>

                        <div className="bookingHeaderTaxi">

                            <div className="bookingMenuTaxi">
                                ☰
                            </div>

                            <img
                                src="https://img.magnific.com/premium-vector/russia-background-with-color-gradient_687236-171.jpg"
                                className="bookingAvatarTaxi"
                            />

                        </div>


                        <div className="pinStartTaxi">
                            🟣
                        </div>

                        <div className="pinEndTaxi">
                            <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.227 24.0005C8.276 24.0005 3.758 18.4155 2.651 16.6185C1 13.9325 0 12.3105 0 9.2275C0 6.78021 0.97218 4.43316 2.70267 2.70267C4.43316 0.97218 6.78021 0 9.2275 0C11.6748 0 14.0218 0.97218 15.7523 2.70267C17.4828 4.43316 18.455 6.78021 18.455 9.2275C18.455 12.1865 17.469 13.7845 15.836 16.4335L15.723 16.6175C14.582 18.4665 10.16 24.0005 9.227 24.0005ZM9.227 4.6145C8.31444 4.6145 7.42237 4.88511 6.6636 5.3921C5.90483 5.89909 5.31344 6.6197 4.96422 7.4628C4.615 8.3059 4.52362 9.23362 4.70166 10.1286C4.87969 11.0237 5.31913 11.8458 5.96441 12.4911C6.60969 13.1364 7.43182 13.5758 8.32685 13.7538C9.22188 13.9319 10.1496 13.8405 10.9927 13.4913C11.8358 13.1421 12.5564 12.5507 13.0634 11.7919C13.5704 11.0331 13.841 10.1411 13.841 9.2285C13.8397 8.0052 13.3531 6.83238 12.4881 5.96737C11.6231 5.10237 10.4503 4.61582 9.227 4.6145Z" fill="#F52D56" />
                            </svg>

                        </div>


                        <div className="routeLineMapTaxi" ></div>

                    </div>



                    <div className="bookingBottomTaxi">


                        <div className="driverTaxi">

                            <img
                                src="https://img.magnific.com/premium-vector/russia-background-with-color-gradient_687236-171.jpg"
                                className="driverImgTaxi"
                            />

                            <div>
                                <h3>Ben Stokes</h3>

                                <p>
                                    ⭐ 4.9
                                </p>
                            </div>


                            <button className="callTaxi">
                                📞
                            </button>

                        </div>




                        <div className="placeTaxi">


                            <div className="placeItemTaxi">

                                <div className="circlePurpleTaxi">

                                </div>


                                <div>
                                    <p>Pick Up Point</p>
                                    <h4>{result1}</h4>
                                </div>

                            </div>



                            <div className="dashTaxi"></div>



                            <div className="placeItemTaxi">


                                <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.227 24.0005C8.276 24.0005 3.758 18.4155 2.651 16.6185C1 13.9325 0 12.3105 0 9.2275C0 6.78021 0.97218 4.43316 2.70267 2.70267C4.43316 0.97218 6.78021 0 9.2275 0C11.6748 0 14.0218 0.97218 15.7523 2.70267C17.4828 4.43316 18.455 6.78021 18.455 9.2275C18.455 12.1865 17.469 13.7845 15.836 16.4335L15.723 16.6175C14.582 18.4665 10.16 24.0005 9.227 24.0005ZM9.227 4.6145C8.31444 4.6145 7.42237 4.88511 6.6636 5.3921C5.90483 5.89909 5.31344 6.6197 4.96422 7.4628C4.615 8.3059 4.52362 9.23362 4.70166 10.1286C4.87969 11.0237 5.31913 11.8458 5.96441 12.4911C6.60969 13.1364 7.43182 13.5758 8.32685 13.7538C9.22188 13.9319 10.1496 13.8405 10.9927 13.4913C11.8358 13.1421 12.5564 12.5507 13.0634 11.7919C13.5704 11.0331 13.841 10.1411 13.841 9.2285C13.8397 8.0052 13.3531 6.83238 12.4881 5.96737C11.6231 5.10237 10.4503 4.61582 9.227 4.6145Z" fill="#F52D56" />
                                </svg>



                                <div>
                                    <p>Destination</p>
                                    <h4>{result2}</h4>
                                </div>


                            </div>


                        </div>




                        <div className="tripTaxi">


                            <div>
                                <p>Car</p>
                                <h4> {car.name}</h4>
                            </div>


                            <div>
                                <p>Time</p>
                                <h4>15 min</h4>
                            </div>


                            <div>
                                <p>Price</p>
                                <h4>${car.price}.00 →</h4>
                            </div>



                        </div>




                        <button className="cancelTaxi">

                            <span className="plusCancelTaxi">
                                +
                            </span>

                            Cancel Your Booking

                        </button>



                    </div>


                </div>
            )}



        </div>
    );
}

export default Taxi;