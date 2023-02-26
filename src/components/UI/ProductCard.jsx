import React from "react";

import lariImg from "../../assets/images/lari.png";

import { motion } from "framer-motion";
import { Col } from "reactstrap";

import { Link, useNavigate } from "react-router-dom";

import "../../styles/product-card.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success("Added to Favorites");
  };

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  const link =()=>{
    scrollTop()
    navigate(`/shop/${item.id}`)
  }

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className={`product__item-${item.type.slice(4)}`} >
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.94 }} src={item.imgUrl} onClick={link}/>
        </div>
        <div className="info">
          <div className="product__info p-2">
            <h3 className="product__name" onClick={scrollTop}>
              <Link to={`/shop/${item.id}`}>{item.productName}</Link>
            </h3>
            <span>{item.type}</span>
          </div>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">
              <img src={lariImg} /> {item.price}
            </span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i class="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
