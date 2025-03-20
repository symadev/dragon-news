import Left from "../Left/Left";
import Middle from "../Middle/Middle";
import Right from "../Right/Right";


const Main = () => {

    const Main = ({ className }) => {
        return <div className={`${className}`}>Main Content</div>;
    };
    
    return (
        <div className="grid grid-cols-12 p-10 gap-4">
        <div className="col-span-3">
            <Left />
        </div>
        <div className="col-span-6">
            <Middle />
        </div>
        <div className="col-span-3">
            <Right />
        </div>
    </div>
    );
};

export default Main;