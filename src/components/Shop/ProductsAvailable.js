import Product1 from "../../assets/jpeg/ProductsAvailable/Available1.jpeg";
import Product2 from "../../assets/jpeg/Donneger2.jpg";
import Product3 from "../../assets/jpeg/ProductsAvailable/Available3.jpeg";
import Product4 from "../../assets/jpeg/tinymen.JPG";
import BlackBox2 from "../../assets/jpeg/ProductsAvailable/Blackbox2.jpeg";
import BlackBox3 from "../../assets/jpeg/ProductsAvailable/BlackBox3.jpeg";
import TonyMen2 from "../../assets/jpeg/ProductsAvailable/TinyMen2.jpeg";
import TonyMen3 from "../../assets/jpeg/ProductsAvailable/TinyMen3.jpeg";
import Treble from "../../assets/jpeg/treble.jpeg";
import A1 from "../../assets/jpeg/ProductsAvailable/A1.jpeg"; 
import A2 from "../../assets/jpeg/ProductsAvailable/A2.jpeg"; 
import A3 from "../../assets/jpeg/ProductsAvailable/A3.jpeg"; 
import DA from "../../assets/jpeg/ProductsAvailable/DonagerA.jpeg";
import DB from "../../assets/jpeg/ProductsAvailable/DonagerB.jpeg";
import color1 from "../../assets/jpeg/ProductsAvailable/color1.jpeg";
import color2 from "../../assets/jpeg/ProductsAvailable/color2.jpeg";
import color3 from "../../assets/jpeg/ProductsAvailable/color3.jpeg";
import color4 from "../../assets/jpeg/ProductsAvailable/color4.jpeg";
import bg1 from "../../assets/jpeg/ProductsAvailable/bg1.jpeg";
import bg2 from "../../assets/jpeg/ProductsAvailable/bg2.jpeg";


export const ProductsAvailable = {
  Blackbox: {
    image: BlackBox3,
    image5: color2,
    image6: color3,
    image7: color4,

    treble: Treble,
    title: "Blackbox",
    description:
      "Portable speaker delivering powerful sound in a compact design.",
    specifications: [
      "Power Output: 60W (AC Power) / 30W (Battery Mode)",
      "Battery Life: Up to 6.5 hours",
      "Materials: Natural wood, eco 3D-printed shell, natural foam",
      "Weight: 3kg",
      "Controls: Bass, Treble, Volume"
    ],
    price: 399,
    id: "blackbox",
  },

  Donager: {
    image3: DA,
    image: DB,
    image4: bg1,
    image5: bg2,
    treble: Treble,
    title: "Donager",
    description:
      "Built for artists and musicians who demand high-performance audio.",
    specifications: ["200W RMS", "10kg", "18hr Battery Life"],
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
      "Compact studio monitors with impressive 160W RMS output.",
    specifications: ["160W RMS", "3kg", "Powered via Outlet"],
    price: 499,
    id: "tinymen",
  },

  Aurora: {
    image: A1,
    image2: A2,
    image3: A3,
    treble: Treble,
    title: "Aurora",
    description:
      "A 60W speaker with an immersive LED light show for a full audiovisual experience.",
    specifications: [
      "60W Class D Amplifier",
      "LED Light Show",
      "Black Manta Fabric & 3D-Printed Shell (75% Natural Friendly)",
      "Bluetooth 5.0 Wireless",
      "Built-In Equalizer"
    ],
    price: 599, 
    id: "aurora",
  },
};
