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
        <HomePage>
            <BackgroundContainer>
                <video autoPlay loop muted data-testid="background-video">
                    <source src={video} type="video/mp4"/>
                </video>
            </BackgroundContainer>

            <SignContainer>
                    <div><a href={catUrl} rel="noreferrer"><img src={cat} alt="cat"/></a></div>
                    <div><a href={dogUrl} rel="noreferrer"><img src={dog} alt="dog"/></a></div>
                    <div><img data-testid="fortune-icon" src={cookie} alt="fortune cookie" onClick={getAdvice}/></div>
            </SignContainer>


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
            </HomePage>
    )
}



export default Home;

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


const HomePage = styled.div`
    width: 100%;
    margin: auto;
`;

const SignContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  
  @media (max-width: 800px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: auto auto;
  }

  grid-gap: 20px;
  left: 90%;
  padding:5px 20px 5px 20px;
  justify-content: space-evenly;
  div {
    width: calc(16.6% - 10px);
    img {
      width: 75px;
      height: 75px;
      cursor: pointer;
      :hover {
        transition-duration: 0.1s;
        transform: scale(1.2);
        filter: drop-shadow(0 0 0.75rem rgb(255, 217, 0));
      }
    }
  }
  
`;


const BackgroundContainer = styled.div`
  width: 100%;
  //display: flex;
  //flex-direction: column;
  background-size: 100%;
  justify-content: center;
  //align-items: center;
  //object-fit: contain;
  opacity: 0.8;
  z-index: -1;
  position: absolute;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto;

  @media (max-width: 1000px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto auto;
  }
  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }

`;

// const FortuneCookie = styled.div`
//   border: 1px solid transparent;
//   max-width: 80px;
//   position: absolute;
//   top: 70vh;
//   right: 3vw;
//   transform: translate(-50%, -50%);
//   //margin: auto;
//   align-items: center;
//   text-align: center;
//   justify-self: start;
//   margin-left: 20px;
//
//   img {
//     width: 80px;
//     cursor: pointer;
//     :hover {
//       transition-duration: 0.1s;
//       transform: scale(1.2);
//       filter: drop-shadow(0 0 0.75rem rgb(255, 217, 0));
//     }
//   }
// `;