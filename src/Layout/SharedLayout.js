import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import SlideMenu from "../NavBar/SlideMenu";
import Footer from "../Footer/Footer";
// import Navigation from "../NavBar/Navigation";
const Home = () => {
  return (
    <>
      <Navbar />
      <SlideMenu />
      <Outlet />
      <Footer />
    </>
  );
};
export default Home;
