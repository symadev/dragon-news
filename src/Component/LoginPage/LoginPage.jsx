import { Outlet } from "react-router-dom";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";


const LoginPage = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar ></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default LoginPage;