import { createRoot } from "react-dom/client"
import "./App.css"
import Child from "./props/Child.jsx"
import { FaUser } from "react-icons/fa";
const root = createRoot(document.getElementById('root'))


function Header() {

    return (
        <nav className="navbar">
            <img className="logo" src="/src/assets/images/react-logo.png" alt="" />
            <ul className="list">
                <li>Product</li>
                <li>Price</li>
                <li>About</li>
            </ul>
        </nav>
    )
}

let Content = function () {

    const UserData = [
        { name: "kamesh", age: 22 },
        { name: "rahul", age: 21 },
        { name: "aravind", age: 20 },
        { name: "rajesh", age: 19 },
    ];
    return (
        // <div className="container">
        //     <Child {...UserData[0]} />
        //     <Child {...UserData[1]} />
        //     <Child {...UserData[2]} />
        //     <Child {...UserData[3]} />
        // </div>
        <div className="container">
            <FaUser />
            {UserData.map((ele, i) => { return  (
                <Child key={ele.name} {...ele} />
            )})}
        </div>

    )
}

function Page() {
    return (
        <>
            <Header />
            <Content />
        </>
    )
}

root.render(
    <Page />
)
