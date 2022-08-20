import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import useAppContext from "../hooks/useAppContext";
import Logo from "./Logo";




const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button 
          className="toggle-btn"
          onClick={() => console.log("toggle sidebar")}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" onClick={() => console.log("show log out")}>
            <FaUserCircle />
            Brian
            <FaCaretDown />
          </button>
          <div className="dropdown show-dropdown">
            <button 
              onClick={() => console.log("logout user")} 
              className="dropdown-btn">logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar;