import { useState, useEffect } from "react";
import logo from "../../assets/Logo.svg";
import hamburguerIcon from "../../assets/bars.png";
import closeIcon from "../../assets/xmark.svg";
import { StyledHeader } from "./styles";
import Buttons from "../ButtonsHeader/Buttons";
import Drop from "../ButtonsHeader/DropDown/Drop";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menuToggle" onClick={() => setShowMenu(!showMenu)}>
        <img src={showMenu ? closeIcon : hamburguerIcon} alt="menu toggle" />
      </div>
      {isMobile ? <Drop show={showMenu} /> : <Buttons />}
    </StyledHeader>
  );
};

export default Header;
