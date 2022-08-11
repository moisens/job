import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../components";
import { useState, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  passwprd: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/*Input name*/}
        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        {/*Input email*/}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*Input password*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
