import { useState, useEffect } from "react";
import newProduct from "../../img/product_promotion.webp";
import anniversary from "../../img/celebrate.webp";
import delivery from "../../img/delivery.webp";
import arrowLeft from "../../img/arrow_left.png";
import arrowRight from "../../img/arrow_right.png";
import circleDot from "../../img/circle_dot.png";
import circleDotFull from "../../img/circle_dot_full.png";
import "./ImageSlider.css";

const bannerImgs = [anniversary, newProduct, delivery];

export default function ImageSlider() {
    const [imageIndex, setImageIndex] = useState(0);

    const prevImage = () => setImageIndex(prev => (prev - 1 + bannerImgs.length) % bannerImgs.length);
    const nextImage = () => setImageIndex(prev => (prev + 1) % bannerImgs.length);

    useEffect(() => {
        const regInterval = setInterval(nextImage, 10000);

        return () => clearInterval(regInterval);
    }, []);

    return (
        <div className="banner">
            <div className="imgs-container">
                {bannerImgs.map((img) => (
                    <img key={img} src={img} alt="Banner Image" className="banner-img"
                        style={{ translate: `${- 100 * imageIndex}%` }} />
                ))}
            </div>
            <div className="control-div div-left" onClick={() => prevImage()}>
                <img src={arrowLeft} alt="Arrow Left" className="control-arrow arrow-left" />
            </div>
            <div className="control-div div-right" onClick={() => nextImage()}>
                <img src={arrowRight} alt="Arrow Right" className="control-arrow arrow-right" />
            </div>
            <div className="control-btns">
                {bannerImgs.map((img, index) => (
                    <button key={index} type="button"
                        onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? (
                            <img src={circleDotFull} alt="Full Circle Dot" />
                        ) : (
                            <img src={circleDot} alt="Circle Dot" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}