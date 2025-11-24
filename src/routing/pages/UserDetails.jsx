// pages/UserDetails.jsx
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); // gets ':id' from URL
  return (
    <div style={{ marginTop: 20 }}>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
      {/* you can fetch data by id here */}
    </div>
  );
}

export default UserDetails;
