import logo from "../../assets/logo.png"; 

const Header = () => {
    return (
        <>
            {/* Header Section */}
            <div className="flex flex-col justify-center items-center gap-4 py-4">
                <img className="w-[400px] text-white" src={logo} alt="Logo" />
                <h2 className="text-white">Journalism Without Fear or Favour</h2>
                <h2 className="text-white">
                    <span className="text-ba">Sunday,</span> November 27, 2025
                </h2>
            </div>

         
        </>
    );
};

export default Header;
