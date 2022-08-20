import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import useAppContext from "../hooks/useAppContext";
import Logo from "./Logo";




const Navbar = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button 
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button 
            className="btn" 
            type="button" 
            onClick={() => console.log("show log out")}
          >
            <FaUserCircle />
            brian
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button
              type="button" 
              onClick={() => console.log("logout user")} 
              className="dropdown-btn">logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar;