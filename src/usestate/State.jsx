import { createRoot } from "react-dom/client"
import { useEffect, useState } from "react";
import CurrentTime from "./CurrentTime";


function Count() {

    let [num, setNum] = useState(0);

    useEffect(() => {
        // console.log("inside", num);
        document.title = `count: ${num}`;

        return () => {
            console.log(num)
            console.log(num)
        }
    }, [num]);

    console.log("outside", num)
    function increment() {
        setNum(() => {
            return num + 1;
        });
    };
    function decrement() {
        setNum((prev) => {
            return prev - 1;
        });
    };

    return (
        <div>
            <h1>Count: {num}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Sub</button>
            <CurrentTime />
        </div>
    )
}

export default Count