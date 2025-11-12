import { useContext, useState } from "react"
import { themecontext } from "./App"

export default function Users() {

    const theme = useContext(themecontext)
     console.log("users",theme)
   

    const style = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white"
    }
   
    return (
        <>
            <h1 style={style}>Users</h1>
        </>
        // <h1>Users</h1>
    )
}