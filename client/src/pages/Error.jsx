import { Link } from "react-router-dom";
import notfoudImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={notfoudImg} alt="not-found-img" />
        <h3>That page does not exist!</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>

  )
}

export default Error