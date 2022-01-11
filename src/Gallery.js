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
    // Object to display and change images on mobile
    const mobileImages = {
        imageList: ["image1", "image2", "image3", "image4"],
        imageIndex: 0,
    };

    const changeSelectedMobile = (e) => {
        // Get the arrow index of the newly selected image
        const direction = e.target.dataset.direction;
        const selectedImage = (direction === "right") ? mobileImages.imageIndex += 1 : mobileImages.imageIndex -= 1;

        // Ensure displayed arrow icons are consistent with newly selected image index
        if (selectedImage === 0) document.querySelector(".Gallery__selector-arrow-left").classList.add("hidden-arrow");
        else if (selectedImage === 3) document.querySelector(".Gallery__selector-arrow-right").classList.add("hidden-arrow");
        else document.querySelector(".hidden-arrow")?.classList.remove("hidden-arrow");

        // Display the newly selected image
        changeSelected(null, mobileImages.imageList[selectedImage]);
    }

    const changeSelected = (e, selectedImage) => {
        // Change image shown as selected
        document.querySelector(".show-selected").classList.remove("show-selected");
        document.querySelector(`[data-image-index=${selectedImage}]`).classList.add("show-selected");

        // Early exit if no event object passed
        if (!e) return;

        // Change selected thumbnail
        document.querySelector(".selected").classList.remove("selected");
        e.target.parentElement.classList.add("selected");
    }

    return (
        <section className="Gallery">
            <div className="Gallery__selected-image">
                <div className="Gallery__selector-arrow-left hidden-arrow" onClick={(e) => changeSelectedMobile(e)} data-direction={"left"}>
                    <img src={left} alt="left-arrow" data-direction={"left"} />
                </div>
                <div className="Gallery__selector-arrow-right" onClick={(e) => changeSelectedMobile(e)} data-direction={"right"}>
                    <img src={right} alt="right-arrow" data-direction={"right"} />
                </div>
                <img src={product1} alt="selected-image1" className="show-selected" data-image-index={"image1"} />
                <img src={product2} alt="selected-image2" data-image-index={"image2"} />
                <img src={product3} alt="selected-image3" data-image-index={"image3"} />
                <img src={product4} alt="selected-image4" data-image-index={"image4"} />
            </div>
            <div className="Gallery__selector-wrapper">
                <div className="Gallery__selector-container">
                    <div className="Gallery__selector selected" onClick={(e) => changeSelected(e, "image1")}>
                        <img src={product1Thumbnail} alt="selector1" />
                    </div>
                    <div className="Gallery__selector" onClick={(e) => changeSelected(e, "image2")}>
                        <img src={product2Thumbnail} alt="selector2" />
                    </div>
                    <div className="Gallery__selector" onClick={(e) => changeSelected(e, "image3")}>
                        <img src={product3Thumbnail} alt="selector3" />
                    </div>
                    <div className="Gallery__selector" onClick={(e) => changeSelected(e, "image4")}>
                        <img src={product4Thumbnail} alt="selector4" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Gallery;
