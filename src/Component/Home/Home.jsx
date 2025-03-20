import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div className=" font-poppins">
          <Header></Header>
          <Nav></Nav>
          <Navbar></Navbar>
          <Main className="w-11/12 mx-auto p-5 grid md:grid-cols-12 gap-4"></Main>
        </div>
    );
};

export default Home;