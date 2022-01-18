import Navbar from './Navbar';
import Collections from "./Collections";
import Men from "./Men";
import Women from "./Women";
import About from "./About";
import Contact from "./Contact";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // JSON-like object to store the products in the cart
  const [cartProducts, setCartProducts] = useState([]);
  // Delete a product from the cart menu and update the state
  const deleteProduct = (product) => setCartProducts(cartProducts.filter(({ id }) => id !== product));
  // Manage the state for the id of a new product
  const [id, setId] = useState(0);
  // Add a product to the cart when a user clicks the 'Add to cart' button
  const addProduct = () => {
      setId(id + 1);

      cartProducts.push({
          id,
          name: "Fall Limited Edition Sneakers",
          price: 125.00,
          quantity: currentQuantity,
      });

      setCartProducts(cartProducts);
      setCurrentQuantity(0);
  };

  // Manages the currently selected product quantity state (user input)
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const updateQuantity = (value) => setCurrentQuantity(value);

  // State to manage whether cart menu is active
  const [isActive, setIsActive] = useState("inactive");
  const openCartMenu = () => setIsActive("active");
  const closeCartMenu = () => setIsActive("inactive");

  return (
    <BrowserRouter basename={ "/product-page" }>
      <div className="App">
        <Navbar openCartMenu={ openCartMenu } cartProducts={ cartProducts } />
        <Routes>
          <Route exact path="/" element={ <Collections closeCartMenu={ closeCartMenu } currentQuantity={ currentQuantity } updateQuantity={ updateQuantity } addProduct={ addProduct } cartProducts={ cartProducts } deleteProduct={ deleteProduct } isActive={ isActive } /> } />
          <Route exact path="/men" element={ <Men /> } />
          <Route exact path="/women" element={ <Women /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/contact" element={ <Contact /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
