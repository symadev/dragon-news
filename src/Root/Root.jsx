import { Outlet } from "react-router-dom";
import Home from "../Component/Home/Home";


const Root = () => {
    return (
        <div>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;