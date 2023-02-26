import React from "react";
import "../styles/favorites.css";
import lariImg from "../assets/images/lari.png";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Favorites = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Favorites">
      <motion.div
        initial={{width: 0,opacity:0,y:window.scrollTo(0,0)}}
        animate={{width:"100%",opacity:1,y:"0%"}}
        exit={{y:window.innerHeight, transition:{duration:0.1}}}
      >
        <CommonSection title="Favorites" />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                {cartItems.length === 0 ? (
                  <h2 className="fs-3 mt-5 mb-5">No item added</h2>
                ) : (
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                    </tbody>
                  </table>
                )}
              </Col>
              <Col lg="3" className="subtotal__section">
                <div>
                  <h6 className="d-flex align-items-center justify-content-between">
                    Subtotal
                    <span className="d-flex align-items-center">
                      <img
                        src={lariImg}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "5px",
                        }}
                      />
                      <span className="fs-4 fw-bold">{totalAmount}</span>
                    </span>
                  </h6>

                  <p className="fs-6 mt-2">
                    taxes and shipping will calculate in checkout
                  </p>
                  <div>
                    <motion.button
                      whileTap={{ scale: 1.04 }}
                      className="buy__btn w-100"
                    >
                      <Link to="/shop">Continue Shopping</Link>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 1.04 }}
                      className="buy__btn w-100 mt-4"
                    >
                      <Link to="/checkout">Checkout</Link>
                    </motion.button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </motion.div>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>
        <img
          src={lariImg}
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        {item.price}
      </td>
      <td>{item.quantity}px</td>
      <td whileTap={{ scale: 2 }}>
        <i class="ri-delete-bin-line" onClick={deleteProduct}></i>
      </td>
    </tr>
  );
};

export default Favorites;
