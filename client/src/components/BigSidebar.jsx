import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./Navlinks";
import useAppContext from "../hooks/useAppContext";
import Logo from "../components/Logo";


const BigSidebar = () => {
  const { showSidebar } = useAppContext();

  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar;