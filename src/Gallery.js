import left from "./images/icon-previous.svg";
import right from "./images/icon-next.svg";
import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import product1Thumbnail from "./images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "./images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "./images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "./images/image-product-4-thumbnail.jpg";
import "./Gallery.css";

const Gallery = () => {
    return (
        <section className="Gallery">
            <div className="Gallery__selected-image">
                <div className="Gallery__selector-arrow-left">
                    <img src={left} alt="left-arrow" />
                </div>
                <div className="Gallery__selector-arrow-right">
                    <img src={right} alt="right-arrow" />
                </div>
                <img src={product1} alt="selected" />
            </div>
            <div className="Gallery__selector-wrapper">
                <div className="Gallery__selector-container">
                    <div className="Gallery__selector selected">
                        <img src={product1Thumbnail} alt="selector1" />
                    </div>
                    <div className="Gallery__selector">
                        <img src={product2Thumbnail} alt="selector2" />
                    </div>
                    <div className="Gallery__selector">
                        <img src={product3Thumbnail} alt="selector3" />
                    </div>
                    <div className="Gallery__selector">
                        <img src={product4Thumbnail} alt="selector4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Gallery;
