import React from 'react';
import fortuneCookie from '../../static/img/fortunecookie1.png';
import brokenFortuneCookie from '../../static/img/fortunecookie2.png';
import axios from "axios";
import '../../App.css'
import video from "../../static/video/Pexels Videos 1795797.mp4";
import styled from "styled-components";
import box from "../../static/img/box.png";


const Home = () => {
    const url = 'https://api.adviceslip.com/advice';
    let advice = {};

    // const getAdvice = async () => {
    //     data = fetcher(url);
    //     console.log(data);
    // }

    const getAdvice = async () => {
        await axios.get(url)
            .then(async res =>{
                advice = await res.data.slip.advice;
            })
        console.log(advice);
    }

    return(
<>
        <BackgroundContainer>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </video>
        </BackgroundContainer>
{/*<Card>*/}
{/*        <Fortune id={"fortune"}>*/}
{/*            <img src={box} alt="fortune cookie" onClick={getAdvice}/>*/}
{/*        /!*    <img src={brokenFortuneCookie} alt="broken fortune cookie" />*!/*/}
{/*        </Fortune>*/}
{/*</Card>*/}
</>
    )
}

export default Home;


const Card = styled.div`
  border-radius: initial;
  min-width: 30rem;
  display: flex;
  max-width: 500px;
  margin: 300px 20px 20px auto;   
  text-align: center;

  img {
    width: 30rem;
    height: 11rem;
    object-fit: cover;
    transform: scale(1.1);
  }

`;

const CardBody = styled.div`
  margin: 1rem;

`;

const Fortune = styled.div`
    
    img{
      max-width: 100px;
    }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  opacity: 0.3;
  z-index: -1;
  position: relative;

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

`;
