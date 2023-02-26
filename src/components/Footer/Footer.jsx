import React from "react";
import "./footer.css";
import logo from "../../assets/images/WLine-1.png";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import scrollImage from "../../assets/images/scrollTop.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ScrollToTop
        smooth
        color="var(--primary-color)"
        viewBox="0 0 24 24"
        component={<img src={scrollImage} style={{ width: "30px" }} />}
      />
      <Container>
        <Row>
          <Col lg="4" md='6' className="mb-4" >
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              consequatur! Earum qui cupiditate quaerat veritatis perferendis
              ipsum ab saepe impedit?
            </p>
          </Col>

          <Col lg="2" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Types</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Red Wine</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">White Wine</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Rose Wine</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md='3' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/favorites">Favorites</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md='4' className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Tbilisi, Ureki 2</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+995 568-914-411</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p className="main-gmail">lasha.bodaveli11@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center mt-4 mb-5">
            <p className="footer__copyright">
              Copyright {year}
              <span className="footer__copyright-span">©</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
