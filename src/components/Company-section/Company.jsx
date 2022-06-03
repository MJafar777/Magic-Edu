import React from "react";
import { Container, Row, Col } from "reactstrap";

const Company = () => {
   return (
      <section>
         <Container>
            <Row>
               <Col lg="2" md="3" sm="4" xs="6">
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-apple-fill"></i> Apple
                  </h3>
               </Col>

               <Col lg="2" md="3" sm="4" xs="6">
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-google-fill"></i> Google
                  </h3>
               </Col>

               <Col lg="2" md="3" sm="4" xs="6">
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-facebook-fill"></i> Facebook
                  </h3>
               </Col>

               <Col lg="2" md="3" sm="4" xs="6">
                  <h3 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-amazon-fill"></i> Amazon
                  </h3>
               </Col>

               <Col lg="2" md="3" sm="4" xs="6">
                  <h3 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-netflix-fill"></i> Netflix
                  </h3>
               </Col>

               <Col lg="2" md="3" sm="4" xs="6">
                  <h2 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-microsoft-fill"></i> Microsoft
                  </h2>
               </Col>
            </Row>
         </Container>
      </section>
   );
};

export default Company;
