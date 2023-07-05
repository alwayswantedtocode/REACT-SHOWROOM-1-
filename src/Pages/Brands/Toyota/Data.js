import { BiCaretRight } from "react-icons/bi";
import Venza from "../../../Images/TOYOTAL/VENZA-HYBRID/1__1_-removebg-preview.png";
import Highlander from "../../../Images/TOYOTAL/HIGHLANDER/HIGHLANDER-white.png";
import Sequoia from "../../../Images/TOYOTAL/SEQUOIA/1-removebg-preview.png";
import Venza1 from "../../../Images/TOYOTAL/VENZA-HYBRID/VENZER-HYBRID-7.png";
import Highlander1 from "../../../Images/TOYOTAL//HIGHLANDER/HLD_MY23_0009_V001 (1).png";
import Sequoia1 from "../../../Images/TOYOTAL/SEQUOIA/SEQ_MY23_0015_V001_zQEIHWfZeZ.png";
import Corolla from "../../../Images/TOYOTAL/corolla/1-removebg-preview.png";
import Crown from "../../../Images/TOYOTAL/crown/34__1_-removebg-preview.png";
import Camry from "../../../Images/TOYOTAL/camry/different color/1__1_-removebg-preview.png";
import Corolla1 from "../../../Images/TOYOTAL/corolla/COR_MY21_0002_V01.png";
import Crown1 from "../../../Images/TOYOTAL/crown/CRW_MY23_0012_V001-1.png";
import Camry1 from "../../../Images/TOYOTAL/camry/CAM_MY20_0069_V004-1.png";
import CrownHybrid from "../../../Images/TOYOTAL/crown/34__1_-removebg-preview.png"
import VenzaHybrid from "../../../Images/TOYOTAL/VENZA-HYBRID/1__1_-removebg-preview.png";
import BZ4X from "../../../Images/TOYOTAL/bZ4X/1-removebg-preview.png";
import CrownHybrid1 from "../../../Images/TOYOTAL/crown/toyota-crown-2023-voici-les-prix.jpeg";
import VenzaHybrid1 from "../../../Images/TOYOTAL/VENZA-HYBRID/VENZER-HYBRID-1.png";
import BZ4X1 from "../../../Images/TOYOTAL/bZ4X/BZ4_MY23_0039_V001_1.png";

    //  BiCaretRight;     

const ToyotaCategory = [
  {
    id: 1,
    tab: "SUV",
    subcat: [
      {
        Image: Venza,
        Name: "Venza",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: Highlander,
        Name: "HIGHLANDER",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },

      {
        Image: Sequoia,
        Name: "Sequoia",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: Venza1,
        name: " Venza Hybrid",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: Highlander1,
        name: "Highlander",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: Sequoia1,
        name: "Sequoia",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
    ],
  },
  {
    id: 2,
    tab: "SEDAN",
    subcat: [
      {
        Image: Corolla,
        Name: "Corolla",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: Crown,
        Name: "Crown",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: Camry,
        Name: "Camry",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: Corolla1,
        name: "Corolla",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: Crown1,
        name: "Crown",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: Camry1,
        name: "Camry",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
    ],
  },

  {
    id: 3,
    tab: "ELECTRIC & HYBRID",
    subcat: [
      {
        Image: CrownHybrid,
        Name: "Crown Hybrid",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },

      {
        Image: VenzaHybrid,
        Name: "Venza Hybrid",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: BZ4X,
        Name: "bZ4X",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: CrownHybrid1,
        name: "Crown Hybrid",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },

      {
        image: VenzaHybrid1,
        name: "Venza Hybrid",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: BZ4X1,
        name: "BZ4X",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
    ],
  },
];
export default ToyotaCategory;
