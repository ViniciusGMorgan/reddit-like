import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsFillHexagonFill } from "react-icons/bs";

import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <section className="section-1">
        <div className="relative">
          <BsFillHexagonFill size="33" color="#e3472f" />
          <div className="text-icon">UX</div>
        </div>
        <div className="texts">
          <div className="text-title">The UX Library</div>
          <div className="text-description">
            Community curated design content & discussion
          </div>
        </div>
      </section>
      <section className="section-2">
        <FaFacebookSquare color="#3d599b" size="14"></FaFacebookSquare>
        <span className="icons">Facebook</span>
        <FaTwitterSquare color="#09aeef" size="14"></FaTwitterSquare>
        <span className="icons">Twitter</span>
        <div className="point">.</div>
        <span className="links">About</span>
        <span className="links">Contact</span>
        <span className="links">Sign in</span>
      </section>
    </footer>
  );
}
