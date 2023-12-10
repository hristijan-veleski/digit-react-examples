import { useEffect } from "react";
import { useState } from "react";

function getAllPrimeNumbersToNumber(number) {
    let primeNumbers = [];
    for (let i = 2; i <= number; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}

function PrimeCalculator() {
    const [number, setNumber] = useState(50);
    const [dark, setDark] = useState(false);

    const getPrimeNumbers = () => getAllPrimeNumbersToNumber(number);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333",
    };

    return (
        <div style={theme}>
            <input
                type="number"
                min={2}
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark((prev) => !prev)}>Toggle theme</button>
            <List getPrimeNumbers={getPrimeNumbers} />
        </div>
    );
}

function List({ getPrimeNumbers }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getPrimeNumbers());
        console.log("list updates");
    }, [getPrimeNumbers]);

    return (
        <ul>
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default PrimeCalculator;
