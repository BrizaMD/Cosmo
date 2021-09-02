import React, {useContext, useState} from 'react';
import cookie from '../../static/img/003-fortune-cookie-2.png';
import cat from '../../static/img/002-cat-lover.png';
import dog from '../../static/img/005-dog-lover-1.png';
import axios from "axios";
import '../../App.css'
import video from "../../static/video/Pexels Videos 1795797.mp4";
import video1 from "../../static/video/puppies.mp4";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import ThemeContext from "../../context/ThemeProvider";


const Home = () => {
    const adviceUrl = 'https://api.adviceslip.com/advice';
    const catUrl = 'https://cataas.com/cat';
    const dogUrl = 'https://random.dog/';
    const [advice, setAdvice] = useState("");
    const [isAdvice, setAdviceState] = useState(false);

    const { isOriginal } = useContext(ThemeContext);

    const getAdvice = async () => {
        await axios.get(adviceUrl)
            .then(async res => {
               setAdvice(await res.data.slip.advice);
                setAdviceState(!isAdvice);
            })
    }


    return (
        <>
            <BackgroundContainer data-testid="background-video">
                <video hidden={isOriginal} autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>

                <video hidden={!isOriginal} autoPlay loop muted>
                    <source src={video1} type="video/mp4"/>
                </video>

            <SignContainer>
                    <div>
                        <a href={catUrl} target="_blank" rel="noreferrer"><img src={cat} alt="cat"/></a>
                        <img data-testid="fortune-icon" src={cookie} alt="fortune cookie" onFocus={() => setAdviceState(false)} onClick={getAdvice}/>

                        <a href={dogUrl} target="_blank" rel="noreferrer"><img src={dog} alt="dog"/></a>
                    </div>
            </SignContainer>


            {
                isAdvice ?
                    <Advice id={"result"}>
                        <Typewriter
                            onInit={(typewriter) => {

                                typewriter.typeString(advice)
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start();
                            }}
                        />


                    </Advice>
                    :
                    <Advice/>
            }
            </BackgroundContainer>
        </>

    )
}



export default Home;

const Advice = styled.div`
  border: transparent;
  margin-top: 400px;
  font-size: 30px;
  color: white;
  filter: drop-shadow(0 0 0.75rem rgb(255, 51, 51));
  
`;

const SignContainer = styled.div`
    padding: 30px;
    position: fixed;
  img {
        width: 70px;
        height: 70px;
        cursor: pointer;
        :hover {
          transition-duration: 0.1s;
          transform: scale(1.2);
          filter: drop-shadow(0 0 0.75rem rgb(255, 217, 0));
        }
      }
  
  
`;


const BackgroundContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  video{  
    opacity: 0.8;
    z-index: -1;
    position: absolute;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);


    @media (max-width: 800px) {
      position: absolute;
      bottom:0;
      left:100%;

    }
    @media (max-width: 600px) {
      position: absolute;
      bottom:0;
      left:100%;
    }
    @media (max-width: 400px) {
      position: absolute;
      bottom:0;
      left:100%;
    }
  
}

`;