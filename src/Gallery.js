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
import LightboxGallery from "./LightboxGallery";
import { useState } from "react/cjs/react.development";

const Gallery = () => {
    // State to show/hide the lightbox gallery
    const [lightbox, setLightbox] = useState(false);

    // Object to display and change images using directional arrows
    const arrowImages = {
        imageList: ["image1", "image2", "image3", "image4"],
        imageIndex: 0,
    };

    // Function to change the target gallery's displayed image using a directional arrow index
    const changeSelectedByArrow = (e, targetGallery="Gallery") => {
        // Get the arrow index of the newly selected image
        const direction = e.target.dataset.direction;
        const selectedImage = (direction === "right") ? arrowImages.imageIndex += 1 : arrowImages.imageIndex -= 1;

        // Display the newly selected image to the target gallery 
        changeSelected(arrowImages.imageList[selectedImage], targetGallery);
    }

    // Function to change the target gallery's displayed image to the selected image
    const changeSelected = (selectedImage, targetGallery="Gallery") => {
        // Change the shown (target gallery) image to the selected thumbnail
        document.querySelector(`.${targetGallery}__selected-image .show-selected`).classList.remove("show-selected");
        document.querySelector(`.${targetGallery}__image[data-image-index=${selectedImage}]`).classList.add("show-selected");

        // Update the index of the currently selected image
        arrowImages.imageIndex = Number(selectedImage.slice(-1) - 1);

        // Ensure displayed arrow icons are consistent with newly selected image index
        const leftArrowDOM = document.querySelector(`.${targetGallery}__selector-arrow-left`), rightArrowDOM = document.querySelector(`.${targetGallery}__selector-arrow-right`);
        if (arrowImages.imageIndex === 0) {
            leftArrowDOM.classList.add("hidden-arrow");
            rightArrowDOM.classList.remove("hidden-arrow");
        }
        else if (arrowImages.imageIndex === 3) {
            rightArrowDOM.classList.add("hidden-arrow");
            leftArrowDOM.classList.remove("hidden-arrow");
        }
        else document.querySelector(`.${targetGallery}__selected-image .hidden-arrow`)?.classList.remove("hidden-arrow");

        // Change the currently selected thumbnail
        document.querySelector(`.${targetGallery}__selector-container .selected`).classList.remove("selected");
        document.querySelector(`.${targetGallery}__selector[data-image-index=${selectedImage}]`).classList.add("selected");
    }

    return (
        <section className="Gallery">
            <div className="Gallery__selected-image" onClick={ () => window.screen.width >= 1440 && setLightbox(true) }>
                <div className="Gallery__selector-arrow-left hidden-arrow" onClick={ (e) => changeSelectedByArrow(e) } data-direction={ "left" }>
                    <img src={ left } alt="left-arrow" data-direction={ "left" } />
                </div>
                <div className="Gallery__selector-arrow-right" onClick={ (e) => changeSelectedByArrow(e) } data-direction={ "right" }>
                    <img src={ right } alt="right-arrow" data-direction={ "right" } />
                </div>
                <img src={ product1 } alt="selected-image1" className="Gallery__image show-selected" data-image-index={ "image1" } />
                <img src={ product2 } alt="selected-image2" className="Gallery__image" data-image-index={ "image2" } />
                <img src={ product3 } alt="selected-image3" className="Gallery__image" data-image-index={ "image3" } />
                <img src={ product4 } alt="selected-image4" className="Gallery__image" data-image-index={ "image4" } />
            </div>
            <div className="Gallery__selector-wrapper">
                <div className="Gallery__selector-container">
                    <div className="Gallery__selector selected" onClick={ () => changeSelected("image1") } data-image-index={ "image1" }>
                        <img src={ product1Thumbnail } alt="selector1" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("image2") } data-image-index={ "image2" }>
                        <img src={ product2Thumbnail } alt="selector2" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("image3") } data-image-index={ "image3" }>
                        <img src={ product3Thumbnail } alt="selector3" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("image4") } data-image-index={ "image4" }>
                        <img src={ product4Thumbnail } alt="selector4" />
                    </div>
                </div>
            </div>

            {
                lightbox && <LightboxGallery setLightbox={ setLightbox } arrowImages={ arrowImages } changeSelectedByArrow={ changeSelectedByArrow } changeSelected={ changeSelected } left={ left } right={ right } product1={ product1 } product2={ product2 } product3={ product3 } product4={ product4 } product1Thumbnail={ product1Thumbnail } product2Thumbnail={ product2Thumbnail } product3Thumbnail={ product3Thumbnail } product4Thumbnail={ product4Thumbnail } />
            }

        </section>
    );
}
 
export default Gallery;
