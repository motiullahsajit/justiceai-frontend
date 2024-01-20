import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";
import people5 from "../../assets/images/people5.png";
import people6 from "../../assets/images/people6.png";
import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Attorneys = () => {
  return (
    <section className="attorneys-container">
      <div className="attorneys">
        <h1>Meet Our Attorneys</h1>
        <p>
          Meet our experienced attorneys who are dedicated to providing
          top-notch legal representation. From criminal defense to civil
          litigation, our team has the knowledge and skills to handle any case
          Get in touch with us today to schedule a consultation with one of our
          lawyers
        </p>
        <div className="peoples flex justify-between mt-10">
          <div className="people">
            <img src={people1} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
          <div className="people">
            <img src={people2} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
          <div className="people">
            <img src={people3} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>
        <div className="peoples flex justify-between">
          <div className="people">
            <img src={people4} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
          <div className="people">
            <img src={people5} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
          <div className="people">
            <img src={people6} alt="attorneys" />
            <div className="info">
              <h3>Kevin Anderson</h3>
              <h5>Bankruptcy Law</h5>
              <div className="social">
                <FontAwesomeIcon icon={faSquareXTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attorneys;
