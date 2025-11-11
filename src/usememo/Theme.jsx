import { useState } from "react";

export default function Theme() {

    const [dark, setDark] = useState(false);

    const themestyle = {
        backgroundColor: dark ? "green" : "red", 
       
    }

    return (
        <div style={{height: "100px", width: "400px",  border: "2px",...themestyle}} >
            <input type="text" />
            <button onClick={() => setDark((dark) => !dark)}>Change Theme</button>
        </div>
    );
}