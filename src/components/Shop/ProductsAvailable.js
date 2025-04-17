import Product1 from "../../assets/jpeg/ProductsAvailable/Available1.jpeg";
import Product2 from "../../assets/jpeg/Donneger2.jpg";
import Product3 from "../../assets/jpeg/ProductsAvailable/Available3.jpeg";
import Product4 from "../../assets/jpeg/tinymen.JPG";

export const ProductsAvailable = {
  Blackbox: {
    image: Product1,
    title: "Blackbox",
    description:
      "Portable speaker, designed to produce maximum output in a small form factor",
    spec1: "100W RMS",
    spec2: "7kg",
    spec3: "12hr Battery Life",
    price: 399,
    id: "blackbox",
  },
  Donager: {
    image: Product2,
    title: "Donager",
    description:
      "Perfect for artists and musicians looking to meet audio needs",
    spec1: "200W RMS",
    spec2: "10kg",
    spec3: "18hr Battery Life",
    price: 1150,
    id: "donager",
  },
  TinyMen: {
    image: Product4,
    title: "TinyMen",
    description:
      "Studio monitor speakers with 2 x 80W maximum RMS power output",
    spec1: "80W RMS",
    spec2: "3kg",
    spec3: "Connected to Outlet",
    price: 499,
    id: "tinymen",
  },
};

