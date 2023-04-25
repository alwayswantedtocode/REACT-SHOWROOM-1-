import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import SubMenu from "../NavBar/SubMenu";
import SlideMenu from "../NavBar/SlideMenu";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <SubMenu />
      <SlideMenu />

      <Outlet />

      <Footer />
    </>
  );
};
export default Home;
