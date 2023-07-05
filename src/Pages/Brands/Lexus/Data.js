import { BiCaretRight } from "react-icons/bi";
import RxHybrid from "../../../Images/LEXUS/RX-350-HYBRID/large-1.png";
import GX from "../../../Images/LEXUS/GX/large-1-removebg-preview.png";
import LX from "../../../Images/LEXUS/LX600/large-1-removebg-preview.png";
import RxHybrid1 from "../../../Images/LEXUS/RX-350-HYBRID/lexus-2023-overview-hero-rx500h.jpg";
import GX1 from "../../../Images/LEXUS/GX/lexus-2023-gx-460-front-angle-atomic-silver-l.jpg";
import LX1 from "../../../Images/LEXUS/LX600/Lexus-lx-gallery-thumbnail-5-desktop-1440x811-LEX-LXG-MY22-0007.png";
import IS from "../../../Images/LEXUS/IS/large-1__1.png";
import ES from "../../../Images/LEXUS/ES/large-1.png";
import LS from "../../../Images/LEXUS/LS/LS-WHITE1.png";
import IS1 from "../../../Images/LEXUS/IS/lexus-2023-is-300-awd-luxury-package-iridium-l.jpg";
import ES1 from "../../../Images/LEXUS/ES/2022_lexus_es_13_1600x1200.jpg";
import LS1 from "../../../Images/LEXUS/LS/Lexus-LS-gallery-1.png";
import RxHybrid2 from "../../../Images/LEXUS/RX-350-HYBRID/large-1.png"
import EsHybrid from "../../../Images/LEXUS/ES/large-1.png";
import UxHybrid from "../../../Images/LEXUS/UX-HYBRID/UX-WHITE-2.png";
import RxHybrid3 from "../../../Images/LEXUS/RX-350-HYBRID/lexus-2023-rx-350-awd-executive-iridium-l.jpg";
import EsHybrid1 from "../../../Images/LEXUS/ES/2022_lexus_es_16_1600x1200.jpg";
import UxHybrid1 from "../../../Images/LEXUS/UX-HYBRID/Lexus-UXh-gallery-desktop-1440x811-LEX-UXH-MY23-0069.png";  
{/* <BiCaretRight />, */}
      

const LexusCategory = [
  {
    id: 1,
    tab: "SUV",
    subcat: [
      {
        Image: RxHybrid,
        Name: "RX HYBRID",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: GX,
        Name: "GX",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: LX,
        Name: "LX",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: RxHybrid1,
        name: "RX HYBRID",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: GX1,
        name: " GX ",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit.",
      },
      {
        image: LX1,
        name: "LX",
        year: 2023,
        explore: "explore",
        quote: "Lexury re-imagined on wheels",
      },
    ],
  },
  {
    id: 2,
    tab: "SEDAN",
    subcat: [
      {
        Image: IS,
        Name: "IS",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: ES,
        Name: "ES",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },

      {
        Image: LS,
        Name: "LS",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: IS1,
        name: "IS",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: ES1,
        name: "ES",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },

      {
        image: LS1,
        name: "LS",
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
        Image: EsHybrid,
        Name: "ES",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },

      {
        Image: UxHybrid,
        Name: "UX-HYBRID",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
      {
        Image: RxHybrid2,
        Name: "RX-350-HYBRID",
        Explore: "Explore",
        ArrowIcon: <BiCaretRight />,
      },
    ],
    catImage: [
      {
        image: EsHybrid1,
        name: "ES HYBRID",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: UxHybrid1,
        name: "UX HYBRID",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
      {
        image: RxHybrid3,
        name: "RX HYBRID",
        year: 2023,
        explore: "explore",
        quote: "Lorem ipsum dolor, sit amet adipisicing elit",
      },
    ],
  },
];
export default LexusCategory;
