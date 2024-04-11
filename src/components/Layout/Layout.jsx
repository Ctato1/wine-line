import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import { useLocation } from "react-router-dom";
const Layout = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
    {location.pathname !== '/login' &location.pathname !== '/signup' &&<Footer/>}
    </>
  );
};

export default Layout;
