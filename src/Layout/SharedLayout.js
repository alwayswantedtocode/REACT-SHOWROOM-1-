import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import SubMenu from "../NavBar/SubMenu";
import SlideMenu from "../NavBar/SlideMenu";
import Footer from "../Footer/Footer";
// import Navigation from "../NavBar/Navigation";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <SubMenu /> */}
      {/* <Navigation/> */}
      <SlideMenu />

      <Outlet />

      <Footer />
    </>
  );
};
export default Home;
