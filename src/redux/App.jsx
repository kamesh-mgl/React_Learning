import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import Users from './Users'
import About from './About'
import Contact from './Contact'
import {Provider} from 'react-redux'
import store from './store/userStore'



const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App