import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Navbar.css';
import logo from '../static/img/001-nice.png';
import ThemeContext from '../context/ThemeProvider';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const { isOriginal, toggle } = useContext(ThemeContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])


    window.addEventListener('resize', showButton);
    return(

        <NavBarStyle className={isOriginal ? 'original-navbar' : 'secondary-navbar'}>

            <NavBarContainer data-testid="navbar">


                <div  className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='navbar-logo' src={logo} alt={"logo"}/>
                </Link>
            <ul  data-testid="navbar" className={click ? 'nav-menu active' : 'nav-menu'}>

               <NavItem>
                   <Link to="/"  onClick={closeMobileMenu}  className='nav-links'>
                       <i className="fas fa-home" />
                   </Link>
               </NavItem>
                <NavItem>
                    <Link to="/zodiac"  onClick={closeMobileMenu}  className='nav-links'>Zodiac Signs</Link>
                </NavItem>
                <NavItem>
                    <Link to="/love" onClick={closeMobileMenu}  className='nav-links'>Love Compatibility</Link>
                </NavItem>
                <NavItem>
                    <Link to="/cocktail" onClick={closeMobileMenu}  className='nav-links'>Enjoy a Cocktail!</Link>
                </NavItem>

            </ul>
                <NavItem>
                    {button && <Button className={isOriginal ? 'original' : 'secondary-button'} value="Theme Switcher" onClick={toggle} >Change Theme</Button>}
                </NavItem>
            </NavBarContainer>
        </NavBarStyle>

    )
}

export default NavBar;

const NavItem= styled.div`
  //height: 50px;
`;

const Button= styled.div`
  padding: 8px 20px;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  transition: all 0.3s ease-out;
  border: 1px solid white;
  :hover{
    transition: all 0.3s ease-out;
    color: #242424;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  //margin-left: 500px;

`;

const NavBarStyle = styled.div`
  //background:#d585d2;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  
`;