import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledNavbar = styled.nav`
  background-color: white;
  
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
  }
  
  .navbarItems{
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
`;

const Navbar = () => {
  return (
    <>
      <GlobalStyle />
      <StyledNavbar>
        <div className="navbar">
          <NavLink to="/home"><img src="images/logo.svg" alt="" /></NavLink>
          {/* <NavLink to="/course">Kurs</NavLink> */}
          <div className="navbarItems">
            <img src="images/search.png" alt="" />
            <NavLink to="/profile"><img src="images/profile.svg" alt="" /></NavLink>
          </div>
        </div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
