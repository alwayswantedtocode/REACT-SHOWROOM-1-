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
  // {
  //   // id: 1,
  //   Video: "./images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4",
  //   video: <FirstSlide />,
  //   explore: "Explore A-Class ",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
  // {
  //   // id: 2,
  //   Video: "./images/BENZ/A-Class-Sedan/A-Class-SEDAN-Video-use.mp4",

  //   explore: "Explore Highlander",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
  // {
  //   // id: 3,
  //   Video: "./images/LEXUS/ES/Lexus-Es-use.mp4",

  //   explore: "Explore Es ",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
  // {
  //   // id: 4,

  //   Video: "./images/BENZ/Mercedes-Maybach/Maybach-use.mp4",
  //   explore: "Explore Maybach ",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
  // {
  //   // id: 5,

  //   Video: "./images/TOYOTAL/crown/Toyota-crown-use.mp4",
  //   explore: "Explore Crown ",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
  // {
  //   // id: 6,

  //   Video: "./images/LEXUS/LX600/Lx-Video-Edit-2-use.mp4",
  //   explore: "Explore Lx600 ",
  //   icon: <FaAngleRight />,
  //   play: <FaPlay />,
  //   pause: <FaPause />,
  // },
];

export default videoData;
