import React from 'react'

const Dashboard = (props) => {
  return (
    <div>
        <h1>Welcome to Dashboard {props.name}</h1>
        <p>Verified user only</p>
    </div>
  )
}

export default Dashboard