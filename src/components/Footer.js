import "../css/Footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="data">
          <h4>Dane kontaktowe:</h4>
          <p>telefon: +48 777 888 000</p>
          <p>e-mail: rent-cars@gmail.com</p>
          <p>adres: ul. Sportowa 13, Wrocław</p>
        </div>
        <div className="social">
          <p>Znajdziesz nas tutaj</p>
          <div className="social-media">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
