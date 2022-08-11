import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage.js";
import {Logo} from "../components"


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
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
