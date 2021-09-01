import React from "react";
import styled from "styled-components";

const Footer = () => {

    return (
        <FooterContainer>
            <StyledFooter>
                <SocialMediaSection>


                    <SocialMediaWrap>
                        <SocialMedia>
                            <a
                                href="https://www.facebook.com/"
                                target='_blank'
                                aria-label='Facebook'
                                rel="noreferrer">
                                <Item>
                                    <i className='fab fa-facebook-f'/>
                                </Item>
                            </a>
                            <a
                                href="https://instagram.com/"
                                target='_blank'
                                aria-label='Instagram'
                                rel="noreferrer"
                            >
                                <Item>
                                    <i className='fab fa-instagram'/>
                                </Item>
                            </a>
                            <a
                                href="https://www.youtube.com/"
                                target='_blank'
                                aria-label='Youtube'
                                rel="noreferrer">
                                <Item>
                                    <i className='fab fa-youtube'/>
                                </Item>
                            </a>
                            <a
                                href="https://twitter.com/"
                                target='_blank'
                                aria-label='Twitter'
                                rel="noreferrer">
                                <Item>
                                    <i className='fab fa-twitter'/>
                                </Item>
                            </a>
                            <a
                                href="https://linkedin.com/"
                                target='_blank'
                                aria-label='LinkedIn'
                                rel="noreferrer">
                                <Item>
                                    <i className='fab fa-linkedin'/>
                                </Item>
                            </a>
                        </SocialMedia>
                    </SocialMediaWrap>
                </SocialMediaSection>
            </StyledFooter>
        </FooterContainer>
    )
}

export default Footer;

// <Copyright id='copyright'>© DreamTeam</Copyright>
const Copyright = styled.div` color: #fff;
  font-size: 15px;
  //justify-self: start;
  margin-left: 120px;
  text-decoration: none;
  //display: flex;
  align-items: center;
  // margin-bottom: auto;
`;

const Item = styled.div`
  color: #fff;
  font-size: 24px;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  
  display: flex;
  align-items: center;
  margin-bottom: 46px;
  
  a{
    text-decoration: none;
  }
`;


const FooterContainer = styled.div`
  background: linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%);  padding: 1rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  position: fixed;
  width: 100%;
  height:10%;

`;


const SocialMediaSection = styled.div`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  color: #fff;
  font-size: 24px;
`;

const StyledFooter = styled.div`
  //position: fixed;
  //bottom: 0;
  //width: 100%;
  //background-color: #d585d2;
  //color: white;
  //
  //#copyright{
  //    float: left;
  //}
  //
  //#socials{
  //    float: right;
  //}

`;