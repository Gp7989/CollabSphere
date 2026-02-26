import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function MainLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link> |{" "}
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;