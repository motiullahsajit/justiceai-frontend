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

import legal1 from "../../assets/images/legal1.png";
import legal2 from "../../assets/images/legal2.png";
import legal3 from "../../assets/images/legal3.png";
import legal4 from "../../assets/images/legal4.png";

import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import people4 from "../../assets/images/people4.png";
import people5 from "../../assets/images/people5.png";
import people6 from "../../assets/images/people6.png";

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
      <section className="legal-services-container">
        <div className="legal-services">
          <h1>Legal Services</h1>
          <div className="flex justify-between">
            <div className="service">
              <div>
                <img src={legal1} alt="legal" />
              </div>
              <div>
                <h3>Legal Insights Hub</h3>
                <p>
                  Curious about how your legal journey unfolds today? Dive into
                  our Legal Insights Hub{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img src={legal2} alt="legal" />
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
          <div className="flex justify-between">
            <div className="service">
              <div>
                <img src={legal3} alt="legal" />
              </div>
              <div>
                <h3>Compatibility</h3>
                <p>
                  Curious about how your legal journey unfolds today? Dive into
                  our Legal Insights Hub{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img src={legal4} alt="legal" />
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
        </div>
      </section>
      <section className="blog-container">
        <div className="blog">
          <h1>Our Blog</h1>
          <div className="blog-card">
            <div className="info flex">
              <img src={blog1} alt="blog" />
              <div className="text">
                <h6>20th, January, 2023</h6>
                <h3>
                  Supreme Court To Hear <br /> Voter ID case on
                </h3>
                <div className="ratings">
                  <span>
                    <FontAwesomeIcon icon={faComment} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsDown} /> 14
                  </span>
                </div>
              </div>
            </div>
            <div className="goto-button">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
          <div className="blog-card">
            <div className="info flex">
              <img src={blog2} alt="blog" />
              <div className="text">
                <h6>20th, January, 2023</h6>
                <h3>
                  Supreme Court To Hear <br /> Voter ID case on
                </h3>
                <div className="ratings">
                  <span>
                    <FontAwesomeIcon icon={faComment} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsDown} /> 14
                  </span>
                </div>
              </div>
            </div>
            <div className="goto-button">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
          <div className="blog-card">
            <div className="info flex">
              <img src={blog3} alt="blog" />
              <div className="text">
                <h6>20th, January, 2023</h6>
                <h3>
                  Supreme Court To Hear <br /> Voter ID case on
                </h3>
                <div className="ratings">
                  <span>
                    <FontAwesomeIcon icon={faComment} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} /> 14
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faThumbsDown} /> 14
                  </span>
                </div>
              </div>
            </div>
            <div className="goto-button">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button>See All</button>
          </div>
        </div>
      </section>
      <section className="attorneys-container">
        <div className="attorneys">
          <h1>Meet Our Attorneys</h1>
          <p>
            Meet our experienced attorneys who are dedicated to providing
            top-notch legal representation.
            <br /> From criminal defense to civil litigation, our team has the
            knowledge and skills to handle any <br />
            case Get in touch with us today to schedule a consultation with one
            of our lawyers
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
