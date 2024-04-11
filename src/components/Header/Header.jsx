import React, { useRef, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/WLine-1.png";

import { Container, Row, Col } from "reactstrap";
import userIcon from "../../assets/images/user.png";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import useAuth from "../../custom-hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "favorites",
    display: "Favorites",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();

  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  
  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out");
        navigate("/home");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo" onClick={() => navigate("/home")}>
              <img src={logo} alt="logo" />
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <motion.li
                    className="nav__item"
                    key={index}
                    whileTap={{ scale: 1.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="nav_icons">
              <span className="cart__icon">
                <NavLink to="favorites">
                  <i class="ri-heart-line"></i>
                  <span className="badge">{totalQuantity}</span>
                </NavLink>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={logout} className="w-100">
                      Logout
                    </span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/login">Login</Link>
                      <Link to="/signup">Singup</Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
