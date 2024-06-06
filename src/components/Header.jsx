import { useState, useEffect } from "react";
import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";
import iconLogo from "./assets/images/pngs/iconLogo.png";

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    setIsSmallScreen(mediaQuery.matches);
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <HeaderContainer>
      <Logo src={iconLogo} alt="logo" />
      <NavAnimation in={!isSmallScreen || isNavVisible} timeout={350}>
        <Nav>
          <NavLink to="/" onClick={toggleNav}>
            Главная
          </NavLink>
          <NavLink to="/abitryent" onClick={toggleNav}>
            Абитуриент
          </NavLink>
          <NavLink to="/about" onClick={toggleNav}>
            О нас
          </NavLink>
        </Nav>
      </NavAnimation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled(Box)(() => ({
  margin: "auto",
  position: "sticky",
  top: 0,
  maxHeight: "70px",
  width: "100%",
  display: "flex",
  gridTemplateAreas: "'logo menu nav'",
  backgroundColor: "#282c34",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  justifyContent: "space-between",
  padding: "10px 0 10px 10px",
  alignItems: "center",
}));

const Logo = styled("img")({
  gridArea: "logo",
  height: "70px",
});

const Nav = styled("nav")({
  display: "flex",
  gridArea: "nav",
  justifyContent: "space-around",
  marginRight: "4rem",
  gap: "4rem",
});

const NavAnimation = styled(Box)({
  color: "#fff",
  fontSize: "20px",
  fontWeight: "500",
  transition: " 0.5s",
  textDecoration: "none",
});

const NavLink = styled(Link)({
  color: "#fff",
  fontSize: "20px",
  fontWeight: 500,
  transition: "0.5s",
  textDecoration: "none",

  "&:hover": {
    transform: "scale(1.1)",
  },
});
