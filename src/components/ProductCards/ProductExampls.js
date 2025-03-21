import product1Image from "../../assets/jpeg/Product1d.jpeg";
import product2Image from "../../assets/jpeg/Product4.jpeg";
import product3Image from "../../assets/jpeg/tinymen.JPG";
import product4Image from "../../assets/jpeg/Product4a.jpeg";

export const ProductExamples = {
  Product1: {
    name: "Enigma",
    image: product4Image,
    title: "Unleash Endless Sound with Enigma Artifact",
    description:
      "Introducing Einigma Artifact, our premium Bluetooth 5.0 speaker crafted from oakwood. The design philosophy mainly revolves around creating products that are timeless, enduring, and sustainable. Each piece of oakwood is carefully repurposed to bring you an eco-friendly product that doesn’t compromise on quality or luxury.",
    specifications: {
      Battery_Life: "18 Hours",
      Material: "Oakwood",
      Power_Output: "100W RMS",
    },
    aditionalInfo: [
      "unique lighting system",
      "volume controls",
      "splash resistance",
    ],
  },
  Product2: {
    name: "Infinity",
    image: product2Image,
    title: "Discover Pure Sound with Inquiry",
    description:
      "Introducing Inquiry, our high-fidelity Bluetooth 5.0 speaker engineered for those love deisgn who seek clarity and precision. The Inquiry speaker is made from recycled oak wood, ensuring a luxurious finish while promoting eco-friendliness. Inquiry stands as a testament to our dedication to superior sound and sustainable design.",
    specifications: {
      Battery_Life: "18 Hours",
      Material: "Oak",
      Power_Output: "80W RMS",
    },
    aditionalInfo: ["unique lighting system", "Recycled floor material"],
  },
  Product3: {
    name: "Tinymen",
    image: product3Image,
    title: "Experience Power in a Compact Form with Tinymen",
    description:
      "Introducing Tinymen, our versatile Bluetooth 5.0 speaker designed for those who value portability without comprimising on performance. Despite its compact size, Tinymen delivers robust sound quality and is crafted from recycled Oak wood, embodying our commitment to sustainability and excellence.",
    specifications: {
      Material: "Eik",
      Power_Output: "2 x 50W RMS",
    },
    aditionalInfo: ["Ideal for musicians to test audio", "high precision"],
  },
  Product4: {
    name: "Blackbox",
    image: product1Image,
    title: "Portability Meets Power",
    description:
      "The Blackbox offers a perfect blend of portability and high-performance sound. Designed with high-quality Pinewood wood, it delivers exceptional audio quality within its small form factor.",
    specifications: {
      Battery_Life: "18 Hours",
      Material: "Pinewood",
      Power_Output: "50W RMS",
    },
    aditionalInfo: [
      "3D printed internal shell",
      "High quality durable fanbric cover",
    ],
  },
};
