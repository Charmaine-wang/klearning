import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledNavbar = styled.nav`
  background-color: white;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
  }
  .navbarItems {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .searchIcon {
    padding-right: 18px;
  }
`;

const Navbar = () => {
  return (
    <>
      <GlobalStyle />
      <StyledNavbar>
        <div className="navbar">
          <NavLink to="/">
            <img src="/images/LogoImage/logo.svg" alt="" />
          </NavLink>
          {/* <NavLink to="/course">Kurs</NavLink> */}
          <div className="navbarItems">
            <div className="searchIcon">
              <img src="/images/Ikoner/Nav/Sök.svg" alt="" />
            </div>
            <NavLink to="/profile">
              <img src="/images/Ikoner/Nav/Profil.svg" alt="" />
            </NavLink>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
};

export default withRouter(Navbar);
