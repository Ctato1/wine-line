import React, { useState } from "react";
import lariImg from "../assets/images/lari.png";

import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

import products from "../assets/data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { motion } from "framer-motion";

import "../styles/product-details.css";
import ProductsList from "../components/UI/ProductsList";

import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    category,
    type,
    year,
    geoName,
    region,
    manufacturer,
    alcohol,
    price,
    shortDesc,
    description,
  } = product;

  const relatedProducts = products.filter(
    (item) => item.type === type && item.id !== id
  );

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl: imgUrl,
        productName,
        price,
      })
    );
    toast.success('Added to Favorites')
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} geoTitle={geoName} />

      <section className="pt-0">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6" md='6'>
              <div className="product-image">
                <img src={imgUrl} alt={productName} />
              </div>
            </Col>
            <Col lg="6" md='6'>
              <div className="products__details">
                <h2>
                  {productName} {year}
                </h2>
                <p>{geoName}</p>

                <div className="d-flex align-items-center gap-5">
                  <p className="products__details-price">
                    <img src={lariImg} alt="" />
                    {price}
                  </p>
                  <span>
                    {type} {category}
                  </span>
                </div>

                <br />
                <p>{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Favourite
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                  <h1 className="active__line"></h1>
                </h6>
                <h6
                  className={`${tab === "det" ? "active__tab" : ""}`}
                  onClick={() => setTab("det")}
                >
                  Details
                  <h1 className="active__line"></h1>
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="det__content mt-5 ">
                  <div className="det__content-first">
                    <h5>Manufacturer</h5>
                    <p>{manufacturer}</p>
                    <br />
                    <h5>Product Name</h5>
                    <p>
                      {productName} ({geoName})
                    </p>
                    <br />
                    <h5>Year</h5>
                    <p>{year}</p>
                    <br />
                    <h5>Region</h5>
                    <p>{region}</p>
                  </div>
                  <div className="det__content-second">
                    <h5>Category</h5>
                    <p>
                      {type} {category}
                    </p>
                    <br />
                    <h5>Alcohol</h5>
                    <p>{alcohol}°</p>
                    <br />
                    <h5>Price</h5>
                    <p>{price}</p>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
