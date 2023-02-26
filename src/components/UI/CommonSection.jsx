import React from "react";
import { Container } from "reactstrap";
import '../../styles/common-section.css'

const CommonSection = ({title,geoTitle}) => {
  return <section className="common__section">
    <Container className="text-center">
        <h1>{title}</h1>
        {geoTitle && <h4>{geoTitle}</h4>}
    </Container>
  </section>;
};

export default CommonSection;
