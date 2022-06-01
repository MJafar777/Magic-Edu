import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/MultipleLanguagesIcon.svg";
import "./langIcon.css";

const Languages = () => {
  return (
    <section>
      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>
            ADVANCE WEB DESIGN & DEVELOPMENT
          </h1>
          <img src={heroImg} alt="" className="hero__img" />
        </Row>
      </Container>
    </section>
  );
};

export default Languages;
