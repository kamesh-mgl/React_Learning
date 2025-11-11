import { useState } from "react"

export default function ColorPicker() {


    const [innercolor, setInnerColor] = useState("#786db0");
    const [outercolor,setOuterColor] = useState("#302f37")


    function handleinnercolor(event) {
        setInnerColor(event.target.value)
    }

    function handleoutercolor(event)
    {
        setOuterColor(event.target.value)
    }

    return (

        <div className="container" style={{ backgroundColor: outercolor }} >
            <div className="display" style={{ backgroundColor: innercolor }}>
                <h1>Selected color:</h1>
                <p>{innercolor}</p>
            </div>
            <div className="picker">
                <h2>Select inner color:</h2>
                <input value={innercolor} type="color" onChange={handleinnercolor} />
                <h2>Select outer color:</h2>
                <input value={outercolor} type="color" onChange={handleoutercolor} />
            </div>
        </div>
    )

}