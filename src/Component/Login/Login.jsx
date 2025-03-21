import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";

const Login = () => {
  const { setUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(); // Firebase auth instance

  const [error, setError] = useState(""); // State for error message

  const handleLogin = (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase login function
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user); // Update user state in AuthContext
        navigate(location?.state ? location.state : "/"); // Redirect after successful login
      })
      .catch((error) => {
        setError(error.message); // Set error message
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* Show error message if there's an error */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="form-control items-center mt-4">
            <button className="btn btn-wide btn-accent">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
