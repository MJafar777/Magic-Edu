import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
   {
      display: "Home",
      url: "#home",
   },
   {
      display: "About Us",
      url: "#about",
   },

   {
      display: "Courses",
      url: "#courses",
   },

   {
      display: "Blog",
      url: "#",
   },
];

const footerInfoLinks = [
   {
      display: "Privacy Policy",
      url: "#",
   },
   {
      display: "Membership",
      url: "#",
   },

   {
      display: "Purchases Guide",
      url: "#",
   },

   {
      display: "Terms of Service",
      url: "#",
   },
];

const Footer = () => {
   return (
      <footer className="footer">
         <Container>
            <div className="footer__grid">
               <div>
                  <h2 className=" d-flex align-items-center gap-1">
                     <i className="ri-pantone-line"></i> MagicSoft
                  </h2>

                  <div className="follows">
                     <p className="mb-0">Follow us on social media</p>

                     <span>
                        {" "}
                        <a href="https://t.me/magicsoft_uz">
                           <i className="ri-telegram-line"></i>
                        </a>
                     </span>

                     <span>
                        {" "}
                        <a href="facebook.com">
                           <i className="ri-facebook-line"></i>
                        </a>
                     </span>

                     <span>
                        {" "}
                        <a href="facebook.com">
                           <i className="ri-instagram-line"></i>
                        </a>
                     </span>

                     <span>
                        {" "}
                        <a href="https://uz.linkedin.com/in/umid-rustamov">
                           <i className="ri-linkedin-line"></i>
                        </a>
                     </span>

                     <span>
                        {" "}
                        <a href="facebook.com">
                           <i className="ri-twitter-line"></i>
                        </a>
                     </span>
                  </div>
               </div>

               <div>
                  <h6 className="fw-bold">Explore</h6>
                  <ListGroup className="link__list">
                     {footerQuickLinks.map((item, index) => (
                        <ListGroupItem
                           key={index}
                           className="border-0 ps-0 link__item"
                        >
                           {" "}
                           <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                     ))}
                  </ListGroup>
               </div>

               <div>
                  <h6 className="fw-bold">Information</h6>
                  <ListGroup className="link__list">
                     {footerInfoLinks.map((item, index) => (
                        <ListGroupItem
                           key={index}
                           className="border-0 ps-0 link__item"
                        >
                           {" "}
                           <a href={item.url}>{item.display}</a>
                        </ListGroupItem>
                     ))}
                  </ListGroup>
               </div>

               <div>
                  <h6 className="fw-bold">Get in Touch</h6>

                  <p>
                     <b>Address:</b> Tashkent, Lutfiy street 41A
                  </p>
                  <p>
                     <b>Phone:</b> +99894 651-81-41{" "}
                  </p>
                  <p>
                     <b>Email:</b> magicsoft.uz@gmail.com
                  </p>
                  <p>
                     <b>Telegram:</b>{" "}
                     <a href="https://t.me/magicsoft_admin">@magicsoft_admin</a>
                  </p>
               </div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
