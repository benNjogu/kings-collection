import { Routes, Route } from "react-router-dom";

import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;
