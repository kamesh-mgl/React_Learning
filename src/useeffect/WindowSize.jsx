import { useEffect, useState } from "react"

export default function WindowSize() {

    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);


    function handleresize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }
    useEffect(() => {

        document.title = `height:${height} width:${width}`;
    },[height,width])

    useEffect(() => {
        window.addEventListener("resize", handleresize)
        return ()=>
        {
            console.log("use effect")
            window.removeEventListener("resize", handleresize);
        }
    },[])
    console.log("component")
    console.log("component")


    return (
        <h1>height:{height} width: {width}</h1>

    )
}