
import { useState } from "react"

export default function CurrentTime() {
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");


    function starttime()
    {
        setInterval(() => {
        time();
    }, 1000)
    }

    function time()
    {
         setHours(() => {
            return new Date().getHours();
        });

        setMinutes(() => {
            return new Date().getMinutes();
        })

        setSeconds(() => {
            return new Date().getSeconds();
        })
    }

    return(
        <div>
            <h1>{hours} : {minutes} : {seconds}</h1>
            <button onClick={starttime}>Start</button>
        </div>
    )

}