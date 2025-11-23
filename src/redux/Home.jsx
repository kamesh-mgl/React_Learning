import React, { useState } from 'react'
import { setUser } from './slice/userSlice';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    const [formdata, setFormdata] = useState({
        name: "",
        age: "",
        email: "",
        contact: "",
    });

    function handleinput(event) {
        const { name } = event.target;
        console.log(name)
        setFormdata((prev) => {
            return { ...prev, [name]: event.target.value }
        })

    }
    console.log(formdata)
    function addUser(event) {
        event.preventDefault();
        dispatch(setUser(formdata))
        setFormdata({
            name: "",
            age: "",
            email: "",
            contact: "",
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="">Name:</label>
                <input onChange={handleinput} value={formdata.name} name='name' type="text" placeholder='Enter name' /><br />

                <label htmlFor="">Age:</label>
                <input onChange={handleinput} value={formdata.age} name='age' type="number" placeholder='Enter age' /> <br />

                <label htmlFor="">Email:</label>
                <input onChange={handleinput} value={formdata.email} name='email' type="text" placeholder='Enter email' /> <br />

                <label htmlFor="">Contact:</label>
                <input onChange={handleinput} value={formdata.contact} name='contact' type="number" placeholder='Enter contact no' /> <br />

                <button onClick={addUser}>add</button>
            </form>
        </div>
    )
}

export default Home