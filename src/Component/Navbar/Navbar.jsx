import { Link, NavLink } from "react-router-dom";
import userimg from "../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user,  logout } = useContext(AuthContext);

  const links = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/career'>Career</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-white mt-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-black">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <img src={userimg} alt="User" className="rounded-full w-10 h-10" />
        <div className="text-black">{user && user?.email}</div> {/* Changed to displayName */}
        {user ? (
  <button className="btn bg-black text-white" onClick={ logout}>Log-Out</button>
) : (
  <Link to='/auth/login' className="btn bg-black text-white">Login</Link>
)}
      </div>
    </div>
  );
};

export default Navbar;
