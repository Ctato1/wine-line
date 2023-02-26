import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Favorites from "../pages/Favorites";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import ProtectedRoute from "./ProtectedRoute";

import { AnimatePresence } from "framer-motion";

const Routers = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="favorites" element={<Favorites />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routers;
