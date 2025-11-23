import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './slice/userSlice';

const Users = () => {

  const users = useSelector((state)=>state.userInfo.users)
  console.log(users);

  const dispatch = useDispatch();

  function handledelete(index){
    dispatch(deleteUser(index))
  }
  return (
    <div className='data-con'>
      {
        users.map((ele,index)=>{
          return(
           <div className='user'>
            <h1>Name: {ele.name}</h1>
            <h2>Age: {ele.age}</h2>
            <h2>Email: {ele.email}</h2>
            <h2>Contact: {ele.contact}</h2>
            <button id='del-btn' onClick={()=>handledelete(index)}>Delete</button>
           </div>
          )
        })
      }
    </div>
  )
}

export default Users