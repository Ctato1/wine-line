import React, { useState } from "react";
import "./personinfo.css";

import { Container, Row, Col } from "reactstrap";
import personData from "../assets/data/personData";

const PersonInfo = () => {
  const [personIndex, setPersonIndex] = useState(0);
  const nextSlide = () => {
    if (personIndex < personData.length - 1) {
      setPersonIndex((prev) => prev + 1);
    }else{
        setPersonIndex((prev) => prev = 0);
    }
  };
  const prevSlide = () => {
    if (personIndex === 0) {
      setPersonIndex((prev) => prev = personData.length - 1);
    }else{
        setPersonIndex((prev) => prev - 1);
    }
  };

  let visionPerson = personData[personIndex];

  

  return (
    <section className="services">
      <Container>
        <Row>
          <Col lg="12" className="text-center pt-4 pb-3">
            <h1 className="section__title">Winemakers</h1>
          </Col>
        

          <Row className="section">
            <Col lg="4" md="6">
              <div className="person">
                <img src={visionPerson.imgUrl} alt="" />
              </div>
            </Col>

            <Col lg="8" md="6">
              <div className="person-info">
                <h1>{visionPerson.name}</h1>
                <p>{visionPerson.information}</p>
                {
                    visionPerson.awards && visionPerson.awards.length >= 2? <ul className="person-info__awards">
                    <li>{visionPerson.awards[0].award}</li>
                    <li>{visionPerson.awards[1].award}</li>
                  </ul> : ''
                }
              </div>
            </Col>
            <button
              className="switch-btn next-btn"
              onClick={nextSlide}
            >
                
              <i class="ri-arrow-right-line"></i>
            </button>
            <button
              className="switch-btn prev-btn"
              onClick={prevSlide}
            >
              <i class="ri-arrow-left-line"></i>
            </button>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default PersonInfo;
