import React from "react";
import logo from "../assets/logo/Logo.svg";
import scrollIcon from "../assets/icon/scroll.svg";

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__wave" aria-hidden="true" />
      <div className="footer__content">
        <div className="footer__brand">
          <img src={logo} alt="Repa Retreat logo" className="footer__logo" />
          <div className="footer__address">
            <h4>Repa Retreat</h4>
            <p>Lamagaun-09, Pharping,</p>
            <p>Dakshinkali Municipality,</p>
            <p>Kathmandu</p>
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              f
            </a>
            <a href="#" aria-label="Instagram">
              ig
            </a>
            <a href="#" aria-label="YouTube">
              yt
            </a>
            <a href="#" aria-label="LinkedIn">
              in
            </a>
          </div>
        </div>

        <div className="footer__links">
          <a href="#">About Us</a>
          <a href="#">Accommodation</a>
          <a href="#">Repa Programs</a>
          <a href="#">Gallery</a>
          <a href="#">Workshops</a>
          <a href="#">Events</a>
          <a href="#">Contact us</a>
        </div>

        <div className="footer__contact">
          <h4>Join Repa Retreat</h4>
          <p>Phone: +977 984-9229999</p>
          <p>Business Cell: +977 984-9229999</p>
          <p>Email: repa.retreat@gmail.com</p>
        </div>

        <button
          type="button"
          className="footer__scroll"
          onClick={handleScrollTop}
          aria-label="Scroll to top"
        >
          <img src={scrollIcon} alt="" />
        </button>
      </div>

      <div className="footer__bottom">
        <span>© Copyright 2025 Repa Retreat</span>
        <span>Website by Imagio Creations</span>
      </div>
    </footer>
  );
};

export default Footer;
