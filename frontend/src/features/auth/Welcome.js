import React from "react";
import { Link } from "react-router-dom";
import "./Welcomepage.css";
import prison_logo from "../../img/prison_logo6.png";

const Welcome = () => {
  return (
    <div className="main-container">
      <header className="site-header">
        <div className="pic-name">
          <img src={prison_logo} alt="side image" />
          <h1 className="brand-logo">Prison Management</h1>
        </div>

        <nav className="navigation">
          <Link to="/login" className="nav-item">
            Login
          </Link>
          <Link to="/Signup" className="nav-item">
            Sign Up
          </Link>
        </nav>
      </header>

      <section className="main-content">
        <div className="content-container">
          <h1 className="title-header">Prison Management System</h1>
          <p className="hero-description">
            <strong>OUR MISSION</strong>
            <br />
            PROVIDE A CONTINUUM OF SERVICES TO MEET THE NEEDS OF THOSE ENTRUSTED
            TO OUR CARE, CREATING A SAFE AND PROFESSIONAL ENVIRONMENT WITH THE
            OUTCOME OF REDUCED VICTIMIZATION, SAFER COMMUNITIES AND AN EMPHASIS
            ON THE PREMIUM OF LIFE.
          </p>
          <div className="button-container">
            <button className="btn-learn-more">
              <Link to="/LearnMore" className="btn-link">
                Learn More
              </Link>
            </button>

            <button className="btn-get-manual">
              <Link className="btn-link">Get Manual</Link>
            </button>
          </div>
        </div>
        <img src={prison_logo} alt="side image" className="image-logo" />
      </section>

      <div className="choice-section">
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Inmate Management
          </Link>
        </article>
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Staff Management
          </Link>
        </article>
        <article className="choice">
          <img src={prison_logo} alt="side image" />
          <p>
            victims services exist to aid individuals who have been victimized
            by inmates under the department's custody or supervision and notify
            victims before an inmate's release
          </p>
          <Link to="/login" className="link">
            Medical Management
          </Link>
        </article>
      </div>

      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-about">
            <h2 className="header">About PMS</h2>
            <p>
              4 Kilo is an advanced prison management system designed to
              streamline operations, ensure data security, and enhance
              administrative efficiency. Our mission is to provide innovative
              solutions for modern correctional facilities.
            </p>
          </div>
          <div class="footer-links">
            <h2 className="header">Quick Links</h2>
            <ul>
              <li>
                <Link to="/home" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div class="footer-contact">
            <h2 className="header">Contact Us</h2>
            <p>
              <strong>Email:</strong> support4kilo@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +251 123 456 789
            </p>
            <p>
              <strong>Address:</strong> Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2025 4 Kilo Prison Management System. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
