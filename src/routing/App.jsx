// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route for /users */}
        <Route path="/" element={<Users />}>
          {/* Nested route for /users/:id (relative) */}
          <Route path=":id" element={<UserDetails />} />
          {/* Optional: index route renders at /users */}
          {/* <Route index element={<UsersHome />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
