import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";




const Login = () => {
  const { setUser, signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const auth = getAuth(); // Firebase auth instance

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;






    // Firebase login function
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user); // Update user state in AuthContext
        navigate("/"); // Redirect after successful login
      })
      .catch((error) => {
        alert(error.code);
        // You can show an error message to the user if needed
      });
  };






  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
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
          <div className="form-control items-center mt-6 ml-8">
            <button className="btn btn-wide btn-accent">Login</button>
          </div>
        </form>
        <p className="text-center">
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
