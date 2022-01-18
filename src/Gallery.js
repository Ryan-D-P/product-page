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
import { useState } from "react";

const Gallery = () => {
    // State to show/hide the lightbox gallery
    const [lightbox, setLightbox] = useState(false);

    // State to manage the index of the currently selected image
    const [imageIndex, setImageIndex] = useState(0);

    // Function to change the target gallery's displayed image using a directional arrow index
    const changeSelectedByArrow = (e, targetGallery="Gallery") => {
        // Get the arrow index of the newly selected image
        const direction = e.target.dataset.direction;
        const currentIndex = (direction === "right") ? imageIndex + 1 : imageIndex - 1;

        // Display the newly selected image to the target gallery 
        changeSelected(currentIndex, targetGallery);
    }

    // Function to change the target gallery's displayed image to the selected image
    const changeSelected = (currentIndex, targetGallery="Gallery") => {
        // Change the shown (target gallery) image to the selected thumbnail
        document.querySelector(`.${targetGallery}__selected-image .show-selected`).classList.remove("show-selected");
        document.querySelectorAll(`.${targetGallery}__image`)[currentIndex].classList.add("show-selected");

        // Ensure displayed arrow icons are consistent with newly selected image index
        const leftArrowDOM = document.querySelector(`.${targetGallery}__selector-arrow-left`), rightArrowDOM = document.querySelector(`.${targetGallery}__selector-arrow-right`);

        if (currentIndex === "0") {
            leftArrowDOM.classList.add("hidden-arrow");
            rightArrowDOM.classList.remove("hidden-arrow");
        }
        else if (currentIndex === "3") {
            rightArrowDOM.classList.add("hidden-arrow");
            leftArrowDOM.classList.remove("hidden-arrow");
        }
        else document.querySelector(`.${targetGallery}__selected-image .hidden-arrow`)?.classList.remove("hidden-arrow");
        
        // Change the currently selected thumbnail
        document.querySelector(`.${targetGallery}__selector-container .selected`).classList.remove("selected");
        document.querySelectorAll(`.${targetGallery}__selector`)[currentIndex].classList.add("selected");

        // Update the state of the image index
        setImageIndex(Number(currentIndex));
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
                <img src={ product1 } alt="selected-image1" className="Gallery__image show-selected" data-image-index={ "0" } />
                <img src={ product2 } alt="selected-image2" className="Gallery__image" data-image-index={ "1" } />
                <img src={ product3 } alt="selected-image3" className="Gallery__image" data-image-index={ "2" } />
                <img src={ product4 } alt="selected-image4" className="Gallery__image" data-image-index={ "3" } />
            </div>
            <div className="Gallery__selector-wrapper">
                <div className="Gallery__selector-container">
                    <div className="Gallery__selector selected" onClick={ () => changeSelected("0") } data-image-index={ "0" }>
                        <img src={ product1Thumbnail } alt="selector1" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("1") } data-image-index={ "1" }>
                        <img src={ product2Thumbnail } alt="selector2" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("2") } data-image-index={ "2" }>
                        <img src={ product3Thumbnail } alt="selector3" />
                    </div>
                    <div className="Gallery__selector" onClick={ () => changeSelected("3") } data-image-index={ "3" }>
                        <img src={ product4Thumbnail } alt="selector4" />
                    </div>
                </div>
            </div>

            {
                lightbox && <LightboxGallery setLightbox={ setLightbox } imageIndex={ imageIndex } changeSelectedByArrow={ changeSelectedByArrow } changeSelected={ changeSelected } left={ left } right={ right } product1={ product1 } product2={ product2 } product3={ product3 } product4={ product4 } product1Thumbnail={ product1Thumbnail } product2Thumbnail={ product2Thumbnail } product3Thumbnail={ product3Thumbnail } product4Thumbnail={ product4Thumbnail } />
            }

        </section>
    );
}
 
export default Gallery;
