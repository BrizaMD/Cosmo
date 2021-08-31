import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Navbar.css';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []) // ha változik a mérete nem ugrik random elő a gomb/tűnik el


    window.addEventListener('resize', showButton);
    return(

        <NavBarStyle>

            <NavBarContainer>

                <div  className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>


            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
                    {button && <Button value="Theme Switcher" onClick={closeMobileMenu} >Change Theme</Button>}
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
    background: #fff;
    color: #242424;
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  margin-left: 500px;

`;

const NavBarStyle = styled.div`
  background: linear-gradient(90deg, rgb(255,255,255) 0%, rgb(26, 23, 23) 100%);
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


// const NavbarLogo= styled.div`
//   justify-self: start;
//   margin-left: 20px;
//   cursor: pointer;
//   text-decoration: none;
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   img{
//     width: 16%;
//
//   }
// `;
