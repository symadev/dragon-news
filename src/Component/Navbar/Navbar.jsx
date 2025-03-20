import { Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png"


const Navbar = () => {

    const links =<>
     <li><NavLink to='/'>Home</NavLink></li>
     <li><NavLink to='/'>Career</NavLink></li>
     <li><NavLink to='/'>About</NavLink></li>
     
           
         
    
    </>
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
              className="menu menu-sm dropdown-content bg-base-100  text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-black">
          {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
            <img src={user} alt="" />
          <Link to ='/auth/login' className="btn bg-black text-white">Login</Link>
        </div>
      </div>
    );
};

export default Navbar;