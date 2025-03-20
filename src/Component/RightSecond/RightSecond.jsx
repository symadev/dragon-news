
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const RightSecond = () => {
    return (
         <div>
                    <h2 className="font-semibold mt-4">Find Us On</h2>
                        
                    <div>
                    <button className="btn justify-start btn-wide bg-white text-black"><FaFacebook></FaFacebook>Facebook</button>
                    <button className="btn justify-start btn-wide bg-white text-black"><FaTwitter></FaTwitter>Twitter</button>
                    <button className="btn justify-start  btn-wide bg-white text-black">< AiFillInstagram></AiFillInstagram>Instagram</button>
                    </div>
                </div>
    );
};

export default RightSecond;