import { createRoot } from "react-dom/client"
import "/src/LoginForm/components/login.css"
import Navbar from "/src/LoginForm/components/navbar.jsx"
import Form from "./components/form"

const root = createRoot(document.getElementById('root'))

root.render(
    <>
        <Navbar />
        <Form />
    </>
)