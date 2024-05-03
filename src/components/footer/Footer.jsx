import "./Footer.css";
import churchLogo from "../../assets/images/homlogonew.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_intro">
        <img src={churchLogo} className="churchLogo" id="footer_logo" />
        <p className="intro_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, nemo?
        </p>
        <div className="socials">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="footer_details">
        <div className="footer_contact">
          <p className="title">
            <i className="fa-solid fa-phone phone"></i> Contact
          </p>
          <a href="#" className="tel_number">
            +1 (234) 567 890 00
          </a>
          <a href="#" className="mail">
            agracechurch@gmail.com
          </a>
        </div>
        <div className="footer_address">
          <p className="title">
            <i className="fa-solid fa-location-dot location"></i> Address
          </p>
          <a href="#" className="addressname">
            323 New Valley Lane, Austin
          </a>
          <a href="#" className="time">
            07:00AM - 19:00 PM
          </a>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright&copy;2024 HOM</p>
    </footer>
  );
};

export default Footer;
