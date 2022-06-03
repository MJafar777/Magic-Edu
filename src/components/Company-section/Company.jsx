import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";

const Company = () => {
   return (
      <section>
         <Container>
            <div className="company">
               <div>
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-apple-fill"></i> Apple
                  </h3>
               </div>

               <div>
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-google-fill"></i> Google
                  </h3>
               </div>

               <div>
                  <h3 className=" d-flex align-items-center gap-1">
                     <i className="ri-facebook-fill"></i> Facebook
                  </h3>
               </div>

               <div>
                  <h3 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-amazon-fill"></i> Amazon
                  </h3>
               </div>

               <div>
                  <h3 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-netflix-fill"></i> Netflix
                  </h3>
               </div>

               <div>
                  <h2 className=" d-flex align-items-center gap-1">
                     {" "}
                     <i className="ri-microsoft-fill"></i> Microsoft
                  </h2>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default Company;
