import { faCircleArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lawyer from "../../assets/images/lawyer.png";

import "./LawyerCardSearch.scss";

const LawyerCardSearch = () => {
  return (
    <section className="lawyer-card-container flex justify-center">
      <div className="info flex items-center">
        <div className="img">
          <img src={lawyer} alt="lawyer" />
        </div>
        <div className="bio">
          <h4 className="flex items-center">
            Golam Moudud Ahmed <span></span>
          </h4>
          <h5>LLM</h5>
          <h6>Specialities</h6>
          <p>Criminal Lawyer</p>
        </div>
      </div>
      <div className="experience">
        <p className="color-secondary">Working in</p>
        <p className="bold color-primary">SM Associates, Dhaka</p>
        <p className="color-secondary">Total Experience</p>
        <p className="color-primary bold">2+ years</p>
        <div className="review flex justify-between">
          <div className="starts">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <a href="#" className="count">
            3071 reviews
          </a>
        </div>
      </div>
      <div className="price-container flex items-center">
        <div className="price">
          <div className="flex items-center">
            <h1>৳ 210</h1>
            <span>(incl.VAT)</span>
          </div>
          <p>Per Consultation</p>
        </div>
        <div className="flex justify-start">
          <button>
            <FontAwesomeIcon icon={faCircleArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LawyerCardSearch;
