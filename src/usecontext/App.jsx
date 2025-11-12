import { createContext, useState } from "react";
import Container from "./Container";
import Users from "./Users";

export const themecontext = createContext();

export default function App() {

    const [theme, setTheme] = useState("light");
    
    function handletheme() {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    console.log("app",theme)
    return (
        <themecontext.Provider value={theme}>
            <button onClick={handletheme}>Toggle theme</button>
            <h1>App</h1>
            <Container />
             <Users/>
        </themecontext.Provider>
    )
}