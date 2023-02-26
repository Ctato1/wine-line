import React from "react";
import "./companyinfo.css";

import { Container, Row, Col } from "reactstrap";
import companyData from "../assets/data/companyData";

const CompanyInfo = () => {
  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="12" className="text-center pt-4 pb-3">
            <h1 className="section__title">Companies</h1>
          </Col>
          {companyData.map((item, index) => (
            <Row className="section" key={index}>
              <Col lg="6" md="6">
                <div className="service__item">
                  <img src={item.imgUrl} alt="" />
                </div>
              </Col>

              <Col lg="6" md="6">
                <div className="service__item-info">
                  <h1>{item.name}</h1>
                  <p className="mt-4 mb-3">
                    {item.description} <a href={item.video} className='fw-bold'>VIDEO</a>
                  </p>
                  <p>{item.address}</p>
                </div>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CompanyInfo;
