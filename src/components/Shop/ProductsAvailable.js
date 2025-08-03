import Product1 from "../../assets/jpeg/ProductsAvailable/Available1.jpeg";
import Product2 from "../../assets/jpeg/Donneger2.jpg";
import Product3 from "../../assets/jpeg/ProductsAvailable/Available3.jpeg";
import Product4 from "../../assets/jpeg/tinymen.JPG";
import BlackBox2 from "../../assets/jpeg/ProductsAvailable/Blackbox2.jpeg"
import BlackBox3 from "../../assets/jpeg/ProductsAvailable/BlackBox3.jpeg"
import TonyMen2 from "../../assets/jpeg/ProductsAvailable/TinyMen2.jpeg"
import TonyMen3 from "../../assets/jpeg/ProductsAvailable/TinyMen3.jpeg"
import Treble from "../../assets/jpeg/treble.jpeg"

export const ProductsAvailable = {
  Blackbox: {
    image: Product1,
    image2: BlackBox2,
    image3: BlackBox3, 
    treble: Treble,
    title: "Blackbox",
    description:
      "Portable speaker, designed to produce maximum output in a small form factor",
    specifications: [
      "Power Output: 60W (AC Power) / 30W (Battery Mode)",
      "Battery Life: Up to 6.5 hours (varies by volume level)",
      "Materials: Natural wood, 3D-printed eco-materials, natural foam",
      "Weight: 3kg",
      "Controls: Bass, Treble, Volume"
    ],
    price: 399,
    id: "blackbox",
  },
  Donager: {
    image: Product2,
        treble: Treble,

    title: "Donager",
    description:
      "Perfect for artists and musicians looking to meet audio needs",
    specifications: [
      "200W RMS",
      "10kg",
      "18hr Battery Life",
    ],
    price: 1150,
    id: "donager",
  },
  TinyMen: {
    image: Product4,
    image2: TonyMen2,
    image3: TonyMen3, 
    treble: Treble,
    title: "TinyMen",
    description:
      "Studio monitor speakers with 2 x 80W maximum RMS power output",
    specifications: [
      "160W RMS",
      "3kg",
      "Connected to Outlet",
    ],
    price: 499,
    id: "tinymen",
  },
};

