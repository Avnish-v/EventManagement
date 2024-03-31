import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branches</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> mumbai{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Thane{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> Mulund
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> navi mumbai{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> andheri{" "}
          </a>
        </div>

        {/* <div className="box">
          <h3>quick links</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> service{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> about{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> gallery{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> price{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> reivew{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> contact{" "}
          </a>
        </div> */}

        <div className="box">
          <h3>contact info</h3>
          <a href="tel:+917507405700">
            {" "}
            <i className="fas fa-phone"></i> +917405700921{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> 1221346123{" "}
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            <i className="fas fa-envelope"></i> bajajsakshi37@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> shrupawar@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104{" "}
          </a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            {" "}
            <i className="fab fa-facebook-f"></i> facebook{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-twitter"></i> twitter{" "}
          </a>

          <a href="https://www.youtube.com/">
            <i className="fab fa-youtube"></i> youtube{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fab fa-linkedin"></i> linkedin{" "}
          </a>
        </div>
      </div>

      <head>
        <title>Google Map</title>
      </head>

      <p className="ml-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7535.387600362829!2d72.96347905390625!3d19.20857180000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93be793e5e5%3A0x35fb0c2d7bf642ca!2sPT-Vivana%20Mall%20Thane-Mumbai!5e0!3m2!1sen!2sin!4v1665383421030!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>
    </section>
  );
};

export default Footer;
