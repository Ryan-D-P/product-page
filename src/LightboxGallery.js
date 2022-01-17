import close from "./images/icon-close.svg";
import "./LightboxGallery.css";

const LightboxGallery = ({ changeSelectedMobile, changeSelected, left, right, product1, product2, product3, product4, product1Thumbnail, product2Thumbnail, product3Thumbnail, product4Thumbnail }) => {
    return (
        <div className="LightboxGallery">
            <div className="LightboxGallery__flex-container">
                <div className="LightboxGallery__flex-row LightboxGallery__close-row">
                    <div className="LightboxGallery__close-container">
                        <img src={ close } alt="close.svg" />
                    </div>
                </div>
                <div className="LightboxGallery__flex-row LightboxGallery__selected-image-row">
                    <div className="LightboxGallery__selected-image">
                        <div className="LightboxGallery__selector-arrow-left">
                            <img src={ left } alt="left-arrow" data-direction={ "left" } />
                        </div>
                        <div className="LightboxGallery__selector-arrow-right">
                            <img src={ right } alt="right-arrow" data-direction={ "right" } />
                        </div>
                        <img src={ product1 } alt="selected-image1" className="show-selected" data-image-index={ "image1" } />
                        <img src={ product2 } alt="selected-image2" data-image-index={ "image2" } />
                        <img src={ product3 } alt="selected-image3" data-image-index={ "image3" } />
                        <img src={ product4 } alt="selected-image4" data-image-index={ "image4" } />
                    </div>
                </div>
                <div className="LightboxGallery__flex-row LightboxGallery__gallery-selector-row">
                    <div className="LightboxGallery__gallery-selector">
                        <div className="LightboxGallery__selector-thumbnail" className={ "selected" }>
                            <img src={ product1Thumbnail } alt="product 1" />
                        </div>
                        <div className="LightboxGallery__selector-thumbnail">
                            <img src={ product2Thumbnail } alt="product 2" />
                        </div>
                        <div className="LightboxGallery__selector-thumbnail">
                            <img src={ product3Thumbnail } alt="product 3" />
                        </div>
                        <div className="LightboxGallery__selector-thumbnail">
                            <img src={ product4Thumbnail } alt="product 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LightboxGallery;