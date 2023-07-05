import { BiCaretRight } from "react-icons/bi";
import GLS from "../../../Images/BENZ/GLS-SUV/iris (2).png";
import Maybach from "../../../Images/BENZ/GLS-SUV/iris (2).png";
import EQB from "../../../Images/BENZ/EQB-SUV/EQB-SUV-WHITE (2).png";
import GLS1 from "../../../Images/BENZ/GLS-SUV/2022-GLS-SUV.jpg";
import Maybach1 from "../../../Images/BENZ/Mercedes-Maybach/2022-GLS-MAYBACH-SUV-GAL-005-R-FE-DR.jpg";
import EQB1 from "../../../Images/BENZ/EQB-SUV/2022-EQB-SUV-1.jpg";
import AClass from "../../../Images/BENZ/A-Class-Sedan/A-class-Sedan-white.png";
import EClass from "../../../Images/BENZ/E-Class-Sedan/iris-white (3).png";
import SClass from "../../../Images/BENZ/S-Class-Sedan/iris.png";
import AClass1 from "../../../Images/BENZ/A-Class-Sedan/A-class-Sedan-white.png";
import EClass1 from "../../../Images/BENZ/E-Class-Sedan/2022-E-SEDAN-5.jpg";
import SClass1 from "../../../Images/BENZ/S-Class-Sedan/2022-S-SEDAN-GAL-004-L-FE-DR.jpg";
import EQS1 from "../../../Images/BENZ/EQS-SEDAN/iris (2).png"
import EQS2 from "../../../Images/BENZ/EQS-SUV/EQS-SV_WHITE.png";
import EQBSUV from "../../../Images/BENZ/EQB-SUV/EQB-SUV-WHITE (2).png";
import EQS11 from "../../../Images/BENZ/EQS-SEDAN/EQS-Gallery_5-XL.jpg";
import EQS22 from "../../../Images/BENZ/EQS-SUV/2023-EQS-SUV-Gallery_010-XL.jpg";
import EQBSUV1 from "../../../Images/BENZ/EQB-SUV/Rose Gold.jpg";

// BiCaretRight;


    

const MercedesCategory = [
  {
    id: 1,
    tab: "SUV",
    subcat: [
      {
        Image: GLS,
        Name: "Mercedes-Benz GLS",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: "./images/BENZ/Mercedes-Maybach/Maybach-grey.png",
        Name: Maybach,
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: "./images/BENZ/EQB-SUV/EQB-SUV-WHITE (2).png",
        Name: EQB,
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: GLS1,
        name: "GLS",
        year: 2023,
        explore: "explore",
        quote: "Room to roam. Strength to share.",
      },
      {
        image: Maybach1,
        name: "Maybach GLS",
        year: 2023,
        explore: "explore",
        quote: "First-class travel on a higher plane.",
      },
      {
        image: EQB1,
        name: "EQB",
        year: 2023,
        explore: "explore",
        quote: "Forefront technology of tomorrow",
      },
    ],
  },
  {
    id: 2,
    tab: "SEDAN",
    subcat: [
      {
        Image: AClass,
        Name: "Mercedes-Benz A-Class",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: EClass,
        Name: "Mercedes-Benz E-Class",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: SClass,
        Name: "Mercedes-Benz S-Class",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: AClass1,
        name: "A-Class",
        year: 2023,
        explore: "explore",
        quote: "The value is in the virtues.",
      },
      {
        image: EClass1,
        name: "E-Class",
        year: 2023,
        explore: "explore",
        quote: "Irresistibly intelligent",
      },
      {
        image: SClass1,
        name: "S-Class",
        year: 2023,
        explore: "explore",
        quote: "The heritage of the future in motion",
      },
    ],
  },

  {
    id: 3,
    tab: "ELECTRIC & HYBRID",
    subcat: [
      {
        Image: EQS1,
        Name: "Mercedes-EQS-Sedan",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },

      {
        Image: EQS2,
        Name: "Mercedes-EQS-SUV",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: EQBSUV,
        Name: "Mercedes-EQB-SUV",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: EQS11,
        name: "EQS",
        year: 2023,
        explore: "explore",
        quote: "Innovation brings nature to a beautiful suface",
      },
      {
        image: EQS22,
        name: "EQS SUV",
        year: 2023,
        explore: "explore",
        quote: "Traveling in space. Come down to earth",
      },
      {
        image: EQBSUV1,
        name: "EQB",
        year: 2023,
        explore: "explore",
        quote: "Forefront technology of tomorrow",
      },
    ],
  },
];
export default MercedesCategory;
