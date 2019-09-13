import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledNavbar = styled.nav`
  // display:flex;
  // width: 100%;
  // height: 200px;
  // position: fixed;

  height: 50%;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    display: flex;
  }
`;

const Navbar = () => {
  return (
    <>
      {/* Om globalstyle ligger i navbaren kommer den finnas med på hela sidan */}
      <GlobalStyle />
      <StyledNavbar>
        <div className="navbar">
          <div className="nav-links">
            <img src="logo1.png" alt="" />
          </div>
          <img src="logo1.png" alt="" />
          <img src="logo1.png" alt="" />
          {/* NYTT, sorry om jag stökade till det för dig, men annars kan jag
          inte titta på sidan jag håller på med. /Linn */}
          <NavLink to="/home">Hem</NavLink>
          <NavLink to="/course">Kurs</NavLink>
          <NavLink to="/profile">Profil</NavLink>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
