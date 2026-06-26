import { useState } from "react";

function Calculator() {
    // let num1 = 0;
    // num1 = 5;
    let [num1, setNum1] = useState(0);
    // setNum1(5);
    const [num2, setNum2] = useState(0);
    let [result, setResult] = useState(0);
    let [name, setName] = useState('John');
    function plus() {
        setResult(Number(num1) + Number(num2));
        // setResult(parseFloat(num1) + parseFloat(num2));
    }
    function minus() {
        setResult(Number(num1) - Number(num2));
    }
    function changeName() {
        setName('Doe');
    }
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className="home1">
            <input type="text" onChange={(e) => setNum1(e.target.value)} />
            <br />
            <input type="text" onChange={(e) => setNum2(e.target.value)} />
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <p>Result: {result}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={changeName}>Change Name</button>
            <h2>{name}</h2>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            {/* <p>{num1}</p>
            <p>{num2}</p>
            <p>{name}</p> */} <br /><br />
           <a href="/currencyconvertor"> <button className="bg-info">Next</button></a>
        </div>
    )
}

export default Calculator;