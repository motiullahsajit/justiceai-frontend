import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo2 from "../../assets/images/logo2.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer">
        <section className="top">
          <div>
            <img src={logo2} alt="justice" className="mb-5" />
            <p>
              Legal Assistance at Your <br /> Fingertips
            </p>
            <div className="social">
              <FontAwesomeIcon icon={faSquareXTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </div>
          <div>
            <ul>
              <li>Discover</li>
              <li>About Us</li>
              <li>Practice Area</li>
              <li>Case Result</li>
              <li>Attorneys</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Support</li>
              <li>Services</li>
              <li>FAQ</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3>
              Inform to inspire, <br /> with Legaltrend
            </h3>
            <div>
              <input type="text" placeholder="Email" />
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </section>
        <section className="bottom">
          <p>
            <FontAwesomeIcon icon={faCopyright} /> Justice.Al
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
