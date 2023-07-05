import { FaAngleRight, FaPause, FaPlay } from "react-icons/fa";
import FirstSlide from "./videoSlider/FirstSlide";
import SecondSlide from "./videoSlider/SecondSlide";
import ThirdSlide from "./videoSlider/ThirdSlide";
import FourthSlide from "./videoSlider/FourthSlide";
import FirthSlide from "./videoSlider/FirthSlide";
import SixthSlide from "./videoSlider/SixthSlide";

const videoData = [
  { id: 1, video: <FirstSlide /> },
  { id: 2, video: <SecondSlide /> },
  { id: 3, video: <ThirdSlide /> },
  { id: 4, video: <FourthSlide /> },
  { id: 5, video: <FirthSlide /> },
  { id: 6, video: <SixthSlide /> },
 
];

export default videoData;
