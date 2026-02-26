import { Link } from "react-router-dom";


function Register() {
  return (
    <div>
      <h2>Register Page</h2>
      <form>
        <div>
          <label>Name</label><br />
          <input type="text" placeholder="Enter name" />
        </div>

        <div>
          <label>Email</label><br />
          <input type="email" placeholder="Enter email" />
        </div>

        <div>
          <label>Password</label><br />
          <input type="password" placeholder="Enter password" />
        </div>

        <button type="submit">Create Account</button>
      </form>
      <p>
  Already have an account? <Link to="/login">Login</Link>
</p>
    </div>
  );
}

export default Register;