import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSection = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
                
            <div className="space-y-2">
                <button className="btn btn-wide"><FaGoogle></FaGoogle>Login With Google</button>
            <button className="btn btn-wide"><FaGithub></FaGithub>Login With Github</button>
            </div>
        </div>
    );
};

export default RightSection;