import { v4 as uuid } from "uuid";

const navData = [
  {
    id: uuid(),
    icon: "fa-solid fa-house",
    description: "Home",
    link: "/portfolio_karan/#home",
  },
 
 {
    id: uuid(),
    icon: "fa-solid fa-address-card",
    description: "About",
    link: "/portfolio_karan/#about",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-code",
    description: "Projects",
    link: "/portfolio_karan/#project",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-toolbox",
    description: "Skills",
    link: "/portfolio_karan/#skill",
  },
  {
    id: uuid(),
    icon: "fa-solid fa-envelope",
    description: "Contact",
    link: "/portfolio_karan/#contact",
  },
];
export default navData;