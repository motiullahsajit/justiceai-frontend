import logo from "../../assets/images/logo.png";
import "./Loader.scss";
const Loader = () => {
  return (
    <main className="loader-container">
      <img src={logo} alt="justice" className="blip" />
    </main>
  );
};

export default Loader;
