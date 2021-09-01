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
                setAdviceState(true);
            })
    }


    return (
        <>
            <BackgroundContainer>
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <Cat>
                <a href={catUrl} rel="noreferrer"><img src={cat} alt="cat"/></a>
            </Cat>
            <Dog>
                <a href={dogUrl} rel="noreferrer"><img src={dog} alt="dog"/></a>
            </Dog>


            <FortuneCookie>
                <img src={cookie} alt="fortune cookie" onClick={getAdvice}/>
            </FortuneCookie>


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
                            Ask fortune cookie :)
                    </Advice>
            }
            </>
    )
}



export default Home;

const Advice = styled.div`
  border: transparent;
  max-width: 550px;
  position: absolute;
  top: 35vh;
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

