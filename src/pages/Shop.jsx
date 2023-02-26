import React, { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { motion } from "framer-motion";

import "../styles/shop.css";

import { Container, Row, Col } from "reactstrap";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const prod = products;
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "dry red") {
      const filteredProducts = products.filter(
        (product) => product.type === "dry red"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "dry white") {
      const filteredProducts = products.filter(
        (product) => product.type === "dry white"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "dry rose") {
      const filteredProducts = products.filter(
        (product) => product.type === "dry rose"
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === "all") {
      const filteredProducts = prod;
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const firstLetter = searchTerm.slice(0, 1);
    if (
      firstLetter === "ა" ||
      firstLetter === "ბ" ||
      firstLetter === "გ" ||
      firstLetter === "დ" ||
      firstLetter === "ე" ||
      firstLetter === "ვ" ||
      firstLetter === "ზ" ||
      firstLetter === "თ" ||
      firstLetter === "ი" ||
      firstLetter === "კ" ||
      firstLetter === "ლ" ||
      firstLetter === "მ" ||
      firstLetter === "ნ" ||
      firstLetter === "ო" ||
      firstLetter === "პ" ||
      firstLetter === "ჟ" ||
      firstLetter === "რ" ||
      firstLetter === "ს" ||
      firstLetter === "ტ" ||
      firstLetter === "უ" ||
      firstLetter === "ფ" ||
      firstLetter === "ქ" ||
      firstLetter === "ღ" ||
      firstLetter === "ყ" ||
      firstLetter === "შ" ||
      firstLetter === "ჩ" ||
      firstLetter === "ც" ||
      firstLetter === "ძ" ||
      firstLetter === "წ" ||
      firstLetter === "ჭ" ||
      firstLetter === "ხ" ||
      firstLetter === "ჯ" ||
      firstLetter === "ჰ"
    ) {
      const geoSearch = products.filter((product) =>
        product.geoName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProductsData(geoSearch);
    } else {
      const searchedProducts = products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProductsData(searchedProducts);
    }
  };

  return (
    <Helmet title="Shop">
      <motion.div
      initial={{width: 0,opacity:0,y:window.scrollTo(0,0)}}
      animate={{width:"100%",opacity:1,y:"0%"}}
      exit={{y:window.innerHeight, transition:{duration:0.1}}}
      >
        <CommonSection title="Products" />

        <section className="search__section">
          <Container>
            <Row>
              <Col lg="6" md="12" className="text-left">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option value="all">All Type</option>
                    <option value="dry red">Dry Red Wine</option>
                    <option value="dry white">Dry White Wine</option>
                    <option value="dry rose">Dry Rose Wine</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="12" className="text-center">
                <div className="search__box">
                  <input
                    id="search-bar"
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearch}
                  />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="product__section">
          <Container>
            <Row>
              {productsData.length === 0 ? (
                <h1 className="text-center fs-4 p-3">No Products are found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </motion.div>
    </Helmet>
  );
};

export default Shop;
