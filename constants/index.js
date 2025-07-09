export const navBars = [
  {
    id: 1,
    route: "/home",
    title: "Home",
  },
  {
    id: 2,
    route: "/contact",
    title: "Contact",
  },
  {
    id: 3,
    route: "/about",
    title: "About",
  },
  {
    id: 4,
    route: "/auth",
    title: "Sign Up",
  },
];
import Headphone from "../public/images/Category/Headphone.png";
import Computer from "../public/images/Category/Computer.png";
import SmartWatch from "../public/images/Category/SmartWatch.png";
import Camera from "../public/images/Category/Camera.png";
import Headphones from "../public/images/Category/Headphone.png";
import Gamepad from "../public/images/Category/Gamepad.png";
export const Category = [
  {
    id: 1,
    image: Headphone,
    title: "Phones",
  },
  {
    id: 2,
    image: Computer,
    title: "Computers",
  },
  {
    id: 3,
    image: SmartWatch,
    title: "SmartWatch",
  },
  {
    id: 4,
    image: Camera,
    title: "Camera",
  },
  {
    id: 5,
    image: Headphones,
    title: "HeadPhones",
  },
  {
    id: 6,
    image: Gamepad,
    title: "Gaming",
  },
];
import arrival from "../public/images/Arrival/arrival2.png";
import arrival1 from "../public/images/Arrival/arrival3.png";
import arrival2 from "../public/images/Arrival/arrival4.png";

export const Arrival = [
  {
    title: "Women’s Collections",
    description: "Featured women collections that give you another vibe.",
    image: arrival,
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers.",
    image: arrival1,
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    image: arrival2,
  },
];
import {
  Briefcase,
  CircleDollarSign,
  House,
  Instagram,
  Linkedin,
  PiggyBank,
  Twitter,
} from "lucide-react";
export const About = [
  {
    id: 1,
    icon: <House />,
    number: "10.5k",
    label: "Sellers active in our site",
  },
  {
    id: 2,
    icon: <CircleDollarSign />,
    number: "33k",
    label: "Monthly Product Sale",
  },
  {
    id: 3,
    icon: <Briefcase />,
    number: "45.5k",
    label: "Customers active in our site",
  },
  {
    id: 4,
    icon: <PiggyBank />,
    number: "25k",
    label: "Annual gross sale in our site",
  },
];
import image1 from "../public/images/about/Frame874.png";
import image2 from "../public/images/about/Frame875.png";
import image3 from "../public/images/about/Frame876.png";
export const teamMembers = [
  {
    id: 1,
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: image1,
    icon: {
      twitter: <Twitter size={15} />,
      instagram: <Instagram size={15} />,
      linkedin: <Linkedin size={15} />,
    },
  },
  {
    id: 2,
    name: "Emma Watson",
    role: "Managing Director",
    image: image2,
    icon: {
      twitter: <Twitter size={15} />,
      instagram: <Instagram size={15} />,
      linkedin: <Linkedin size={15} />,
    },
  },
  {
    id: 3,
    name: "Will Smith",
    role: "Product Designer",
    image: image3,
    icon: {
      twitter: <Twitter size={15} />,
      instagram: <Instagram size={15} />,
      linkedin: <Linkedin size={15} />,
    },
  },
];
