import Left from "../Left/Left";
import Middle from "../Middle/Middle";
import Right from "../Right/Right";


const Main = () => {
    return (
        <div>
           <Left className="left col-span-3" ></Left> 
           <Middle className="col-span-6"></Middle>
           <Right className=" col-span-3"></Right>

        </div>
    );
};

export default Main;