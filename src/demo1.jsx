import { createRoot } from "react-dom/client"
import "./App.css"
const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <div id="container">
            <img id="logo" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React log" width={40} />
            <h1 id="h1-tag">Fun facts about React</h1>
            <ul id="list">
                <li>It was released in 2013</li>
                <li>Was created by Jorder Walke</li>
                <li>Has well over 200k stars on github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </>
)
console.log(<h1>Hello world</h1>)