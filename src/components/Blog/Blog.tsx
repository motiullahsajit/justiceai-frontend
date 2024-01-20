import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faComment,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";

const Blog = () => {
  return (
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
          <div className="goto-button"></div>
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
  );
};

export default Blog;
