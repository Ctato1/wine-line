import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products";

import { Container, Row, Col } from "reactstrap";

import heroImg from "../assets/images/wine2.png";

import CompanyInfo from "../information/CompanyInfo";
import PersonInfo from "../information/PersonInfo";
import ProductsList from "../components/UI/ProductsList";

const Home = () => {
  const [dryRed, setDryRed] = useState([]);
  const [dryWhite, setDryWhite] = useState([]);
  const [dryRose, setDryRose] = useState([]);

  useEffect(() => {
    const dryRedWine = products.filter((item) => item.type === "dry red");
    const dryWhiteWine = products.filter((item) => item.type === "dry white");
    const dryRoseWine = products.filter((item) => item.type === "dry rose");

    setDryRed(dryRedWine);
    setDryWhite(dryWhiteWine);
    setDryRose(dryRoseWine);
  }, []);
  // console.log(dryRose.slice(0,6));

  const year = new Date().getFullYear();
  return (
    <Helmet title="Home">
      <motion.div
        initial={{width: 0,opacity:0,y:window.scrollTo(0,0)}}
        animate={{width:"100%",opacity:1,y:"0%"}}
        exit={{y:window.innerHeight, transition:{duration:0.1}}}
      >
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__subtitle">
                    Etno Okami Products in {year}
                  </p>
                  <h1>Etno Okami</h1>
                  <p className="fw-bold">KHASHMIS SAPERAVI</p>
                  <p className="fw-bold">SHAVKAPITO</p>
                  <p className="fw-bold">TAVKVERI</p>
                  <p className="fw-bold">CHINURI – GORULI MTSVANE</p>
                  <p className="fw-bold">RKATSITELI </p>
                  <motion.button className="buy__btn" whileTap={{ scale: 1.1 }}>
                    <Link to="/shop">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CompanyInfo />

        <section className="dry-red__wine">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="section__title text-center mb-5">
                  Dry Red Wine Type
                </h2>
              </Col>
              <ProductsList data={dryRed.slice(0, 6)} />
            </Row>
          </Container>
        </section>

        <section className="dry-white__wine">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="section__title text-center mb-5">
                  Dry White Wine Type
                </h2>
              </Col>
              <ProductsList data={dryWhite.slice(0, 6)} />
            </Row>
          </Container>
        </section>

        {/* <section className="dry-rose__wine">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="section__title text-center mb-5">
                Dry Rose Wine Type
              </h2>
            </Col>
            <ProductsList data={dryRose.slice(0,6)} />
          </Row>
        </Container>
      </section> */}

        <PersonInfo />
      </motion.div>
    </Helmet>
  );
};

export default Home;
