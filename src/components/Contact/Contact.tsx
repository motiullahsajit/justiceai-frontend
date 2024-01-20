import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact">
        <h1>Contact US</h1>
        <h6>Reach OUt for Expert Legal Support</h6>
        <div className="flex justify-between mt-10">
          <div className="info-container">
            <div className="info">
              <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h3>Address</h3>
                <p>Dhaka Mirpur,12000</p>
              </div>
            </div>
            <div className="info">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <h3>Phone</h3>
                <p>01644859378</p>
              </div>
            </div>
            <div className="info">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <h3>Email</h3>
                <p>nomanabdullah2605@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form">
            <h3>Send Message</h3>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Type Your Message" />
            <button>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
