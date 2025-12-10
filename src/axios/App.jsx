import React from 'react'
import axios from './axios'

const App = () => {

    async function getapi(input) {

       const response = await fetch("https://dummyjson.com/recipes");
       const data = await response.json();
       console.log(data);   
        // const data = await axios.get(`/${input}`);
        // console.log(data)

    }
    return (
        <div>
            <h1>Api call</h1>
            <button onClick={getapi}>call api</button>
            <button onClick={()=>getapi("users")}>users</button>
            <button onClick={()=>getapi("comments")}>comments</button>
            <button onClick={()=>getapi("companies")}>companies</button>
        </div>
    )
}

export default App