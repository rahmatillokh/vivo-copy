import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./router/home/Home";
import Products from "./router/products/Products";
import Retail from "./router/retail/Retail";
import Support from "./router/support/Support";
import Funtouch from "./router/funtouch/Funtouch";
import Explore from "./router/explore/Explore";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/where-to-buy" element={<Retail />} />
        <Route path="/support" element={<Support />} />
        <Route path="/funtouch-os" element={<Funtouch />} />
        <Route path="/explore-vivo" element={<Explore />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
