import React from "react";
import styled from "styled-components";

const Footer = () => {

    return (
        <StyledFooter>
            <div id='copyright'>© DreamTeam</div>
            <div id='socials'><a href="#">SocialMedia</a></div>
        </StyledFooter>
    )
}

export default Footer;

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #d585d2;
    color: white;
  
    #copyright{
        float: left;
    }
  
    #socials{
        float: right;
    }

`;