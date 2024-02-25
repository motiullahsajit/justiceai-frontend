import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import statue from "../../assets/images/statue.png";

import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

import legal1 from "../../assets/images/legal1.png";
import legal2 from "../../assets/images/legal2.png";
import legal3 from "../../assets/images/legal3.png";
import legal4 from "../../assets/images/legal4.png";

import Blog from "../../components/Blog/Blog";
import Attorneys from "../../components/Attorneys/Attorneys";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

import "./Home.scss";

const Home = () => {
  return (
    <main>
      <section className="hero-container">
        <div className="hero">
          <div>
            <h1>The Right Lawyer Make All The Difference. </h1>
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
              <div className="left">
                <img src={legal1} alt="legal" />
              </div>
              <div className="right">
                <h3>Legal Insights Hub</h3>
                <p>
                  Curious about how your legal journey unfolds today? Dive into
                  our Legal Insights Hub{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div className="left">
                <img src={legal2} alt="legal" />
              </div>
              <div className="right">
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
              <div className="left">
                <img src={legal3} alt="legal" />
              </div>
              <div className="right">
                <h3>Compatibility</h3>
                <p>
                  Curious about how your legal journey unfolds today? Dive into
                  our Legal Insights Hub{" "}
                </p>
              </div>
            </div>
            <div className="service">
              <div className="left">
                <img src={legal4} alt="legal" />
              </div>
              <div className="right">
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
      <Blog />
      <Attorneys />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
