import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Tentang Kami</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h5>Link Cepat</h5>
              <ul>
                <li>
                  <a href="/">Beranda</a>
                </li>
                <li>
                  <a href="/produk">Produk</a>
                </li>
                <li>
                  <a href="/kontak">Kontak</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Ikuti Kami</h5>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com">
                    <i
                      className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <p>Copyright © 2023 Your Company. All rights reserved.</p>
              <p>
                <a href="/privacy">Kebijakan Privasi</a> |{" "}
                <a href="/terms">Syarat & Ketentuan</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
