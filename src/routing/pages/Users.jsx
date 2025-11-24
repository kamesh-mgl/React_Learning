// pages/Users.jsx
import { Link, Outlet } from "react-router-dom";

function Users() {
  const userList = [
    { id: 1, name: "Kamesh" },
    { id: 2, name: "Rahul" },
  ];

  return (
    <div>
      <h1>Users</h1>

      {/* navigation links to nested routes — link target is relative */}
      {userList.map(u => (
        <p key={u.id}><Link to={`${u.id}`}>{u.name}</Link></p>
      ))}

      {/* This is where child routes (like UserDetails) will render */}
      <Outlet />
    </div>
  );
}

export default Users;
