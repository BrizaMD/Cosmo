import React from 'react';
import cookie from '../../static/img/003-fortune-cookie-2.png';
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

    <FortuneCookie>

        <img src={cookie}/>
        <h1> Click </h1>
    </FortuneCookie>

</>
    )
}

export default Home;

const FortuneCookie = styled.div`
  border: 1px solid transparent;
  max-width: 550px;
  position: absolute;
  top: 70vh;
  right: 10vw;
  transform: translate(-50%, -50%) ;
  //scaleX(-1)
  margin: auto;
  align-items: center;
  text-align: center;
img{
  width: 100px ;
}
  
  h1{
    cursor: pointer;
    color: white;
    font-size: 20px;
  }
  // background-image: url(${cookie}) ;
  // background-size: contain;
  // background-repeat: no-repeat;
  // width: 150px;
  // height: 300px;
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
  opacity: 0.8;
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
