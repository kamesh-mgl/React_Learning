import { useEffect, useRef, useState } from "react"

export function Input()
{

    const[data,setData] = useState("");

    const inputref = useRef();

    useEffect(()=>
    {
        console.log("inside Rendered");
    })

    console.log("outside rendered")
    function handleclick()
    {
        console.log(inputref.current.value)
        inputref.current.focus();
        // inputref.current.style.backgroundColor = "blue"
    }

    return(
        <>
            <input onChange={(event)=> setData(event.target.value)} type="text" />
            <p>{data}</p> 
            <input ref={inputref} type="text" />
            <p>my name is {inputref.current?.value}</p>
            <button onClick={handleclick}>Click</button>
        </>
    )
}