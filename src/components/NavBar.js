import React from "react";
import {
    Link
} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return(
        <NavBarStyle className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/zodiac">Zodiac Signs</Link></li>
                <li><Link to="/love">Love Compatibility</Link></li>
                <li><Link to="/cocktail">Enjoy a Cocktail!</Link></li>
            </ul>
        </NavBarStyle>
    )
}

export default NavBar;

const NavBarStyle = styled.div`
  ul{
    list-style-type: none;
    margin: 5px;
    padding: 5px;
  }
  li {
    font-size: 20px;
    display: inline;
    margin: 10px;
    // a {
    //   color: ${(props) => props.theme.linkColor};
    //   :hover {
    //     color: ${(props) => props.theme.linkHover};
    //   }
    // }
  }
`;