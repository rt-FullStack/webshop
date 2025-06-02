import React from "react"; // Importerar React för att skapa komponenten
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa"; // Importerar ikoner från react-icons för sociala medier
import "../Footer.scss"; // Importerar CSS-stil för Footer-komponenten

//Komponentdefinition
const Footer = () => {
  //Stateless funktionskomponent (tar inga props)
  return (
    <footer className="site-footer">
      {" "}
      {/* Huvudinnehåll */}
      <div className="footer-content">
        {" "}
        {/* Tre sektioner */}
        <div className="footer-section">
          {" "}
          {/* Copyright-rad */}
          <h3>Om Oss</h3>
          <p>Din pålitliga webshop för kvalitetsprodukter sedan 2023.</p>
        </div>
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Email: info@minwebshop.se</p>
          <p>Telefon: 08-123 456 78</p>
        </div>
        <div className="footer-section">
          <h3>Följ Oss</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()}, Syedur Rahman. "Webshop – ett
          kursprojekt med React.js på Företagsuniversitetet.". Alla rättigheter
          reserverade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
