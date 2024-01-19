import {
  faArrowUpRightFromSquare,
  faCircleCheck,
  faComment,
  faCopyright,
  faEnvelope,
  faLocationDot,
  faPhone,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import statue from "../../assets/images/statue.png";

import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

import "./Home.scss";

const Home = () => {
  return (
    <main>
      <section className="hero-container">
        <div className="hero">
          <div>
            <h1>
              The Right Lawyer Make All <br />
              The Difference.{" "}
            </h1>
            <p>
              We know how large objects will act, but things on a <br />
              small scale just do not act that way.
            </p>
            <button>Get Legal Advice</button>
          </div>
          <div>
            <img src={statue} alt="justice" />
          </div>
        </div>
      </section>
      <section className="client-count-container">
        <div className="client-count">
          <div>
            <h1>1500+</h1>
            <p>Happy Clients</p>
          </div>
          <div>
            <h1>1500+</h1>
            <p>Happy Clients</p>
          </div>
          <div>
            <h1>1500+</h1>
            <p>Happy Clients</p>
          </div>
          <div>
            <h1>1500+</h1>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>
      <section className="about-us-container">
        <div className="about-us">
          <h1>About Us</h1>
          <div className="info-div">
            <div className="left">
              <img src={about1} alt="about1" />
            </div>
            <div className="right">
              <div className="img-container">
                <img src={about2} alt="about2" />
                <img src={about3} alt="about3" />
              </div>
              <div className="text-container">
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>
                    Our team brings years of collective experience in different
                    legal fields, ensuring <br />
                    the information provided is reliable and comprehensive.
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>
                    Stay informed with the latest legal news, policy changes,
                    and case studies.
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <p>
                    Engage with others, share your stories, and seek advice in
                    our vibrant <br />
                    community forum.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="legal-services">
        <h1>Legal Services</h1>
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Legal Insights Hub</h3>
              <p>
                Curious about how your legal journey unfolds today? Dive into
                our Legal Insights Hub{" "}
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Justice Navigator</h3>
              <p>
                Curious about how your legal journey unfolds today? Dive into
                our Legal Insights Hub{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Compatibility</h3>
              <p>
                Curious about how your legal journey unfolds today? Dive into
                our Legal Insights Hub{" "}
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h3>Festival 2023</h3>
              <p>
                Curious about how your legal journey unfolds today? Dive into
                our Legal Insights Hub{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our-blog">
        <h1>Our Blog</h1>
        <div className="blog-card">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="info">
            <h6>20th, January, 2023</h6>
            <h3>
              Supreme Court To Hear <br /> Voter ID case on
            </h3>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
          <div className="goto-button">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
        <div className="blog-card">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="info">
            <h6>20th, January, 2023</h6>
            <h3>
              Supreme Court To Hear <br /> Voter ID case on
            </h3>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
          <div className="goto-button">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
        <div className="blog-card">
          <div className="img">
            <img src="" alt="" />
          </div>
          <div className="info">
            <h6>20th, January, 2023</h6>
            <h3>
              Supreme Court To Hear <br /> Voter ID case on
            </h3>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faThumbsUp} />
              <FontAwesomeIcon icon={faThumbsDown} />
            </div>
          </div>
          <div className="goto-button">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
        </div>
        <button>See All</button>
      </section>
      <section className="attorneys">
        <h1>Meet Our Attorneys</h1>
        <p>
          Meet our experienced attorneys who are dedicated to providing
          top-notch legal representation. From criminal defense to civil
          litigation, our team has the knowledge and skills to handle any case
          Get in touch with us today to schedule a consultation with one of our
          lawyers
        </p>
        <div className="people">
          <img src="" alt="" />
          <h3>Kevin Anderson</h3>
          <h5>Bankruptcy Law</h5>
          <div>
            <FontAwesomeIcon icon={faSquareXTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
      </section>
      <section className="contact">
        <h1>Contact US</h1>
        <h6>Reach OUt for Expert Legal Support</h6>
        <div>
          <div>
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3>Address</h3>
              <p>Dhaka Mirpur,12000</p>
            </div>
          </div>
          <div>
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h3>Phone</h3>
              <p>01644859378</p>
            </div>
          </div>
          <div>
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
      </section>
      <footer>
        <section className="top">
          <div>
            <img src="" alt="" />
            <p>
              Legal Assistance at Your <br /> Fingertips
            </p>
            <div>
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
      </footer>
    </main>
  );
};

export default Home;
