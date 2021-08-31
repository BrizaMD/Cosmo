import React, {useState} from 'react';
import cookie from '../../static/img/003-fortune-cookie-2.png';
import cat from '../../static/img/002-cat-lover.png';
import dog from '../../static/img/005-dog-lover-1.png';
import axios from "axios";
import '../../App.css'
import video from "../../static/video/Pexels Videos 1795797.mp4";
import styled from "styled-components";
import Typical from 'react-typical';


const Home = () => {
    const url = 'https://api.adviceslip.com/advice';
    const [advice, setAdvice] = useState("");
    const [isAdvice, setAdviceState] = useState(false);

    const getAdvice = async () => {
        await axios.get(url)
            .then(async res => {
               setAdvice(await res.data.slip.advice);
                setAdviceState(true);
            })
        console.log(typeof  advice);
    }
    return (
        <>
            <BackgroundContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <Cat>
                <img src={cat} alt="fortune cookie" onClick={getAdvice}/>
            </Cat>
            <Dog>
                <img src={dog} alt="fortune cookie" onClick={getAdvice}/>
            </Dog>


            <FortuneCookie>
                <img src={cookie} alt="fortune cookie" onClick={getAdvice}/>
            </FortuneCookie>
            <h1>Hi, Have a nice day!</h1>
            <p>I'm a developer</p>


            {
                isAdvice ?
                    <Advice>
                        { advice }
                    </Advice>
                    :
                    <Advice></Advice>
            }
            </>
    )
}



export default Home;

const Advice = styled.div`
  border: 1px solid black;
  max-width: 550px;
  position: absolute;
  top: 40vh;
  right: 10vw;
  transform: translate(-50%, -50%);
  //scaleX(-1)
  margin: auto;
  align-items: center;
  text-align: center;
  font-size: 20px;
`;

const FortuneCookie = styled.div`
  border: 1px solid transparent;
  max-width: 550px;
  position: absolute;
  top: 80vh;
  right: 0vw;
  transform: translate(-50%, -50%);
  //scaleX(-1)
  margin: auto;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    cursor: pointer;
  }

  h1 {
    cursor: pointer;
    color: white;
    font-size: 20px;
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

const Cat = styled.div`
  border: 1px solid transparent;
  max-width: 550px;
  position: absolute;
  top: 80vh;
  right: 7vw;
  transform: translate(-50%, -50%);
  margin: auto;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    cursor: pointer;
  }
`;
const Dog = styled.div`

  border: 1px solid transparent;
  max-width: 550px;
  position: absolute;
  top: 80vh;
  right: 14vw;
  transform: translate(-50%, -50%);
  margin: auto;
  align-items: center;
  text-align: center;

  img {
    width: 100px;
    cursor: pointer;
  }
  
`;

