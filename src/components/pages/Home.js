import React, {useState} from 'react';
import cookie from '../../static/img/003-fortune-cookie-2.png';
import cat from '../../static/img/002-cat-lover.png';
import dog from '../../static/img/005-dog-lover-1.png';
import axios from "axios";
import '../../App.css'
import video from "../../static/video/Pexels Videos 1795797.mp4";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';


const Home = () => {
    const adviceUrl = 'https://api.adviceslip.com/advice';
    const catUrl = 'https://cataas.com/cat';
    const dogUrl = 'https://random.dog/';
    const [advice, setAdvice] = useState("");
    const [isAdvice, setAdviceState] = useState(false);

    const getAdvice = async () => {
        await axios.get(adviceUrl)
            .then(async res => {
               setAdvice(await res.data.slip.advice);
                setAdviceState(!isAdvice);
            })
    }


    return (
        <>
            <BackgroundContainer>
                <video data-testid="background-video" autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <IconContainer>
            <Cat data-testid="cat-icon">
                <a href={catUrl} rel="noreferrer"><img src={cat} alt="cat"/></a>
            </Cat>
            <Dog data-testid="dog-icon">
                <a href={dogUrl} rel="noreferrer"><img src={dog} alt="dog"/></a>
            </Dog>
            <FortuneCookie data-testid="fortune-icon">
                <img src={cookie} alt="fortune cookie" onClick={getAdvice}/>
            </FortuneCookie>
            </IconContainer>


            {
                isAdvice ?
                    <Advice id={"result"}>
                        <Typewriter
                            onInit={(typewriter) => {

                                typewriter.typeString(advice)
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .start();
                            }}
                        />


                    </Advice>
                    :
                    <Advice>
                    </Advice>
            }
            </>
    )
}



export default Home;

const IconContainer = styled.div`

  margin: 10px;
  .first {
    width: 25%;
    display: inline-block;
  }

  .second {
    width: 25%;
    display: inline-block;
  }

  .third {
    width: 25%;
    display: inline-block;
  }

  @media screen and (max-width: 500px) {

    .first,
    .second,
    .third {
      width: 70%;
    }
  }

`;

const Advice = styled.div`
  border: transparent;
  max-width: 550px;
  position: absolute;
  top: 40vh;
  right: 0vw;
  transform: translate(-50%, -50%);
  margin: auto;
  align-items: center;
  text-align: center;
  font-size: 20px;
  color: white;
  
`;



const FortuneCookie = styled.div`
  border: 1px solid transparent;
  max-width: 80px;
  position: absolute;
  top: 70vh;
  right: 3vw;
  transform: translate(-50%, -50%);
  //margin: auto;
  align-items: center;
  text-align: center;
  justify-self: start;
  margin-left: 20px;

  img {
    width: 80px;
    cursor: pointer;
    :hover {
      transition-duration: 0.1s;
      transform: scale(1.2);
      filter: drop-shadow(0 0 0.75rem rgb(255, 217, 0));
    }
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
  max-width: 80px;
  position: absolute;
  top: 80vh;
  right: 5vw;
  transform: translate(-50%, -50%);
  //margin: auto;
  align-items: center;
  text-align: center;
  justify-self: start;
  margin-left: 20px;

  
  img {
    width: 80px;
    cursor: pointer;
    :hover {
    transition-duration: 0.1s;
    transform: scale(1.2);
      filter: drop-shadow(0 0 0.75rem rgb(0, 255, 255));

  }
    
  }
`;
const Dog = styled.div`

  border: 1px solid transparent;
  max-width: 80px;
  position: absolute;
  top: 80vh;
  right: 0vw;
  transform: translate(-50%, -50%);
  //margin: auto;
  align-items: center;
  text-align: center;
  justify-self: start;
  margin-left: 20px;

  img {
    width: 80px;
    cursor: pointer;
    :hover {
      transition-duration: 0.1s;
      transform: scale(1.2);
      filter: drop-shadow(0 0 0.75rem rgb(255, 51, 153));
    }
  }
  
`;

