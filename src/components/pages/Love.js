import React from 'react';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import video from '../../static/video/Love - 3191.mp4';

const Love = () => {

    return(
        <HeroContainer>
            <video autoPlay loop muted  >
                <source src={video} type="video/mp4"/>
            </video>



        </HeroContainer>
    )
}

export default Love;

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  opacity: 0.5;

  video{
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;