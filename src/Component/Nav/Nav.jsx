
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="navbar bg-white flex gap-10 items-center">
           {/* Navbar & Marquee Section */}
           <div className="navbar h-8 bg-white flex gap-10  items-center">
                <a className="btn bg-red-600 border-0 text-xl">Latest</a>
                <Marquee pauseOnHover={true} speed={100}>
                    <Link to="/">
                        <p className="text-black text-xl">
                            Match Highlights: Germany vs Spain — as it happen  Match Highlights: Germany vs Spain as...
                        </p>
                    </Link>
                </Marquee>
            </div>
      </div>
    );
};

export default Nav;