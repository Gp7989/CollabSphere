import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();               // user login
    navigate("/dashboard"); // redirect
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label><br />
          <input type="email" placeholder="Enter email" />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password" placeholder="Enter password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;