import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage.js";
import { Logo } from "../components";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby thundercats activated charcoal hashtag pork belly art
            party. Tattooed man bun af biodiesel meditation asymmetrical
            shoreditch bitters hell of selfies gochujang squid williamsburg.{" "}
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
