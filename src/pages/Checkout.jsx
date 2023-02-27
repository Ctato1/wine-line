import React, { useState } from "react";

import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import Loading from "../components/Loading/Loading";

import lariImg from "../assets/images/lari.png";

import "../styles/checkout.css";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const Checkout = () => {
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  const userDataSubmit = async (e) => {
    e.preventDefault();

    if (
      username === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      city === "" ||
      postal === ""
    ) {
      toast.error("Fill information");
      return;
    } else {
      setLoading(true);
      const year = new Date().getFullYear();
      const month = new Date().getMonth();
      const day = new Date().getDay();
      const minutes = new Date().getMinutes();
      const seconds = new Date().getSeconds();
      const getDate = `${month}-${day}-${minutes}-${seconds}`;
      const cod = Date.now();

      try {
        await setDoc(doc(db, "checkout", getDate + username), {
          uid: username + cod,
          buyer: username,
          email: email,
          phone: phone,
          address: address,
          city: city,
          postal: postal,
          products: `${
            cartItems.map((item) => item.productName + "-" + item.quantity) +
            ","
          }`,
          totalAmount,
          date: `
        year:${year} \n
        month: ${month} \n
        day: ${day} \n
        minutes: ${minutes} \n
        seconds: ${seconds}`,
        });
        setLoading(false);
        toast.success("The message has been sent successfully");
        navigate("/");
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    }
  };

  return (
    <Helmet title="Checkout">
      <motion.div
        initial={{ width: 0, opacity: 0, y: window.scrollTo(0, 0) }}
        animate={{ width: "100%", opacity: 1, y: "0%" }}
        exit={{ y: window.innerHeight, transition: { duration: 0.1 } }}
      >
        <CommonSection title="Checkout" />

        <section>
          {loading ? (
            <Loading loading={loading} />
          ) : (
            <Container>
              <Row>
                <Col lg="8">
                  <h6 className="mb-4 fw-bold">Billing Information</h6>
                  <Form className="billing__form" onSubmit={userDataSubmit}>
                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="number"
                        placeholder="Phone number"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Street address"
                        name="address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </FormGroup>

                    <FormGroup className="form__group">
                      <input
                        type="text"
                        placeholder="Postal Code"
                        name="postal"
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}
                      />
                    </FormGroup>
                  </Form>
                </Col>

                <Col lg="4">
                  <div className="checkout__cart">
                    <h6>
                      Total Qty:<span> {totalQty} items</span>
                    </h6>
                    <h6>
                      Subtotal:
                      <span>
                        <img
                          src={lariImg}
                          alt=""
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "10px",
                            marginRight: "2px",
                          }}
                        />
                        {totalAmount}
                      </span>
                    </h6>
                    <h6>
                      <span className="free__shipping">
                        Shipping: <br />
                        Free shipping
                      </span>
                      <span>
                        <img
                          src={lariImg}
                          alt=""
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "10px",
                            marginRight: "2px",
                          }}
                        />
                        0
                      </span>
                    </h6>

                    <h4>
                      Total Cost:
                      <span>
                        <img
                          src={lariImg}
                          alt=""
                          style={{
                            width: "20px",
                            height: "20px",
                            marginLeft: "10px",
                            marginRight: "2px",
                          }}
                        />
                        {totalAmount}
                      </span>
                    </h4>
                    <motion.button
                      className="buy__btn auth__btn w-100"
                      whileTap={{ scale: 1.04 }}
                      onClick={userDataSubmit}
                    >
                      Place an order
                    </motion.button>
                  </div>
                </Col>
              </Row>
            </Container>
          )}
        </section>
      </motion.div>
    </Helmet>
  );
};

export default Checkout;
