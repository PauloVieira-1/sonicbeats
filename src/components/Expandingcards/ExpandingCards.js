import "./cards.css";
import { useState } from "react";


const ExpandingCards = ({ images = [] }) => {

    const [active, setActive] = useState(0);

    return (
        <div className="container-box">
            {images.map((image, index) => (
                <div onClick={() => setActive(index)} className={active === index ? "panel active" : "panel"} style={{backgroundImage: `url(${image.image})`, backgroundSize: "cover"}}>
                    <h3 className="px-3 fw-bold mb-3 d-none d-md-block">{image.text}</h3>
                    <p className="fw-light px-3 mb-4 d-none d-md-block">{image.subtext}</p>
                    <h3 className="px-3 fw-bold mb-4 d-md-none">{image.text}</h3>
                    <p className="fw-light px-3 mb-3 py-0 d-md-none" >{image.subtext}</p>
                </div>
            ))}
        </div>
    );
    
}

export default ExpandingCards


