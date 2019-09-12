import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div `
    // display:flex;
    // width: 100%;
    // height: 200px;
    // position: fixed;

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .nav-links {
        display: flex;
      }
`

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="nav-links">
        <img src="logo1.png" alt="" />
        </div>
        <img src="logo1.png" alt="" />
        <img src="logo1.png" alt="" />
    </div>
    )
}

export default Navbar;